J$.iids = {"9":[2,14,2,21],"17":[3,5,3,12],"25":[3,13,3,15],"33":[3,5,3,16],"41":[3,5,3,17],"49":[2,22,4,2],"57":[2,22,4,2],"65":[2,22,4,2],"73":[2,22,4,2],"81":[2,10,4,3],"89":[2,10,4,3],"97":[2,10,4,3],"105":[5,1,5,3],"113":[5,9,6,2],"121":[5,9,6,2],"129":[5,9,6,2],"137":[5,9,6,2],"145":[5,1,6,3],"147":[5,1,5,8],"153":[6,9,7,2],"161":[6,9,7,2],"169":[6,9,7,2],"177":[6,9,7,2],"185":[5,1,7,3],"187":[5,1,6,8],"193":[5,1,7,4],"201":[11,14,11,21],"209":[12,5,12,12],"217":[12,13,12,15],"225":[12,5,12,16],"233":[12,5,12,17],"241":[11,22,13,2],"249":[11,22,13,2],"257":[11,22,13,2],"265":[11,22,13,2],"273":[11,10,13,3],"281":[11,10,13,3],"289":[11,10,13,3],"297":[14,1,14,3],"305":[14,9,16,2],"313":[14,9,16,2],"321":[14,9,16,2],"329":[14,9,16,2],"337":[14,1,16,3],"339":[14,1,14,8],"345":[16,9,18,2],"353":[16,9,18,2],"361":[16,9,18,2],"369":[16,9,18,2],"377":[14,1,18,3],"379":[14,1,16,8],"385":[14,1,18,4],"393":[1,1,19,1],"401":[1,1,19,1],"409":[2,22,4,2],"417":[2,22,4,2],"425":[5,9,6,2],"433":[5,9,6,2],"441":[6,9,7,2],"449":[6,9,7,2],"457":[11,22,13,2],"465":[11,22,13,2],"473":[14,9,16,2],"481":[14,9,16,2],"489":[16,9,18,2],"497":[16,9,18,2],"505":[1,1,19,1],"513":[1,1,19,1],"nBranches":0,"originalCodeFileName":"/home/bryan/Documents/YNC/other/promises/PromiseKeeper/tests-unit/input/MissingExceptionalReject2.js","instrumentedCodeFileName":"/home/bryan/Documents/YNC/other/promises/PromiseKeeper/tests-unit/input/MissingExceptionalReject2_jalangi_.js","code":"// basic case where there are no reject reactions\nvar p1 = new Promise(function (resolve) {\n    resolve(42);\n});\np1.then(function (x) {\n}).then(function (y) {\n});\n\n\n// basic case where there are no reject reactions\nvar p1 = new Promise(function (resolve) {\n    resolve(42);\n});\np1.then(function (x) {\n    // throw Error('unhandled error');\n}).then(function (y) {\n\n});\n"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(393, '/home/bryan/Documents/YNC/other/promises/PromiseKeeper/tests-unit/input/MissingExceptionalReject2_jalangi_.js', '/home/bryan/Documents/YNC/other/promises/PromiseKeeper/tests-unit/input/MissingExceptionalReject2.js');
            J$.N(401, 'p1', p1, 0);
            var p1 = J$.X1(97, J$.W(89, 'p1', J$.F(81, J$.R(9, 'Promise', Promise, 2), 1)(J$.T(73, function (resolve) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(49, arguments.callee, this, arguments);
                            arguments = J$.N(57, 'arguments', arguments, 4);
                            resolve = J$.N(65, 'resolve', resolve, 4);
                            J$.X1(41, J$.F(33, J$.R(17, 'resolve', resolve, 0), 0)(J$.T(25, 42, 22, false)));
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 49)), p1, 3));
            J$.X1(193, J$.M(185, J$.M(145, J$.R(105, 'p1', p1, 1), 'then', 0)(J$.T(137, function (x) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            x = J$.N(129, 'x', x, 4);
                        } catch (J$e) {
                            J$.Ex(425, J$e);
                        } finally {
                            if (J$.Fr(433))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 113)), 'then', 0)(J$.T(177, function (y) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            y = J$.N(169, 'y', y, 4);
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 153)));
            var p1 = J$.X1(289, J$.W(281, 'p1', J$.F(273, J$.R(201, 'Promise', Promise, 2), 1)(J$.T(265, function (resolve) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            resolve = J$.N(257, 'resolve', resolve, 4);
                            J$.X1(233, J$.F(225, J$.R(209, 'resolve', resolve, 0), 0)(J$.T(217, 42, 22, false)));
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 241)), p1, 3));
            J$.X1(385, J$.M(377, J$.M(337, J$.R(297, 'p1', p1, 1), 'then', 0)(J$.T(329, function (x) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            x = J$.N(321, 'x', x, 4);
                        } catch (J$e) {
                            J$.Ex(473, J$e);
                        } finally {
                            if (J$.Fr(481))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 305)), 'then', 0)(J$.T(369, function (y) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(345, arguments.callee, this, arguments);
                            arguments = J$.N(353, 'arguments', arguments, 4);
                            y = J$.N(361, 'y', y, 4);
                        } catch (J$e) {
                            J$.Ex(489, J$e);
                        } finally {
                            if (J$.Fr(497))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 345)));
        } catch (J$e) {
            J$.Ex(505, J$e);
        } finally {
            if (J$.Sr(513)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
