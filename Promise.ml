exception Foo of string

type 'r reaction = ('r -> unit)

type ('a, 'b) promise = Pending of ('a reaction list * 'b reaction list) | F of 'a | R of 'b

type queue = (unit lazy_t) list

let (pi: queue ref) = ref [] ;;

let default = fun a -> a; ();;

let rec exec_until_empty (): unit = 
  match !pi with 
  | [] -> ()
  | (task) :: xs -> 
      ((Lazy.force task); 
      exec_until_empty () )
;;

let resolve (p:('a, 'b) promise ref) (v:'a) : unit = 
  match !p with 
  | Pending (f_reacts, r_reacts) -> 
      pi:= List.append (!pi) (List.map (fun f -> (lazy (f v))) f_reacts);
      p:= F v;
  | _ -> raise (Foo "Resolving a settled promise")
  ;;

let reject (p:('a, 'b) promise ref) (v:'b) : unit = 
  match !p with 
  | Pending (f_reacts, r_reacts) -> 
      pi:= List.append (!pi) (List.map (fun f -> lazy (f v)) r_reacts);
      p:= R v;
  | _ -> raise (Foo "Rejecting a settled promise")
  ;;

let onResolve (p:('a, 'b) promise ref) (fn:'a reaction) : unit =
  match !p with 
  | Pending (f_reacts, r_reacts) -> 
      p := Pending (fn :: f_reacts , r_reacts)
  | F v | R v -> raise (Foo "Registering a resolve function on a settled promise")
  ;;

let onReject (p:('a, 'b) promise ref) (fn:'b reaction) : unit =
  match !p with 
  | Pending (f_reacts, r_reacts) -> 
      p := Pending (f_reacts , fn :: r_reacts)
  | F v | R v -> raise (Foo "Registering a reject function on a settled promise")
  ;;

let link (p1:('a, 'b) promise ref) (p2:('a, 'b) promise ref) : unit = 
  match !p1 with 
  | Pending (f_reacts, r_reacts) -> 
      p1 := Pending (default :: f_reacts , default :: r_reacts)
  | F v | R v -> 
      pi := List.append (!pi) [lazy (default v)]
;;

let then_ (p1:('a, 'b) promise ref) (fun1:('a->'c)) (fun2:('b -> 'd)) : ('c, 'd) promise  = 
  match !p1 with 
  | Pending (f_reacts, r_reacts) -> raise (Foo "pending for the promise to finish")
  | F v -> F (fun1 v)
  | R v -> R (fun2 v)
  ;;

let (pro: (int, string) promise  ref ) = ref (Pending ([], []));;

let res = resolve pro 1;;