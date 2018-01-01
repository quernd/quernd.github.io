var starter = (function (exports) {
'use strict';

var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;


/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}


/* No side effect */

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  }
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}


/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}


/* No side effect */

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        var x = a;
        var y = b;
        if (x < y) {
          return -1;
        } else if (x === y) {
          return 0;
        } else {
          return 1;
        }
      } else {
        var is_a_number = +(a_type === "number");
        var is_b_number = +(b_type === "number");
        if (is_a_number !== 0) {
          if (is_b_number !== 0) {
            return caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number !== 0) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x$1 = a;
          var y$1 = b;
          if (x$1 === y$1) {
            return 0;
          } else if (x$1 < y$1) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "compare: functional value"
              ];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [
                  invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return 0;
                } else {
                  var res = caml_compare(a$1[i], b$1[i]);
                  if (res !== 0) {
                    return res;
                  } else {
                    _i = i + 1 | 0;
                    continue ;
                    
                  }
                }
              }
            } else if (len_a < len_b) {
              var a$2 = a;
              var b$2 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while(true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue ;
                    
                  }
                }
              }
            } else {
              var a$3 = a;
              var b$3 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while(true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue ;
                    
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              }
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  }
}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return +(caml_compare(a, b) >= 0);
}

function caml_lessequal(a, b) {
  return +(caml_compare(a, b) <= 0);
}


/* No side effect */

/* stdin Not a pure module */

function caml_sys_random_seed() {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_get_argv() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    if (match.argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              match.argv[0],
              match.argv
            ];
    }
  } else {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  }
}


/* No side effect */

function div(x, y) {
  if (y === 0) {
    throw division_by_zero;
  } else {
    return x / y | 0;
  }
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);


/* imul Not a pure module */

var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);


/* repeat Not a pure module */

var min_int$1 = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int$1 = /* record */[
  /* hi */134217727,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return +((x & 2147483648) !== 0);
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return /* false */0;
  }
}

function neg(x) {
  if (eq(x, min_int$1)) {
    return min_int$1;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits) {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function asr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0) {
      exit$3 = 4;
    } else if ($$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0) {
        exit$2 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648) {
        exit$1 = 2;
      } else if ($$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648) {
        exit$4 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
            
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int$1;
      }
    }
    
  }
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return /* true */1;
  } else if (hi < other_hi) {
    return /* false */0;
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq(x, y) {
  return 1 - eq(x, y);
}

function lt(x, y) {
  return 1 - ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return /* true */1;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return /* false */0;
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function le(x, y) {
  return 1 - gt(x, y);
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int$1;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int$1;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div$1(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0) {
      exit$1 = 2;
    } else if (other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0) {
          exit = 1;
        } else if (self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int$1)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div$1(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0) {
          exit$2 = 3;
        } else if (approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div$1(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648) {
        exit$3 = 2;
      } else if (other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
            
          } else {
            return neg(div$1(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div$1(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = Math.max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            }
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          }
          return res;
        }
      }
      
    }
    
  }
}

function mod_$1(self, other) {
  var y = mul(div$1(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div$1(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0) {
    exit = 1;
  } else if (match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}


/* two_ptr_32_dbl Not a pure module */

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  }
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base) {
      if (base === /* Hex */1) {
        len = len + 2 | 0;
      }
      
    } else {
      len = len + 1 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = discard_sign(x$1);
          var match$1 = div_mod(y, wbase);
          var quotient = add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          }
        } else {
          var match$3 = div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          }
        }
        break;
    case 1 : 
        s = to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = discard_sign(x$1);
          var match$5 = div_mod(y$1, wbase$1);
          var match$6 = div_mod(add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = add(add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          }
        } else {
          var match$8 = div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          }
        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            }
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return +(s.length > (prec$1 + 1 | 0));
                    })()) {
                p = p - 1 | 0;
              }
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              }
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;


/* float_of_string Not a pure module */

function caml_create_string(len) {
  if (len < 0) {
    throw [
          invalid_argument,
          "String.create"
        ];
  } else {
    return new Array(len);
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }
    return s;
  }
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}


/* No side effect */

var id = [0];

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}


/* No side effect */

var not_implemented = (function (s){ throw new Error(s)});


/* not_implemented Not a pure module */

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}


/* No side effect */

var Exit = create("Pervasives.Exit");

function min(x, y) {
  if (caml_lessequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (caml_greaterequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

var min_int = -2147483648;

function string_of_int(param) {
  return "" + param;
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

function input(_, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          invalid_argument,
          "input"
        ];
  } else {
    return not_implemented("caml_ml_input not implemented by bucklescript yet\n");
  }
}

var max_int = 2147483647;


/* No side effect */

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
      
    } else {
      return len;
    }
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1) {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
          
        } else {
          return l$1[0];
        }
      } else {
        throw [
              failure,
              "nth"
            ];
      }
    }
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  }
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return $at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = _2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function rev_map(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[
        _1(f, param[0]),
        accu
      ];
      continue ;
      
    } else {
      return accu;
    }
  }
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      _1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = _2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  }
}

function fold_right$1(f, l, accu) {
  if (l) {
    return _2(f, l[0], fold_right$1(f, l[1], accu));
  } else {
    return accu;
  }
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = _3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  }
}

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }
}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (caml_compare(param[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  }
}

function assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (caml_compare(match[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return match[1];
      }
    } else {
      throw not_found;
    }
  }
}

function remove_assoc(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (caml_compare(pair[0], x)) {
      return /* :: */[
              pair,
              remove_assoc(x, l)
            ];
    } else {
      return l;
    }
  } else {
    return /* [] */0;
  }
}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (_1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
            
          } else {
            _param = l;
            continue ;
            
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      }
    });
}

function combine(l1, l2) {
  if (l1) {
    if (l2) {
      return /* :: */[
              /* tuple */[
                l1[0],
                l2[0]
              ],
              combine(l1[1], l2[1])
            ];
    } else {
      throw [
            invalid_argument,
            "List.combine"
          ];
    }
  } else if (l2) {
    throw [
          invalid_argument,
          "List.combine"
        ];
  } else {
    return /* [] */0;
  }
}

var filter = find_all;


/* No side effect */

/* No side effect */

/* No side effect */

var forward_tag = 250;


/* No side effect */

var Undefined = create("CamlinternalLazy.Undefined");

function raise_undefined() {
  throw Undefined;
}

function force_lazy_block(blk) {
  var closure = blk[0];
  blk[0] = raise_undefined;
  try {
    var result = _1(closure, /* () */0);
    blk[0] = result;
    blk.tag = forward_tag;
    return result;
  }
  catch (e){
    blk[0] = (function () {
        throw e;
      });
    throw e;
  }
}


/* No side effect */

var Failure = create("Stream.Failure");

var $$Error = create("Stream.Error");

function fill_buff(b) {
  b[/* len */2] = input(b[/* ic */0], b[/* buff */1], 0, b[/* buff */1].length);
  b[/* ind */3] = 0;
  return /* () */0;
}

function get_data(count, _d) {
  while(true) {
    var d = _d;
    if (typeof d === "number") {
      return d;
    } else {
      switch (d.tag | 0) {
        case 0 : 
            return d;
        case 1 : 
            var d2 = d[1];
            var match = get_data(count, d[0]);
            if (typeof match === "number") {
              _d = d2;
              continue ;
              
            } else if (match.tag) {
              throw [
                    assert_failure,
                    [
                      "stream.ml",
                      53,
                      12
                    ]
                  ];
            } else {
              return /* Scons */__(0, [
                        match[0],
                        /* Sapp */__(1, [
                            match[1],
                            d2
                          ])
                      ]);
            }
            break;
        case 2 : 
            var f = d[0];
            var tag = f.tag | 0;
            _d = tag === 250 ? f[0] : (
                tag === 246 ? force_lazy_block(f) : f
              );
            continue ;
            case 3 : 
            var g = d[0];
            var match$1 = g[/* curr */0];
            if (match$1) {
              var match$2 = match$1[0];
              if (match$2) {
                g[/* curr */0] = /* None */0;
                return /* Scons */__(0, [
                          match$2[0],
                          d
                        ]);
              } else {
                return /* Sempty */0;
              }
            } else {
              var match$3 = _1(g[/* func */1], count);
              if (match$3) {
                return /* Scons */__(0, [
                          match$3[0],
                          d
                        ]);
              } else {
                g[/* curr */0] = /* Some */[/* None */0];
                return /* Sempty */0;
              }
            }
            break;
        case 4 : 
            var b = d[0];
            if (b[/* ind */3] >= b[/* len */2]) {
              fill_buff(b);
            }
            if (b[/* len */2]) {
              var r = b[/* buff */1][b[/* ind */3]];
              b[/* ind */3] = b[/* ind */3] + 1 | 0;
              return /* Scons */__(0, [
                        r,
                        d
                      ]);
            } else {
              return /* Sempty */0;
            }
            break;
        
      }
    }
  }
}

function peek(s) {
  while(true) {
    var match = s[/* data */1];
    if (typeof match === "number") {
      return /* None */0;
    } else {
      switch (match.tag | 0) {
        case 0 : 
            return /* Some */[match[0]];
        case 1 : 
            var d = get_data(s[/* count */0], s[/* data */1]);
            if (typeof d === "number") {
              return /* None */0;
            } else if (d.tag) {
              throw [
                    assert_failure,
                    [
                      "stream.ml",
                      82,
                      12
                    ]
                  ];
            } else {
              s[1] = d;
              return /* Some */[d[0]];
            }
            break;
        case 2 : 
            var f = match[0];
            var tag = f.tag | 0;
            s[1] = tag === 250 ? f[0] : (
                tag === 246 ? force_lazy_block(f) : f
              );
            continue ;
            case 3 : 
            var g = match[0];
            var match$1 = g[/* curr */0];
            if (match$1) {
              return match$1[0];
            } else {
              var x = _1(g[/* func */1], s[/* count */0]);
              g[/* curr */0] = /* Some */[x];
              return x;
            }
            break;
        case 4 : 
            var b = match[0];
            if (b[/* ind */3] >= b[/* len */2]) {
              fill_buff(b);
            }
            if (b[/* len */2]) {
              return /* Some */[b[/* buff */1][b[/* ind */3]]];
            } else {
              s[1] = /* Sempty */0;
              return /* None */0;
            }
        
      }
    }
  }
}

function junk(s) {
  while(true) {
    var match = s[/* data */1];
    var exit$$1 = 0;
    if (typeof match === "number") {
      exit$$1 = 1;
    } else {
      switch (match.tag | 0) {
        case 0 : 
            s[0] = s[/* count */0] + 1 | 0;
            s[1] = match[1];
            return /* () */0;
        case 3 : 
            var g = match[0];
            var match$1 = g[/* curr */0];
            if (match$1) {
              s[0] = s[/* count */0] + 1 | 0;
              g[/* curr */0] = /* None */0;
              return /* () */0;
            } else {
              exit$$1 = 1;
            }
            break;
        case 4 : 
            var b = match[0];
            s[0] = s[/* count */0] + 1 | 0;
            b[/* ind */3] = b[/* ind */3] + 1 | 0;
            return /* () */0;
        default:
          exit$$1 = 1;
      }
    }
    if (exit$$1 === 1) {
      var match$2 = peek(s);
      if (match$2) {
        continue ;
        
      } else {
        return /* () */0;
      }
    }
    
  }
}

function next(s) {
  var match = peek(s);
  if (match) {
    junk(s);
    return match[0];
  } else {
    throw Failure;
  }
}

function from(f) {
  return /* record */[
          /* count */0,
          /* data : Sgen */__(3, [/* record */[
                /* curr : None */0,
                /* func */f
              ]])
        ];
}

function of_string$1(s) {
  var count = [0];
  return from((function () {
                var c = count[0];
                if (c < s.length) {
                  count[0] = count[0] + 1 | 0;
                  return /* Some */[get(s, c)];
                } else {
                  return /* None */0;
                }
              }));
}

function of_channel$1(ic) {
  return /* record */[
          /* count */0,
          /* data : Sbuffio */__(4, [/* record */[
                /* ic */ic,
                /* buff */new Array(4096),
                /* len */0,
                /* ind */0
              ]])
        ];
}


/* No side effect */

function escaped$2(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 : 
          return "\\b";
      case 9 : 
          return "\\t";
      case 10 : 
          return "\\n";
      case 0 : 
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 12 : 
          exit = 1;
          break;
      case 13 : 
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 : 
        var s = new Array(4);
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return bytes_to_string(s);
    case 2 : 
        var s$1 = new Array(1);
        s$1[0] = c;
        return bytes_to_string(s$1);
    
  }
}

function uppercase$2(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32 | 0;
  } else {
    return c;
  }
}


/* No side effect */

function make$1(n, c) {
  var s = caml_create_string(n);
  caml_fill_string(s, 0, n, c);
  return s;
}

function copy$1(s) {
  var len = s.length;
  var r = caml_create_string(len);
  caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function sub$2(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = caml_create_string(len);
    caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}

function sub_string(b, ofs, len) {
  return bytes_to_string(sub$2(b, ofs, len));
}

function blit$1(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          invalid_argument,
          "Bytes.blit"
        ];
  } else {
    return caml_blit_bytes(s1, ofs1, s2, ofs2, len);
  }
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  } else {
    return caml_blit_string(s1, ofs1, s2, ofs2, len);
  }
}

function escaped$1(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy$1(s);
  } else {
    var s$prime = caml_create_string(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit$$1 = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit$$1 = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit$$1 = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit$$1 = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit$$1 = 1;
      } else {
        switch (c) {
          case 8 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit$$1 = 1;
              break;
          case 13 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit$$1) {
        case 1 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}


/* No side effect */

function make(n, c) {
  return bytes_to_string(make$1(n, c));
}

function sub$1(s, ofs, len) {
  return bytes_to_string(sub$2(bytes_of_string(s), ofs, len));
}

function concat$1(sep, l) {
  if (l) {
    var hd$$1 = l[0];
    var num = [0];
    var len = [0];
    iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = caml_create_string(len[0] + imul(sep.length, num[0] - 1 | 0) | 0);
    caml_blit_string(hd$$1, 0, r, 0, hd$$1.length);
    var pos = [hd$$1.length];
    iter((function (s) {
            caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return bytes_to_string(r);
  } else {
    return "";
  }
}

function escaped(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return /* false */0;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return /* true */1;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else if (switcher > 57 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        } else {
          return /* true */1;
        }
      }
    }
  };
  if (needs_escape(0)) {
    return bytes_to_string(escaped$1(bytes_of_string(s)));
  } else {
    return s;
  }
}

var blit = blit_string;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function of_stream(stream) {
  var next$$1 = function (stream) {
    try {
      return /* Cons */[
              next(stream),
              __(246, [(function () {
                      return next$$1(stream);
                    })])
            ];
    }
    catch (exn){
      if (exn === Failure) {
        return /* Nil */0;
      } else {
        throw exn;
      }
    }
  };
  return next$$1(stream);
}

function of_function(f) {
  var next$$1 = function (f) {
    var match = _1(f, /* () */0);
    if (match) {
      return /* Cons */[
              match[0],
              __(246, [(function () {
                      return next$$1(f);
                    })])
            ];
    } else {
      return /* Nil */0;
    }
  };
  return next$$1(f);
}

function of_string(str) {
  return of_stream(of_string$1(str));
}

function of_channel(ic) {
  return of_stream(of_channel$1(ic));
}

var LazyStream = /* module */[
  /* of_stream */of_stream,
  /* of_function */of_function,
  /* of_string */of_string,
  /* of_channel */of_channel
];

function implode(l) {
  return concat$1("", map((function (param) {
                    return make(1, param);
                  }), l));
}

function parse(parser, input) {
  var match = _1(parser, input);
  if (match) {
    return /* Some */[match[0][0]];
  } else {
    return /* None */0;
  }
}

function $$return(x, input) {
  return /* Some */[/* tuple */[
            x,
            input
          ]];
}

function $great$great$eq(x, f, input) {
  var match = _1(x, input);
  if (match) {
    var match$1 = match[0];
    return _2(f, match$1[0], match$1[1]);
  } else {
    return /* None */0;
  }
}

function $less$pipe$great(x, y, input) {
  var ret = _1(x, input);
  if (ret) {
    return ret;
  } else {
    return _1(y, input);
  }
}

function mzero() {
  return /* None */0;
}

function any(param) {
  if (param) {
    var input$prime = param[1];
    var tag = input$prime.tag | 0;
    return /* Some */[/* tuple */[
              param[0],
              tag === 250 ? input$prime[0] : (
                  tag === 246 ? force_lazy_block(input$prime) : input$prime
                )
            ]];
  } else {
    return /* None */0;
  }
}

function satisfy(test) {
  return (function (param) {
      return $great$great$eq(any, (function (res) {
                    if (_1(test, res)) {
                      return (function (param) {
                          return /* Some */[/* tuple */[
                                    res,
                                    param
                                  ]];
                        });
                    } else {
                      return mzero;
                    }
                  }), param);
    });
}

function $eq$great(x, f) {
  return (function (param) {
      return $great$great$eq(x, (function (r) {
                    var partial_arg = _1(f, r);
                    return (function (param) {
                        return /* Some */[/* tuple */[
                                  partial_arg,
                                  param
                                ]];
                      });
                  }), param);
    });
}

function $great$great(x, y) {
  return (function (param) {
      return $great$great$eq(x, (function () {
                    return y;
                  }), param);
    });
}

function $less$less(x, y) {
  return (function (param) {
      return $great$great$eq(x, (function (r) {
                    return (function (param) {
                        return $great$great$eq(y, (function () {
                                      return (function (param) {
                                          return /* Some */[/* tuple */[
                                                    r,
                                                    param
                                                  ]];
                                        });
                                    }), param);
                      });
                  }), param);
    });
}

function $less$tilde$great(x, xs) {
  return (function (param) {
      return $great$great$eq(x, (function (r) {
                    return (function (param) {
                        return $great$great$eq(xs, (function (rs) {
                                      var partial_arg = /* :: */[
                                        r,
                                        rs
                                      ];
                                      return (function (param) {
                                          return /* Some */[/* tuple */[
                                                    partial_arg,
                                                    param
                                                  ]];
                                        });
                                    }), param);
                      });
                  }), param);
    });
}

function choice(param) {
  if (param) {
    var h = param[0];
    var partial_arg = choice(param[1]);
    return (function (param) {
        return $less$pipe$great(h, partial_arg, param);
      });
  } else {
    return mzero;
  }
}

function option($$default, x) {
  return (function (param) {
      return $less$pipe$great(x, (function (param) {
                    return /* Some */[/* tuple */[
                              $$default,
                              param
                            ]];
                  }), param);
    });
}

function optional(x) {
  var y = function (param) {
    return /* Some */[/* tuple */[
              /* () */0,
              param
            ]];
  };
  var x$1 = function (param) {
    return $great$great$eq(x, (function () {
                  return y;
                }), param);
  };
  return (function (param) {
      return $less$pipe$great(x$1, (function (param) {
                    return /* Some */[/* tuple */[
                              /* () */0,
                              param
                            ]];
                  }), param);
    });
}

function skip_many(x) {
  var x$1 = function (param) {
    return $great$great$eq(x, (function () {
                  return skip_many(x);
                }), param);
  };
  return (function (param) {
      return $less$pipe$great(x$1, (function (param) {
                    return /* Some */[/* tuple */[
                              /* () */0,
                              param
                            ]];
                  }), param);
    });
}

function many$1(x) {
  var x$1 = function (param) {
    return $great$great$eq(x, (function (r) {
                  var partial_arg = many$1(x);
                  return (function (param) {
                      return $great$great$eq(partial_arg, (function (rs) {
                                    var partial_arg = /* :: */[
                                      r,
                                      rs
                                    ];
                                    return (function (param) {
                                        return /* Some */[/* tuple */[
                                                  partial_arg,
                                                  param
                                                ]];
                                      });
                                  }), param);
                    });
                }), param);
  };
  return (function (param) {
      return $less$pipe$great(x$1, (function (param) {
                    return /* Some */[/* tuple */[
                              /* [] */0,
                              param
                            ]];
                  }), param);
    });
}

function many1(x) {
  return $less$tilde$great(x, many$1(x));
}

function sep_by1(x, sep) {
  return $less$tilde$great(x, many$1((function (param) {
                    return $great$great$eq(sep, (function () {
                                  return x;
                                }), param);
                  })));
}

function sep_by(x, sep) {
  var partial_arg = sep_by1(x, sep);
  return (function (param) {
      return $less$pipe$great(partial_arg, (function (param) {
                    return /* Some */[/* tuple */[
                              /* [] */0,
                              param
                            ]];
                  }), param);
    });
}

function exactly(x) {
  return satisfy((function (param) {
                return caml_equal(x, param);
              }));
}

function one_of(l) {
  return satisfy((function (x) {
                return mem(x, l);
              }));
}

function none_of(l) {
  return satisfy((function (x) {
                return 1 - mem(x, l);
              }));
}

function range(l, r) {
  return satisfy((function (x) {
                if (caml_lessequal(l, x)) {
                  return caml_lessequal(x, r);
                } else {
                  return /* false */0;
                }
              }));
}

var space = satisfy((function (x) {
        return mem(x, /* :: */[
                    /* " " */32,
                    /* :: */[
                      /* "\t" */9,
                      /* :: */[
                        /* "\r" */13,
                        /* :: */[
                          /* "\n" */10,
                          /* [] */0
                        ]
                      ]
                    ]
                  ]);
      }));

var spaces = skip_many(space);

var newline = exactly(/* "\n" */10);

var digit = range(/* "0" */48, /* "9" */57);

function lexeme(x) {
  return (function (param) {
      return $great$great$eq(spaces, (function () {
                    return x;
                  }), param);
    });
}

function token(s) {
  var loop = function (s, i) {
    if (i >= s.length) {
      return (function (param) {
          return /* Some */[/* tuple */[
                    s,
                    param
                  ]];
        });
    } else {
      var y = loop(s, i + 1 | 0);
      var x = exactly(get(s, i));
      return (function (param) {
          return $great$great$eq(x, (function () {
                        return y;
                      }), param);
        });
    }
  };
  var y = loop(s, 0);
  return (function (param) {
      return $great$great$eq(spaces, (function () {
                    return y;
                  }), param);
    });
}


/* space Not a pure module */

var match = caml_sys_get_argv(/* () */0);

var Break = create("Sys.Break");

var argv = match[1];

var executable_name = match[0];


/* No side effect */

var $$Error$1 = create("Js_exn.Error");

function internalToOCamlException(e) {
  if (isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error$1,
            e
          ];
  }
}


/* No side effect */

function make_matrix(sx, sy, init) {
  var res = caml_make_vect(sx, /* array */[]);
  for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
    res[x] = caml_make_vect(sy, init);
  }
  return res;
}

function copy$2(a) {
  var l = a.length;
  if (l) {
    return caml_array_sub(a, 0, l);
  } else {
    return /* array */[];
  }
}

function blit$2(a1, ofs1, a2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
    throw [
          invalid_argument,
          "Array.blit"
        ];
  } else {
    return caml_array_blit(a1, ofs1, a2, ofs2, len);
  }
}

function map$3(f, a) {
  var l = a.length;
  if (l) {
    var r = caml_make_vect(l, _1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _1(f, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function iteri$3(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    _2(f, i, a[i]);
  }
  return /* () */0;
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  }
}

function fold_right$2(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = _2(f, a[i], r);
  }
  return r;
}

var Bottom = create("Array.Bottom");


/* No side effect */

function create$1(n) {
  var n$1 = n < 1 ? 1 : n;
  var s = caml_create_string(n$1);
  return /* record */[
          /* buffer */s,
          /* position */0,
          /* length */n$1,
          /* initial_buffer */s
        ];
}

function contents(b) {
  return sub_string(b[/* buffer */0], 0, b[/* position */1]);
}

function resize(b, more) {
  var len = b[/* length */2];
  var new_len = len;
  while((b[/* position */1] + more | 0) > new_len) {
    new_len = (new_len << 1);
  }
  var new_buffer = caml_create_string(new_len);
  blit$1(b[/* buffer */0], 0, new_buffer, 0, b[/* position */1]);
  b[/* buffer */0] = new_buffer;
  b[/* length */2] = new_len;
  return /* () */0;
}

function add_char(b, c) {
  var pos = b[/* position */1];
  if (pos >= b[/* length */2]) {
    resize(b, 1);
  }
  b[/* buffer */0][pos] = c;
  b[/* position */1] = pos + 1 | 0;
  return /* () */0;
}

function add_string(b, s) {
  var len = s.length;
  var new_position = b[/* position */1] + len | 0;
  if (new_position > b[/* length */2]) {
    resize(b, len);
  }
  blit_string(s, 0, b[/* buffer */0], b[/* position */1], len);
  b[/* position */1] = new_position;
  return /* () */0;
}


/* No side effect */

function caml_classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.2250738585072014e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}


/* No side effect */

function buffer_check_size(buf, overhead) {
  var len = buf[/* bytes */1].length;
  var min_len = buf[/* ind */0] + overhead | 0;
  if (min_len > len) {
    var new_len = max((len << 1), min_len);
    var new_str = caml_create_string(new_len);
    blit$1(buf[/* bytes */1], 0, new_str, 0, len);
    buf[/* bytes */1] = new_str;
    return /* () */0;
  } else {
    return 0;
  }
}

function buffer_add_char(buf, c) {
  buffer_check_size(buf, 1);
  buf[/* bytes */1][buf[/* ind */0]] = c;
  buf[/* ind */0] = buf[/* ind */0] + 1 | 0;
  return /* () */0;
}

function buffer_add_string(buf, s) {
  var str_len = s.length;
  buffer_check_size(buf, str_len);
  blit(s, 0, buf[/* bytes */1], buf[/* ind */0], str_len);
  buf[/* ind */0] = buf[/* ind */0] + str_len | 0;
  return /* () */0;
}

function buffer_contents(buf) {
  return sub_string(buf[/* bytes */1], 0, buf[/* ind */0]);
}

function char_of_fconv(fconv) {
  switch (fconv) {
    case 0 : 
    case 1 : 
    case 2 : 
        return /* "f" */102;
    case 3 : 
    case 4 : 
    case 5 : 
        return /* "e" */101;
    case 6 : 
    case 7 : 
    case 8 : 
        return /* "E" */69;
    case 9 : 
    case 10 : 
    case 11 : 
        return /* "g" */103;
    case 12 : 
    case 13 : 
    case 14 : 
        return /* "G" */71;
    case 15 : 
        return /* "F" */70;
    
  }
}

function bprint_fconv_flag(buf, fconv) {
  switch (fconv) {
    case 1 : 
    case 4 : 
    case 7 : 
    case 10 : 
    case 13 : 
        return buffer_add_char(buf, /* "+" */43);
    case 2 : 
    case 5 : 
    case 8 : 
    case 11 : 
    case 14 : 
        return buffer_add_char(buf, /* " " */32);
    case 0 : 
    case 3 : 
    case 6 : 
    case 9 : 
    case 12 : 
    case 15 : 
        return /* () */0;
    
  }
}

function string_of_formatting_lit(formatting_lit) {
  if (typeof formatting_lit === "number") {
    switch (formatting_lit) {
      case 0 : 
          return "@]";
      case 1 : 
          return "@}";
      case 2 : 
          return "@?";
      case 3 : 
          return "@\n";
      case 4 : 
          return "@.";
      case 5 : 
          return "@@";
      case 6 : 
          return "@%";
      
    }
  } else {
    switch (formatting_lit.tag | 0) {
      case 0 : 
      case 1 : 
          return formatting_lit[0];
      case 2 : 
          return "@" + bytes_to_string(make$1(1, formatting_lit[0]));
      
    }
  }
}

function bprint_fmtty(buf, _fmtty) {
  while(true) {
    var fmtty = _fmtty;
    if (typeof fmtty === "number") {
      return /* () */0;
    } else {
      switch (fmtty.tag | 0) {
        case 0 : 
            buffer_add_string(buf, "%c");
            _fmtty = fmtty[0];
            continue ;
            case 1 : 
            buffer_add_string(buf, "%s");
            _fmtty = fmtty[0];
            continue ;
            case 2 : 
            buffer_add_string(buf, "%i");
            _fmtty = fmtty[0];
            continue ;
            case 3 : 
            buffer_add_string(buf, "%li");
            _fmtty = fmtty[0];
            continue ;
            case 4 : 
            buffer_add_string(buf, "%ni");
            _fmtty = fmtty[0];
            continue ;
            case 5 : 
            buffer_add_string(buf, "%Li");
            _fmtty = fmtty[0];
            continue ;
            case 6 : 
            buffer_add_string(buf, "%f");
            _fmtty = fmtty[0];
            continue ;
            case 7 : 
            buffer_add_string(buf, "%B");
            _fmtty = fmtty[0];
            continue ;
            case 8 : 
            buffer_add_string(buf, "%{");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%}");
            _fmtty = fmtty[1];
            continue ;
            case 9 : 
            buffer_add_string(buf, "%(");
            bprint_fmtty(buf, fmtty[0]);
            buffer_add_string(buf, "%)");
            _fmtty = fmtty[2];
            continue ;
            case 10 : 
            buffer_add_string(buf, "%a");
            _fmtty = fmtty[0];
            continue ;
            case 11 : 
            buffer_add_string(buf, "%t");
            _fmtty = fmtty[0];
            continue ;
            case 12 : 
            buffer_add_string(buf, "%?");
            _fmtty = fmtty[0];
            continue ;
            case 13 : 
            buffer_add_string(buf, "%r");
            _fmtty = fmtty[0];
            continue ;
            case 14 : 
            buffer_add_string(buf, "%_r");
            _fmtty = fmtty[0];
            continue ;
            
      }
    }
  }
}

function symm(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */__(0, [symm(param[0])]);
      case 1 : 
          return /* String_ty */__(1, [symm(param[0])]);
      case 2 : 
          return /* Int_ty */__(2, [symm(param[0])]);
      case 3 : 
          return /* Int32_ty */__(3, [symm(param[0])]);
      case 4 : 
          return /* Nativeint_ty */__(4, [symm(param[0])]);
      case 5 : 
          return /* Int64_ty */__(5, [symm(param[0])]);
      case 6 : 
          return /* Float_ty */__(6, [symm(param[0])]);
      case 7 : 
          return /* Bool_ty */__(7, [symm(param[0])]);
      case 8 : 
          return /* Format_arg_ty */__(8, [
                    param[0],
                    symm(param[1])
                  ]);
      case 9 : 
          return /* Format_subst_ty */__(9, [
                    param[1],
                    param[0],
                    symm(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */__(10, [symm(param[0])]);
      case 11 : 
          return /* Theta_ty */__(11, [symm(param[0])]);
      case 12 : 
          return /* Any_ty */__(12, [symm(param[0])]);
      case 13 : 
          return /* Reader_ty */__(13, [symm(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */__(14, [symm(param[0])]);
      
    }
  }
}

function fmtty_rel_det(param) {
  if (typeof param === "number") {
    return /* tuple */[
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              }),
            (function () {
                return /* Refl */0;
              })
          ];
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var match = fmtty_rel_det(param[0]);
          var af = match[1];
          var fa = match[0];
          return /* tuple */[
                  (function () {
                      _1(fa, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match[2],
                  match[3]
                ];
      case 1 : 
          var match$1 = fmtty_rel_det(param[0]);
          var af$1 = match$1[1];
          var fa$1 = match$1[0];
          return /* tuple */[
                  (function () {
                      _1(fa$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$1[2],
                  match$1[3]
                ];
      case 2 : 
          var match$2 = fmtty_rel_det(param[0]);
          var af$2 = match$2[1];
          var fa$2 = match$2[0];
          return /* tuple */[
                  (function () {
                      _1(fa$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$2[2],
                  match$2[3]
                ];
      case 3 : 
          var match$3 = fmtty_rel_det(param[0]);
          var af$3 = match$3[1];
          var fa$3 = match$3[0];
          return /* tuple */[
                  (function () {
                      _1(fa$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$3, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$3[2],
                  match$3[3]
                ];
      case 4 : 
          var match$4 = fmtty_rel_det(param[0]);
          var af$4 = match$4[1];
          var fa$4 = match$4[0];
          return /* tuple */[
                  (function () {
                      _1(fa$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$4, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$4[2],
                  match$4[3]
                ];
      case 5 : 
          var match$5 = fmtty_rel_det(param[0]);
          var af$5 = match$5[1];
          var fa$5 = match$5[0];
          return /* tuple */[
                  (function () {
                      _1(fa$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$5, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$5[2],
                  match$5[3]
                ];
      case 6 : 
          var match$6 = fmtty_rel_det(param[0]);
          var af$6 = match$6[1];
          var fa$6 = match$6[0];
          return /* tuple */[
                  (function () {
                      _1(fa$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$6, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$6[2],
                  match$6[3]
                ];
      case 7 : 
          var match$7 = fmtty_rel_det(param[0]);
          var af$7 = match$7[1];
          var fa$7 = match$7[0];
          return /* tuple */[
                  (function () {
                      _1(fa$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$7, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$7[2],
                  match$7[3]
                ];
      case 8 : 
          var match$8 = fmtty_rel_det(param[1]);
          var af$8 = match$8[1];
          var fa$8 = match$8[0];
          return /* tuple */[
                  (function () {
                      _1(fa$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$8, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$8[2],
                  match$8[3]
                ];
      case 9 : 
          var match$9 = fmtty_rel_det(param[2]);
          var de = match$9[3];
          var ed = match$9[2];
          var af$9 = match$9[1];
          var fa$9 = match$9[0];
          var ty = trans(symm(param[0]), param[1]);
          var match$10 = fmtty_rel_det(ty);
          var jd = match$10[3];
          var dj = match$10[2];
          var ga = match$10[1];
          var ag = match$10[0];
          return /* tuple */[
                  (function () {
                      _1(fa$9, /* Refl */0);
                      _1(ag, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ga, /* Refl */0);
                      _1(af$9, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ed, /* Refl */0);
                      _1(dj, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(jd, /* Refl */0);
                      _1(de, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 10 : 
          var match$11 = fmtty_rel_det(param[0]);
          var af$10 = match$11[1];
          var fa$10 = match$11[0];
          return /* tuple */[
                  (function () {
                      _1(fa$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$10, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$11[2],
                  match$11[3]
                ];
      case 11 : 
          var match$12 = fmtty_rel_det(param[0]);
          var af$11 = match$12[1];
          var fa$11 = match$12[0];
          return /* tuple */[
                  (function () {
                      _1(fa$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$11, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$12[2],
                  match$12[3]
                ];
      case 12 : 
          var match$13 = fmtty_rel_det(param[0]);
          var af$12 = match$13[1];
          var fa$12 = match$13[0];
          return /* tuple */[
                  (function () {
                      _1(fa$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$12, /* Refl */0);
                      return /* Refl */0;
                    }),
                  match$13[2],
                  match$13[3]
                ];
      case 13 : 
          var match$14 = fmtty_rel_det(param[0]);
          var de$1 = match$14[3];
          var ed$1 = match$14[2];
          var af$13 = match$14[1];
          var fa$13 = match$14[0];
          return /* tuple */[
                  (function () {
                      _1(fa$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$13, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ed$1, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(de$1, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      case 14 : 
          var match$15 = fmtty_rel_det(param[0]);
          var de$2 = match$15[3];
          var ed$2 = match$15[2];
          var af$14 = match$15[1];
          var fa$14 = match$15[0];
          return /* tuple */[
                  (function () {
                      _1(fa$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(af$14, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(ed$2, /* Refl */0);
                      return /* Refl */0;
                    }),
                  (function () {
                      _1(de$2, /* Refl */0);
                      return /* Refl */0;
                    })
                ];
      
    }
  }
}

function trans(ty1, ty2) {
  var exit$$1 = 0;
  if (typeof ty1 === "number") {
    if (typeof ty2 === "number") {
      return /* End_of_fmtty */0;
    } else {
      switch (ty2.tag | 0) {
        case 8 : 
            exit$$1 = 6;
            break;
        case 9 : 
            exit$$1 = 7;
            break;
        case 10 : 
            exit$$1 = 1;
            break;
        case 11 : 
            exit$$1 = 2;
            break;
        case 12 : 
            exit$$1 = 3;
            break;
        case 13 : 
            exit$$1 = 4;
            break;
        case 14 : 
            exit$$1 = 5;
            break;
        default:
          throw [
                assert_failure,
                [
                  "camlinternalFormat.ml",
                  816,
                  23
                ]
              ];
      }
    }
  } else {
    switch (ty1.tag | 0) {
      case 0 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 0 : 
                  return /* Char_ty */__(0, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 1 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 1 : 
                  return /* String_ty */__(1, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 2 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 2 : 
                  return /* Int_ty */__(2, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 3 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 3 : 
                  return /* Int32_ty */__(3, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 4 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 4 : 
                  return /* Nativeint_ty */__(4, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 5 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 5 : 
                  return /* Int64_ty */__(5, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 6 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 6 : 
                  return /* Float_ty */__(6, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 7 : 
          if (typeof ty2 === "number") {
            exit$$1 = 8;
          } else {
            switch (ty2.tag | 0) {
              case 7 : 
                  return /* Bool_ty */__(7, [trans(ty1[0], ty2[0])]);
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  exit$$1 = 7;
                  break;
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              
            }
          }
          break;
      case 8 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    802,
                    26
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  return /* Format_arg_ty */__(8, [
                            trans(ty1[0], ty2[0]),
                            trans(ty1[1], ty2[1])
                          ]);
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        802,
                        26
                      ]
                    ];
            }
          }
          break;
      case 9 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    812,
                    28
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 8 : 
                  exit$$1 = 6;
                  break;
              case 9 : 
                  var ty = trans(symm(ty1[1]), ty2[0]);
                  var match = fmtty_rel_det(ty);
                  _1(match[1], /* Refl */0);
                  _1(match[3], /* Refl */0);
                  return /* Format_subst_ty */__(9, [
                            ty1[0],
                            ty2[1],
                            trans(ty1[2], ty2[2])
                          ]);
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  exit$$1 = 5;
                  break;
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        812,
                        28
                      ]
                    ];
            }
          }
          break;
      case 10 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          } else if (ty2.tag === 10) {
            return /* Alpha_ty */__(10, [trans(ty1[0], ty2[0])]);
          } else {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    780,
                    21
                  ]
                ];
          }
          break;
      case 11 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    784,
                    21
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  return /* Theta_ty */__(11, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        784,
                        21
                      ]
                    ];
            }
          }
          break;
      case 12 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    788,
                    19
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  return /* Any_ty */__(12, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        788,
                        19
                      ]
                    ];
            }
          }
          break;
      case 13 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    792,
                    22
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  return /* Reader_ty */__(13, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        792,
                        22
                      ]
                    ];
            }
          }
          break;
      case 14 : 
          if (typeof ty2 === "number") {
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    797,
                    30
                  ]
                ];
          } else {
            switch (ty2.tag | 0) {
              case 10 : 
                  exit$$1 = 1;
                  break;
              case 11 : 
                  exit$$1 = 2;
                  break;
              case 12 : 
                  exit$$1 = 3;
                  break;
              case 13 : 
                  exit$$1 = 4;
                  break;
              case 14 : 
                  return /* Ignored_reader_ty */__(14, [trans(ty1[0], ty2[0])]);
              default:
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        797,
                        30
                      ]
                    ];
            }
          }
          break;
      
    }
  }
  switch (exit$$1) {
    case 1 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                781,
                21
              ]
            ];
    case 2 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                785,
                21
              ]
            ];
    case 3 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                789,
                19
              ]
            ];
    case 4 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                793,
                22
              ]
            ];
    case 5 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                798,
                30
              ]
            ];
    case 6 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                803,
                26
              ]
            ];
    case 7 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                813,
                28
              ]
            ];
    case 8 : 
        throw [
              assert_failure,
              [
                "camlinternalFormat.ml",
                817,
                23
              ]
            ];
    
  }
}

var Type_mismatch = create("CamlinternalFormat.Type_mismatch");

function type_padding(pad, fmtty) {
  if (typeof pad === "number") {
    return /* Padding_fmtty_EBB */[
            /* No_padding */0,
            fmtty
          ];
  } else if (pad.tag) {
    if (typeof fmtty === "number") {
      throw Type_mismatch;
    } else if (fmtty.tag === 2) {
      return /* Padding_fmtty_EBB */[
              /* Arg_padding */__(1, [pad[0]]),
              fmtty[0]
            ];
    } else {
      throw Type_mismatch;
    }
  } else {
    return /* Padding_fmtty_EBB */[
            /* Lit_padding */__(0, [
                pad[0],
                pad[1]
              ]),
            fmtty
          ];
  }
}

function type_padprec(pad, prec, fmtty) {
  var match = type_padding(pad, fmtty);
  if (typeof prec === "number") {
    if (prec !== 0) {
      var match$1 = match[1];
      if (typeof match$1 === "number") {
        throw Type_mismatch;
      } else if (match$1.tag === 2) {
        return /* Padprec_fmtty_EBB */[
                match[0],
                /* Arg_precision */1,
                match$1[0]
              ];
      } else {
        throw Type_mismatch;
      }
    } else {
      return /* Padprec_fmtty_EBB */[
              match[0],
              /* No_precision */0,
              match[1]
            ];
    }
  } else {
    return /* Padprec_fmtty_EBB */[
            match[0],
            /* Lit_precision */[prec[0]],
            match[1]
          ];
  }
}

function type_ignored_param_one(ign, fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  return /* Fmt_fmtty_EBB */[
          /* Ignored_param */__(23, [
              ign,
              match[0]
            ]),
          match[1]
        ];
}

function type_format_gen(fmt, fmtty) {
  if (typeof fmt === "number") {
    return /* Fmt_fmtty_EBB */[
            /* End_of_format */0,
            fmtty
          ];
  } else {
    switch (fmt.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Char */__(0, [match[0]]),
                    match[1]
                  ];
          }
          break;
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match$1 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_char */__(1, [match$1[0]]),
                    match$1[1]
                  ];
          }
          break;
      case 2 : 
          var match$2 = type_padding(fmt[0], fmtty);
          var match$3 = match$2[1];
          if (typeof match$3 === "number") {
            throw Type_mismatch;
          } else if (match$3.tag === 1) {
            var match$4 = type_format_gen(fmt[1], match$3[0]);
            return /* Fmt_fmtty_EBB */[
                    /* String */__(2, [
                        match$2[0],
                        match$4[0]
                      ]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 3 : 
          var match$5 = type_padding(fmt[0], fmtty);
          var match$6 = match$5[1];
          if (typeof match$6 === "number") {
            throw Type_mismatch;
          } else if (match$6.tag === 1) {
            var match$7 = type_format_gen(fmt[1], match$6[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Caml_string */__(3, [
                        match$5[0],
                        match$7[0]
                      ]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 4 : 
          var match$8 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$9 = match$8[2];
          if (typeof match$9 === "number") {
            throw Type_mismatch;
          } else if (match$9.tag === 2) {
            var match$10 = type_format_gen(fmt[3], match$9[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int */__(4, [
                        fmt[0],
                        match$8[0],
                        match$8[1],
                        match$10[0]
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 5 : 
          var match$11 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$12 = match$11[2];
          if (typeof match$12 === "number") {
            throw Type_mismatch;
          } else if (match$12.tag === 3) {
            var match$13 = type_format_gen(fmt[3], match$12[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int32 */__(5, [
                        fmt[0],
                        match$11[0],
                        match$11[1],
                        match$13[0]
                      ]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 6 : 
          var match$14 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$15 = match$14[2];
          if (typeof match$15 === "number") {
            throw Type_mismatch;
          } else if (match$15.tag === 4) {
            var match$16 = type_format_gen(fmt[3], match$15[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Nativeint */__(6, [
                        fmt[0],
                        match$14[0],
                        match$14[1],
                        match$16[0]
                      ]),
                    match$16[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 7 : 
          var match$17 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$18 = match$17[2];
          if (typeof match$18 === "number") {
            throw Type_mismatch;
          } else if (match$18.tag === 5) {
            var match$19 = type_format_gen(fmt[3], match$18[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Int64 */__(7, [
                        fmt[0],
                        match$17[0],
                        match$17[1],
                        match$19[0]
                      ]),
                    match$19[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 8 : 
          var match$20 = type_padprec(fmt[1], fmt[2], fmtty);
          var match$21 = match$20[2];
          if (typeof match$21 === "number") {
            throw Type_mismatch;
          } else if (match$21.tag === 6) {
            var match$22 = type_format_gen(fmt[3], match$21[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Float */__(8, [
                        fmt[0],
                        match$20[0],
                        match$20[1],
                        match$22[0]
                      ]),
                    match$22[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$23 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Bool */__(9, [match$23[0]]),
                    match$23[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 10 : 
          var match$24 = type_format_gen(fmt[0], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Flush */__(10, [match$24[0]]),
                  match$24[1]
                ];
      case 11 : 
          var match$25 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* String_literal */__(11, [
                      fmt[0],
                      match$25[0]
                    ]),
                  match$25[1]
                ];
      case 12 : 
          var match$26 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Char_literal */__(12, [
                      fmt[0],
                      match$26[0]
                    ]),
                  match$26[1]
                ];
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[fmt[1]], /* Fmtty_EBB */[sub_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$27 = type_format_gen(fmt[2], fmtty[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Format_arg */__(13, [
                        fmt[0],
                        sub_fmtty$prime,
                        match$27[0]
                      ]),
                    match$27[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub_fmtty1 = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(fmt[1])], /* Fmtty_EBB */[erase_rel(sub_fmtty1)])) {
              throw Type_mismatch;
            }
            var match$28 = type_format_gen(fmt[2], erase_rel(fmtty[2]));
            return /* Fmt_fmtty_EBB */[
                    /* Format_subst */__(14, [
                        fmt[0],
                        sub_fmtty1,
                        match$28[0]
                      ]),
                    match$28[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 15 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$29 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Alpha */__(15, [match$29[0]]),
                    match$29[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 16 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$30 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Theta */__(16, [match$30[0]]),
                    match$30[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 17 : 
          var match$31 = type_format_gen(fmt[1], fmtty);
          return /* Fmt_fmtty_EBB */[
                  /* Formatting_lit */__(17, [
                      fmt[0],
                      match$31[0]
                    ]),
                  match$31[1]
                ];
      case 18 : 
          var formatting_gen = fmt[0];
          var fmt0 = fmt[1];
          var fmtty0 = fmtty;
          if (formatting_gen.tag) {
            var match$32 = formatting_gen[0];
            var match$33 = type_format_gen(match$32[0], fmtty0);
            var match$34 = type_format_gen(fmt0, match$33[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */__(18, [
                        /* Open_box */__(1, [/* Format */[
                              match$33[0],
                              match$32[1]
                            ]]),
                        match$34[0]
                      ]),
                    match$34[1]
                  ];
          } else {
            var match$35 = formatting_gen[0];
            var match$36 = type_format_gen(match$35[0], fmtty0);
            var match$37 = type_format_gen(fmt0, match$36[1]);
            return /* Fmt_fmtty_EBB */[
                    /* Formatting_gen */__(18, [
                        /* Open_tag */__(0, [/* Format */[
                              match$36[0],
                              match$35[1]
                            ]]),
                        match$37[0]
                      ]),
                    match$37[1]
                  ];
          }
      case 19 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$38 = type_format_gen(fmt[0], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Reader */__(19, [match$38[0]]),
                    match$38[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 20 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$39 = type_format_gen(fmt[2], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_char_set */__(20, [
                        fmt[0],
                        fmt[1],
                        match$39[0]
                      ]),
                    match$39[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 21 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$40 = type_format_gen(fmt[1], fmtty[0]);
            return /* Fmt_fmtty_EBB */[
                    /* Scan_get_counter */__(21, [
                        fmt[0],
                        match$40[0]
                      ]),
                    match$40[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 23 : 
          var ign = fmt[0];
          var fmt$1 = fmt[1];
          var fmtty$1 = fmtty;
          if (typeof ign === "number") {
            if (ign === 3) {
              if (typeof fmtty$1 === "number") {
                throw Type_mismatch;
              } else if (fmtty$1.tag === 14) {
                var match$41 = type_format_gen(fmt$1, fmtty$1[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Ignored_param */__(23, [
                            /* Ignored_reader */3,
                            match$41[0]
                          ]),
                        match$41[1]
                      ];
              } else {
                throw Type_mismatch;
              }
            } else {
              return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          } else {
            switch (ign.tag | 0) {
              case 7 : 
                  return type_ignored_param_one(/* Ignored_format_arg */__(7, [
                                ign[0],
                                ign[1]
                              ]), fmt$1, fmtty$1);
              case 8 : 
                  var match$42 = type_ignored_format_substitution(ign[1], fmt$1, fmtty$1);
                  var match$43 = match$42[1];
                  return /* Fmt_fmtty_EBB */[
                          /* Ignored_param */__(23, [
                              /* Ignored_format_subst */__(8, [
                                  ign[0],
                                  match$42[0]
                                ]),
                              match$43[0]
                            ]),
                          match$43[1]
                        ];
              default:
                return type_ignored_param_one(ign, fmt$1, fmtty$1);
            }
          }
      case 22 : 
      case 24 : 
          throw Type_mismatch;
      
    }
  }
}

function type_ignored_format_substitution(sub_fmtty, fmt, fmtty) {
  if (typeof sub_fmtty === "number") {
    return /* Fmtty_fmt_EBB */[
            /* End_of_fmtty */0,
            type_format_gen(fmt, fmtty)
          ];
  } else {
    switch (sub_fmtty.tag | 0) {
      case 0 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag) {
            throw Type_mismatch;
          } else {
            var match = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Char_ty */__(0, [match[0]]),
                    match[1]
                  ];
          }
          break;
      case 1 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 1) {
            var match$1 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* String_ty */__(1, [match$1[0]]),
                    match$1[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 2 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 2) {
            var match$2 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int_ty */__(2, [match$2[0]]),
                    match$2[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 3 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 3) {
            var match$3 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int32_ty */__(3, [match$3[0]]),
                    match$3[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 4 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 4) {
            var match$4 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Nativeint_ty */__(4, [match$4[0]]),
                    match$4[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 5 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 5) {
            var match$5 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Int64_ty */__(5, [match$5[0]]),
                    match$5[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 6 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 6) {
            var match$6 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Float_ty */__(6, [match$6[0]]),
                    match$6[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 7 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 7) {
            var match$7 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Bool_ty */__(7, [match$7[0]]),
                    match$7[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 8 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 8) {
            var sub2_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[sub_fmtty[0]], /* Fmtty_EBB */[sub2_fmtty$prime])) {
              throw Type_mismatch;
            }
            var match$8 = type_ignored_format_substitution(sub_fmtty[1], fmt, fmtty[1]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_arg_ty */__(8, [
                        sub2_fmtty$prime,
                        match$8[0]
                      ]),
                    match$8[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 9 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 9) {
            var sub2_fmtty$prime$1 = fmtty[1];
            var sub1_fmtty$prime = fmtty[0];
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(sub_fmtty[0])], /* Fmtty_EBB */[erase_rel(sub1_fmtty$prime)])) {
              throw Type_mismatch;
            }
            if (caml_notequal(/* Fmtty_EBB */[erase_rel(sub_fmtty[1])], /* Fmtty_EBB */[erase_rel(sub2_fmtty$prime$1)])) {
              throw Type_mismatch;
            }
            var sub_fmtty$prime = trans(symm(sub1_fmtty$prime), sub2_fmtty$prime$1);
            var match$9 = fmtty_rel_det(sub_fmtty$prime);
            _1(match$9[1], /* Refl */0);
            _1(match$9[3], /* Refl */0);
            var match$10 = type_ignored_format_substitution(erase_rel(sub_fmtty[2]), fmt, fmtty[2]);
            return /* Fmtty_fmt_EBB */[
                    /* Format_subst_ty */__(9, [
                        sub1_fmtty$prime,
                        sub2_fmtty$prime$1,
                        symm(match$10[0])
                      ]),
                    match$10[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 10 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 10) {
            var match$11 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Alpha_ty */__(10, [match$11[0]]),
                    match$11[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 11 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 11) {
            var match$12 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Theta_ty */__(11, [match$12[0]]),
                    match$12[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 12 : 
          throw Type_mismatch;
      case 13 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 13) {
            var match$13 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Reader_ty */__(13, [match$13[0]]),
                    match$13[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      case 14 : 
          if (typeof fmtty === "number") {
            throw Type_mismatch;
          } else if (fmtty.tag === 14) {
            var match$14 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
            return /* Fmtty_fmt_EBB */[
                    /* Ignored_reader_ty */__(14, [match$14[0]]),
                    match$14[1]
                  ];
          } else {
            throw Type_mismatch;
          }
          break;
      
    }
  }
}

function type_format(fmt, fmtty) {
  var match = type_format_gen(fmt, fmtty);
  if (typeof match[1] === "number") {
    return match[0];
  } else {
    throw Type_mismatch;
  }
}

function recast(fmt, fmtty) {
  return type_format(fmt, erase_rel(symm(fmtty)));
}

function fix_padding(padty, width, str) {
  var len = str.length;
  var match_000 = abs(width);
  var match_001 = width < 0 ? /* Left */0 : padty;
  var width$1 = match_000;
  if (width$1 <= len) {
    return str;
  } else {
    var padty$1 = match_001;
    var res = make$1(width$1, padty$1 === /* Zeros */2 ? /* "0" */48 : /* " " */32);
    switch (padty$1) {
      case 0 : 
          blit(str, 0, res, 0, len);
          break;
      case 1 : 
          blit(str, 0, res, width$1 - len | 0, len);
          break;
      case 2 : 
          if (len > 0 && (get(str, 0) === /* "+" */43 || get(str, 0) === /* "-" */45 || get(str, 0) === /* " " */32)) {
            res[0] = get(str, 0);
            blit(str, 1, res, (width$1 - len | 0) + 1 | 0, len - 1 | 0);
          } else if (len > 1 && get(str, 0) === /* "0" */48 && (get(str, 1) === /* "x" */120 || get(str, 1) === /* "X" */88)) {
            res[1] = get(str, 1);
            blit(str, 2, res, (width$1 - len | 0) + 2 | 0, len - 2 | 0);
          } else {
            blit(str, 0, res, width$1 - len | 0, len);
          }
          break;
      
    }
    return bytes_to_string(res);
  }
}

function fix_int_precision(prec, str) {
  var prec$1 = abs(prec);
  var len = str.length;
  var c = get(str, 0);
  var exit$$1 = 0;
  if (c >= 58) {
    if (c >= 71) {
      if (c > 102 || c < 97) {
        return str;
      } else {
        exit$$1 = 2;
      }
    } else if (c >= 65) {
      exit$$1 = 2;
    } else {
      return str;
    }
  } else if (c !== 32) {
    if (c >= 43) {
      switch (c - 43 | 0) {
        case 0 : 
        case 2 : 
            exit$$1 = 1;
            break;
        case 1 : 
        case 3 : 
        case 4 : 
            return str;
        case 5 : 
            if ((prec$1 + 2 | 0) > len && len > 1 && (get(str, 1) === /* "x" */120 || get(str, 1) === /* "X" */88)) {
              var res = make$1(prec$1 + 2 | 0, /* "0" */48);
              res[1] = get(str, 1);
              blit(str, 2, res, (prec$1 - len | 0) + 4 | 0, len - 2 | 0);
              return bytes_to_string(res);
            } else {
              exit$$1 = 2;
            }
            break;
        case 6 : 
        case 7 : 
        case 8 : 
        case 9 : 
        case 10 : 
        case 11 : 
        case 12 : 
        case 13 : 
        case 14 : 
            exit$$1 = 2;
            break;
        
      }
    } else {
      return str;
    }
  } else {
    exit$$1 = 1;
  }
  switch (exit$$1) {
    case 1 : 
        if ((prec$1 + 1 | 0) > len) {
          var res$1 = make$1(prec$1 + 1 | 0, /* "0" */48);
          res$1[0] = c;
          blit(str, 1, res$1, (prec$1 - len | 0) + 2 | 0, len - 1 | 0);
          return bytes_to_string(res$1);
        } else {
          return str;
        }
        break;
    case 2 : 
        if (prec$1 > len) {
          var res$2 = make$1(prec$1, /* "0" */48);
          blit(str, 0, res$2, prec$1 - len | 0, len);
          return bytes_to_string(res$2);
        } else {
          return str;
        }
        break;
    
  }
}

function string_to_caml_string(str) {
  return concat$1(escaped(str), /* :: */[
              "\"",
              /* :: */[
                "\"",
                /* [] */0
              ]
            ]);
}

function format_of_iconv(iconv) {
  switch (iconv) {
    case 0 : 
        return "%d";
    case 1 : 
        return "%+d";
    case 2 : 
        return "% d";
    case 3 : 
        return "%i";
    case 4 : 
        return "%+i";
    case 5 : 
        return "% i";
    case 6 : 
        return "%x";
    case 7 : 
        return "%#x";
    case 8 : 
        return "%X";
    case 9 : 
        return "%#X";
    case 10 : 
        return "%o";
    case 11 : 
        return "%#o";
    case 12 : 
        return "%u";
    
  }
}

function format_of_aconv(iconv, c) {
  var seps;
  switch (iconv) {
    case 0 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 1 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 2 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "d",
            /* [] */0
          ]
        ];
        break;
    case 3 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 4 : 
        seps = /* :: */[
          "%+",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 5 : 
        seps = /* :: */[
          "% ",
          /* :: */[
            "i",
            /* [] */0
          ]
        ];
        break;
    case 6 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 7 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "x",
            /* [] */0
          ]
        ];
        break;
    case 8 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 9 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "X",
            /* [] */0
          ]
        ];
        break;
    case 10 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 11 : 
        seps = /* :: */[
          "%#",
          /* :: */[
            "o",
            /* [] */0
          ]
        ];
        break;
    case 12 : 
        seps = /* :: */[
          "%",
          /* :: */[
            "u",
            /* [] */0
          ]
        ];
        break;
    
  }
  return concat$1(bytes_to_string(make$1(1, c)), seps);
}

function format_of_fconv(fconv, prec) {
  if (fconv === /* Float_F */15) {
    return "%.12g";
  } else {
    var prec$1 = abs(prec);
    var symb = char_of_fconv(fconv);
    var buf = /* record */[
      /* ind */0,
      /* bytes */new Array(16)
    ];
    buffer_add_char(buf, /* "%" */37);
    bprint_fconv_flag(buf, fconv);
    buffer_add_char(buf, /* "." */46);
    buffer_add_string(buf, "" + prec$1);
    buffer_add_char(buf, symb);
    return buffer_contents(buf);
  }
}

function convert_int(iconv, n) {
  return caml_format_int(format_of_iconv(iconv), n);
}

function convert_int32(iconv, n) {
  return caml_int32_format(format_of_aconv(iconv, /* "l" */108), n);
}

function convert_nativeint(iconv, n) {
  return caml_nativeint_format(format_of_aconv(iconv, /* "n" */110), n);
}

function convert_int64(iconv, n) {
  return caml_int64_format(format_of_aconv(iconv, /* "L" */76), n);
}

function convert_float(fconv, prec, x) {
  var prec$1 = abs(prec);
  var str = caml_format_float(format_of_fconv(fconv, prec$1), x);
  if (fconv !== /* Float_F */15) {
    return str;
  } else {
    var len = str.length;
    var is_valid = function (_i) {
      while(true) {
        var i = _i;
        if (i === len) {
          return /* false */0;
        } else {
          var match = get(str, i);
          var switcher = match - 46 | 0;
          if (switcher > 23 || switcher < 0) {
            if (switcher !== 55) {
              _i = i + 1 | 0;
              continue ;
              
            } else {
              return /* true */1;
            }
          } else if (switcher > 22 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        }
      }
    };
    var match = caml_classify_float(x);
    if (match !== 3) {
      if (match >= 4) {
        return "nan";
      } else if (is_valid(0)) {
        return str;
      } else {
        return str + ".";
      }
    } else if (x < 0.0) {
      return "neg_infinity";
    } else {
      return "infinity";
    }
  }
}

function format_caml_char(c) {
  return concat$1(escaped$2(c), /* :: */[
              "'",
              /* :: */[
                "'",
                /* [] */0
              ]
            ]);
}

function string_of_fmtty(fmtty) {
  var buf = /* record */[
    /* ind */0,
    /* bytes */new Array(16)
  ];
  bprint_fmtty(buf, fmtty);
  return buffer_contents(buf);
}

function make_printf(_k, o, _acc, _fmt) {
  while(true) {
    var fmt = _fmt;
    var acc = _acc;
    var k = _k;
    if (typeof fmt === "number") {
      return _2(k, o, acc);
    } else {
      switch (fmt.tag | 0) {
        case 0 : 
            var rest = fmt[0];
            return (function(k,acc,rest){
            return function (c) {
              var new_acc = /* Acc_data_char */__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest);
            }
            }(k,acc,rest));
        case 1 : 
            var rest$1 = fmt[0];
            return (function(k,acc,rest$1){
            return function (c) {
              var new_acc_001 = format_caml_char(c);
              var new_acc = /* Acc_data_string */__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$1);
            }
            }(k,acc,rest$1));
        case 2 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], (function (str) {
                          return str;
                        }));
        case 3 : 
            return make_string_padding(k, o, acc, fmt[1], fmt[0], string_to_caml_string);
        case 4 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int, fmt[0]);
        case 5 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int32, fmt[0]);
        case 6 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_nativeint, fmt[0]);
        case 7 : 
            return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int64, fmt[0]);
        case 8 : 
            var k$1 = k;
            var o$1 = o;
            var acc$1 = acc;
            var fmt$1 = fmt[3];
            var pad = fmt[1];
            var prec = fmt[2];
            var fconv = fmt[0];
            if (typeof pad === "number") {
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (p, x) {
                    var str = convert_float(fconv, p, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv));
                }
              } else {
                var p = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,p){
                return function (x) {
                  var str = convert_float(fconv, p, x);
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,p));
              }
            } else if (pad.tag) {
              var padty = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, p, x) {
                    var str = fix_padding(padty, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                  return function (w, x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                }
              } else {
                var p$1 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1){
                return function (w, x) {
                  var str = fix_padding(padty, w, convert_float(fconv, p$1, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1));
              }
            } else {
              var w = pad[1];
              var padty$1 = pad[0];
              if (typeof prec === "number") {
                if (prec !== 0) {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (p, x) {
                    var str = fix_padding(padty$1, w, convert_float(fconv, p, x));
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                } else {
                  return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                  return function (x) {
                    var str = convert_float(fconv, 6, x);
                    var str$prime = fix_padding(padty$1, w, str);
                    return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                  acc$1,
                                  str$prime
                                ]), fmt$1);
                  }
                  }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                }
              } else {
                var p$2 = prec[0];
                return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2){
                return function (x) {
                  var str = fix_padding(padty$1, w, convert_float(fconv, p$2, x));
                  return make_printf(k$1, o$1, /* Acc_data_string */__(4, [
                                acc$1,
                                str
                              ]), fmt$1);
                }
                }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2));
              }
            }
        case 9 : 
            var rest$2 = fmt[0];
            return (function(k,acc,rest$2){
            return function (b) {
              return make_printf(k, o, /* Acc_data_string */__(4, [
                            acc,
                            b ? "true" : "false"
                          ]), rest$2);
            }
            }(k,acc,rest$2));
        case 10 : 
            _fmt = fmt[0];
            _acc = /* Acc_flush */__(7, [acc]);
            continue ;
            case 11 : 
            _fmt = fmt[1];
            _acc = /* Acc_string_literal */__(2, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 12 : 
            _fmt = fmt[1];
            _acc = /* Acc_char_literal */__(3, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 13 : 
            var rest$3 = fmt[2];
            var ty = string_of_fmtty(fmt[1]);
            return (function(k,acc,rest$3,ty){
            return function () {
              return make_printf(k, o, /* Acc_data_string */__(4, [
                            acc,
                            ty
                          ]), rest$3);
            }
            }(k,acc,rest$3,ty));
        case 14 : 
            var rest$4 = fmt[2];
            var fmtty = fmt[1];
            return (function(k,acc,fmtty,rest$4){
            return function (param) {
              return make_printf(k, o, acc, concat_fmt(recast(param[0], fmtty), rest$4));
            }
            }(k,acc,fmtty,rest$4));
        case 15 : 
            var rest$5 = fmt[0];
            return (function(k,acc,rest$5){
            return function (f, x) {
              return make_printf(k, o, /* Acc_delay */__(6, [
                            acc,
                            (function (o) {
                                return _2(f, o, x);
                              })
                          ]), rest$5);
            }
            }(k,acc,rest$5));
        case 16 : 
            var rest$6 = fmt[0];
            return (function(k,acc,rest$6){
            return function (f) {
              return make_printf(k, o, /* Acc_delay */__(6, [
                            acc,
                            f
                          ]), rest$6);
            }
            }(k,acc,rest$6));
        case 17 : 
            _fmt = fmt[1];
            _acc = /* Acc_formatting_lit */__(0, [
                acc,
                fmt[0]
              ]);
            continue ;
            case 18 : 
            var match = fmt[0];
            if (match.tag) {
              var rest$7 = fmt[1];
              var k$prime = (function(k,acc,rest$7){
              return function k$prime(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */__(1, [
                              acc,
                              /* Acc_open_box */__(1, [kacc])
                            ]), rest$7);
              }
              }(k,acc,rest$7));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime;
              continue ;
              
            } else {
              var rest$8 = fmt[1];
              var k$prime$1 = (function(k,acc,rest$8){
              return function k$prime$1(koc, kacc) {
                return make_printf(k, koc, /* Acc_formatting_gen */__(1, [
                              acc,
                              /* Acc_open_tag */__(0, [kacc])
                            ]), rest$8);
              }
              }(k,acc,rest$8));
              _fmt = match[0][0];
              _acc = /* End_of_acc */0;
              _k = k$prime$1;
              continue ;
              
            }
            break;
        case 19 : 
            throw [
                  assert_failure,
                  [
                    "camlinternalFormat.ml",
                    1449,
                    4
                  ]
                ];
        case 20 : 
            var rest$9 = fmt[2];
            var new_acc = /* Acc_invalid_arg */__(8, [
                acc,
                "Printf: bad conversion %["
              ]);
            return (function(k,rest$9,new_acc){
            return function () {
              return make_printf(k, o, new_acc, rest$9);
            }
            }(k,rest$9,new_acc));
        case 21 : 
            var rest$10 = fmt[1];
            return (function(k,acc,rest$10){
            return function (n) {
              var new_acc_001 = caml_format_int("%u", n);
              var new_acc = /* Acc_data_string */__(4, [
                  acc,
                  new_acc_001
                ]);
              return make_printf(k, o, new_acc, rest$10);
            }
            }(k,acc,rest$10));
        case 22 : 
            var rest$11 = fmt[0];
            return (function(k,acc,rest$11){
            return function (c) {
              var new_acc = /* Acc_data_char */__(5, [
                  acc,
                  c
                ]);
              return make_printf(k, o, new_acc, rest$11);
            }
            }(k,acc,rest$11));
        case 23 : 
            var k$2 = k;
            var o$2 = o;
            var acc$2 = acc;
            var ign = fmt[0];
            var fmt$2 = fmt[1];
            if (typeof ign === "number") {
              if (ign === 3) {
                throw [
                      assert_failure,
                      [
                        "camlinternalFormat.ml",
                        1517,
                        39
                      ]
                    ];
              } else {
                return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
              }
            } else if (ign.tag === 8) {
              return make_from_fmtty(k$2, o$2, acc$2, ign[1], fmt$2);
            } else {
              return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
            }
        case 24 : 
            return make_custom(k, o, acc, fmt[2], fmt[0], _1(fmt[1], /* () */0));
        
      }
    }
  }
}

function make_from_fmtty(k, o, acc, fmtty, fmt) {
  if (typeof fmtty === "number") {
    return make_invalid_arg(k, o, acc, fmt);
  } else {
    switch (fmtty.tag | 0) {
      case 0 : 
          var rest = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest, fmt);
            });
      case 1 : 
          var rest$1 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$1, fmt);
            });
      case 2 : 
          var rest$2 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$2, fmt);
            });
      case 3 : 
          var rest$3 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$3, fmt);
            });
      case 4 : 
          var rest$4 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$4, fmt);
            });
      case 5 : 
          var rest$5 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$5, fmt);
            });
      case 6 : 
          var rest$6 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$6, fmt);
            });
      case 7 : 
          var rest$7 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$7, fmt);
            });
      case 8 : 
          var rest$8 = fmtty[1];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$8, fmt);
            });
      case 9 : 
          var rest$9 = fmtty[2];
          var ty = trans(symm(fmtty[0]), fmtty[1]);
          return (function () {
              return make_from_fmtty(k, o, acc, concat_fmtty(ty, rest$9), fmt);
            });
      case 10 : 
          var rest$10 = fmtty[0];
          return (function (_, _$1) {
              return make_from_fmtty(k, o, acc, rest$10, fmt);
            });
      case 11 : 
          var rest$11 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$11, fmt);
            });
      case 12 : 
          var rest$12 = fmtty[0];
          return (function () {
              return make_from_fmtty(k, o, acc, rest$12, fmt);
            });
      case 13 : 
          throw [
                assert_failure,
                [
                  "camlinternalFormat.ml",
                  1540,
                  31
                ]
              ];
      case 14 : 
          throw [
                assert_failure,
                [
                  "camlinternalFormat.ml",
                  1541,
                  31
                ]
              ];
      
    }
  }
}

function make_invalid_arg(k, o, acc, fmt) {
  return make_printf(k, o, /* Acc_invalid_arg */__(8, [
                acc,
                "Printf: bad conversion %_"
              ]), fmt);
}

function make_string_padding(k, o, acc, fmt, pad, trans) {
  if (typeof pad === "number") {
    return (function (x) {
        var new_acc_001 = _1(trans, x);
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else if (pad.tag) {
    var padty = pad[0];
    return (function (w, x) {
        var new_acc_001 = fix_padding(padty, w, _1(trans, x));
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  } else {
    var width = pad[1];
    var padty$1 = pad[0];
    return (function (x) {
        var new_acc_001 = fix_padding(padty$1, width, _1(trans, x));
        var new_acc = /* Acc_data_string */__(4, [
            acc,
            new_acc_001
          ]);
        return make_printf(k, o, new_acc, fmt);
      });
  }
}

function make_int_padding_precision(k, o, acc, fmt, pad, prec, trans, iconv) {
  if (typeof pad === "number") {
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_int_precision(p, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = _2(trans, iconv, x);
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p = prec[0];
      return (function (x) {
          var str = fix_int_precision(p, _2(trans, iconv, x));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else if (pad.tag) {
    var padty = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (w, p, x) {
            var str = fix_padding(padty, w, fix_int_precision(p, _2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (w, x) {
            var str = fix_padding(padty, w, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$1 = prec[0];
      return (function (w, x) {
          var str = fix_padding(padty, w, fix_int_precision(p$1, _2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  } else {
    var w = pad[1];
    var padty$1 = pad[0];
    if (typeof prec === "number") {
      if (prec !== 0) {
        return (function (p, x) {
            var str = fix_padding(padty$1, w, fix_int_precision(p, _2(trans, iconv, x)));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      } else {
        return (function (x) {
            var str = fix_padding(padty$1, w, _2(trans, iconv, x));
            return make_printf(k, o, /* Acc_data_string */__(4, [
                          acc,
                          str
                        ]), fmt);
          });
      }
    } else {
      var p$2 = prec[0];
      return (function (x) {
          var str = fix_padding(padty$1, w, fix_int_precision(p$2, _2(trans, iconv, x)));
          return make_printf(k, o, /* Acc_data_string */__(4, [
                        acc,
                        str
                      ]), fmt);
        });
    }
  }
}

function make_custom(k, o, acc, rest, arity, f) {
  if (arity) {
    var arity$1 = arity[0];
    return (function (x) {
        return make_custom(k, o, acc, rest, arity$1, _1(f, x));
      });
  } else {
    return make_printf(k, o, /* Acc_data_string */__(4, [
                  acc,
                  f
                ]), rest);
  }
}

function strput_acc(b, _acc) {
  while(true) {
    var acc = _acc;
    var exit$$1 = 0;
    if (typeof acc === "number") {
      return /* () */0;
    } else {
      switch (acc.tag | 0) {
        case 0 : 
            var s = string_of_formatting_lit(acc[1]);
            strput_acc(b, acc[0]);
            return add_string(b, s);
        case 1 : 
            var match = acc[1];
            var p = acc[0];
            strput_acc(b, p);
            if (match.tag) {
              add_string(b, "@[");
              _acc = match[0];
              continue ;
              
            } else {
              add_string(b, "@{");
              _acc = match[0];
              continue ;
              
            }
            break;
        case 2 : 
        case 4 : 
            exit$$1 = 1;
            break;
        case 3 : 
        case 5 : 
            exit$$1 = 2;
            break;
        case 6 : 
            strput_acc(b, acc[0]);
            return add_string(b, _1(acc[1], /* () */0));
        case 7 : 
            _acc = acc[0];
            continue ;
            case 8 : 
            strput_acc(b, acc[0]);
            throw [
                  invalid_argument,
                  acc[1]
                ];
        
      }
    }
    switch (exit$$1) {
      case 1 : 
          strput_acc(b, acc[0]);
          return add_string(b, acc[1]);
      case 2 : 
          strput_acc(b, acc[0]);
          return add_char(b, acc[1]);
      
    }
  }
}


/* No side effect */

function ksprintf(k, param) {
  var k$prime = function (_, acc) {
    var buf = create$1(64);
    strput_acc(buf, acc);
    return _1(k, contents(buf));
  };
  return make_printf(k$prime, /* () */0, /* End_of_acc */0, param[0]);
}

function sprintf(fmt) {
  return ksprintf((function (s) {
                return s;
              }), fmt);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function split_on_char$1(sep, s) {
  var r = /* [] */0;
  var j = s.length;
  for(var i = s.length - 1 | 0; i >= 0; --i){
    if (get(s, i) === sep) {
      r = /* :: */[
        sub$1(s, i + 1 | 0, (j - i | 0) - 1 | 0),
        r
      ];
      j = i;
    }
    
  }
  return /* :: */[
          sub$1(s, 0, j),
          r
        ];
}

function identical_positions$1(x, y) {
  if (x[/* eval */10] === y[/* eval */10] && x[/* turn */1] === y[/* turn */1] && caml_equal(x[/* cas_w */2], y[/* cas_w */2]) && caml_equal(x[/* cas_b */3], y[/* cas_b */3]) && caml_equal(x[/* en_passant */4], y[/* en_passant */4])) {
    return caml_equal(x[/* ar */0], y[/* ar */0]);
  } else {
    return /* false */0;
  }
}

function draw_by_repetition_aux$1(pos, _p, _n) {
  while(true) {
    var n = _n;
    var p = _p;
    if (n <= 0) {
      return /* true */1;
    } else if ((n << 1) > p[/* irr_change */6]) {
      return /* false */0;
    } else {
      var match = p[/* prev */5];
      if (match) {
        var pp = match[0];
        if (identical_positions$1(pos, pp)) {
          _n = n - 1 | 0;
          _p = pp;
          continue ;
          
        } else {
          _p = pp;
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    }
  }
}

function draw$1(pos) {
  if (pos[/* irr_change */6] >= 100) {
    return /* true */1;
  } else {
    return draw_by_repetition_aux$1(pos, pos, 2);
  }
}

function opposite_color$1(param) {
  if (param !== 0) {
    return /* Black */0;
  } else {
    return /* White */1;
  }
}

var piece_chars$1 = /* :: */[
  /* tuple */[
    /* King */0,
    /* "K" */75
  ],
  /* :: */[
    /* tuple */[
      /* Queen */1,
      /* "Q" */81
    ],
    /* :: */[
      /* tuple */[
        /* Rook */2,
        /* "R" */82
      ],
      /* :: */[
        /* tuple */[
          /* Bishop */3,
          /* "B" */66
        ],
        /* :: */[
          /* tuple */[
            /* Knight */4,
            /* "N" */78
          ],
          /* :: */[
            /* tuple */[
              /* Pawn */5,
              /* "P" */80
            ],
            /* [] */0
          ]
        ]
      ]
    ]
  ]
];

function char_of_piece_type$1(pt) {
  return assoc(pt, piece_chars$1);
}

function rassoc$1(x, _lst) {
  while(true) {
    var lst = _lst;
    if (lst) {
      var match = lst[0];
      if (caml_equal(x, match[1])) {
        return match[0];
      } else {
        _lst = lst[1];
        continue ;
        
      }
    } else {
      throw not_found;
    }
  }
}

function piece_type_of_char$1(c) {
  return rassoc$1(uppercase$2(c), piece_chars$1);
}

var init_array = make_matrix(8, 8, /* Empty */0);

function put(i, j, pt) {
  caml_array_set(caml_array_get(init_array, i), j, /* Piece */[/* tuple */[
          pt,
          /* White */1
        ]]);
  return caml_array_set(caml_array_get(init_array, i), 7 - j | 0, /* Piece */[/* tuple */[
                pt,
                /* Black */0
              ]]);
}

for(var i = 0; i <= 7; ++i){
  put(i, 1, /* Pawn */5);
}

put(0, 0, /* Rook */2);

put(7, 0, /* Rook */2);

put(1, 0, /* Knight */4);

put(6, 0, /* Knight */4);

put(2, 0, /* Bishop */3);

put(5, 0, /* Bishop */3);

put(3, 0, /* Queen */1);

put(4, 0, /* King */0);

var init_position_002 = /* cas_w : tuple */[
  /* true */1,
  /* true */1
];

var init_position_003 = /* cas_b : tuple */[
  /* true */1,
  /* true */1
];

var init_position_007 = /* king_w : tuple */[
  4,
  0
];

var init_position_008 = /* king_b : tuple */[
  4,
  7
];

var init_position$1 = /* record */[
  /* ar */init_array,
  /* turn : White */1,
  init_position_002,
  init_position_003,
  /* en_passant : None */0,
  /* prev : None */0,
  /* irr_change */0,
  init_position_007,
  init_position_008,
  /* number */0,
  /* eval */0
];

function within_range$1(i) {
  if (i >= 0) {
    return +(i <= 7);
  } else {
    return /* false */0;
  }
}

function within_range2$1(param) {
  if (within_range$1(param[0])) {
    return within_range$1(param[1]);
  } else {
    return /* false */0;
  }
}

function copy_matrix$1(m) {
  var tmp = copy$2(m);
  iteri$3((function (i, elt) {
          return caml_array_set(tmp, i, copy$2(elt));
        }), m);
  return tmp;
}

function no_k_castle$1(param) {
  return /* tuple */[
          param[0],
          /* false */0
        ];
}

function no_q_castle$1(param) {
  return /* tuple */[
          /* false */0,
          param[1]
        ];
}

var Illegal_move$1 = create("Ochess.Illegal_move");

function make_move$1(pos, m, del) {
  var ar2 = copy_matrix$1(pos[/* ar */0]);
  var mv = function (x1, y1, x2, y2) {
    caml_array_set(caml_array_get(ar2, x2), y2, caml_array_get(caml_array_get(ar2, x1), y1));
    return caml_array_set(caml_array_get(ar2, x1), y1, /* Empty */0);
  };
  var tmp_001 = /* turn */opposite_color$1(pos[/* turn */1]);
  var tmp_002 = /* cas_w */pos[/* cas_w */2];
  var tmp_003 = /* cas_b */pos[/* cas_b */3];
  var tmp_005 = /* prev : Some */[pos];
  var tmp_006 = /* irr_change */pos[/* irr_change */6];
  var tmp_007 = /* king_w */pos[/* king_w */7];
  var tmp_008 = /* king_b */pos[/* king_b */8];
  var tmp_009 = /* number */pos[/* number */9] + 1 | 0;
  var tmp_010 = /* eval */(-pos[/* eval */10] | 0) + del | 0;
  var tmp = /* record */[
    /* ar */ar2,
    tmp_001,
    tmp_002,
    tmp_003,
    /* en_passant : None */0,
    tmp_005,
    tmp_006,
    tmp_007,
    tmp_008,
    tmp_009,
    tmp_010
  ];
  var t = pos[/* turn */1];
  var ic = /* false */0;
  var ret;
  if (typeof m === "number") {
    if (m) {
      if (t !== 0) {
        mv(0, 0, 3, 0);
        mv(4, 0, 2, 0);
        var newrecord = tmp.slice();
        newrecord[/* cas_w */2] = /* tuple */[
          /* false */0,
          /* false */0
        ];
        newrecord[/* king_w */7] = /* tuple */[
          2,
          0
        ];
        ret = newrecord;
      } else {
        mv(0, 7, 3, 7);
        mv(4, 7, 2, 7);
        var newrecord$1 = tmp.slice();
        newrecord$1[/* cas_b */3] = /* tuple */[
          /* false */0,
          /* false */0
        ];
        newrecord$1[/* king_b */8] = /* tuple */[
          2,
          7
        ];
        ret = newrecord$1;
      }
    } else if (t !== 0) {
      mv(7, 0, 5, 0);
      mv(4, 0, 6, 0);
      var newrecord$2 = tmp.slice();
      newrecord$2[/* cas_w */2] = /* tuple */[
        /* false */0,
        /* false */0
      ];
      newrecord$2[/* king_w */7] = /* tuple */[
        6,
        0
      ];
      ret = newrecord$2;
    } else {
      mv(7, 7, 5, 7);
      mv(4, 7, 6, 7);
      var newrecord$3 = tmp.slice();
      newrecord$3[/* cas_b */3] = /* tuple */[
        /* false */0,
        /* false */0
      ];
      newrecord$3[/* king_b */8] = /* tuple */[
        6,
        7
      ];
      ret = newrecord$3;
    }
  } else if (m.tag) {
    var x2 = m[2];
    ic = /* true */1;
    var match = t !== 0 ? /* tuple */[
        6,
        7
      ] : /* tuple */[
        1,
        0
      ];
    var y2 = match[1];
    mv(m[1], match[0], x2, y2);
    caml_array_set(caml_array_get(ar2, x2), y2, /* Piece */[/* tuple */[
            m[0],
            pos[/* turn */1]
          ]]);
    ret = tmp;
  } else {
    var y2$1 = m[3];
    var x2$1 = m[2];
    var y1 = m[1];
    var x1 = m[0];
    var match$1 = caml_array_get(caml_array_get(pos[/* ar */0], x2$1), y2$1);
    if (!match$1) {
      ic = /* false */0;
    }
    mv(x1, y1, x2$1, y2$1);
    var match$2 = caml_array_get(caml_array_get(ar2, x2$1), y2$1);
    var p;
    if (match$2) {
      p = match$2[0][0];
    } else {
      throw Illegal_move$1;
    }
    switch (p) {
      case 0 : 
          var match$3 = pos[/* turn */1];
          if (match$3 !== 0) {
            var newrecord$4 = tmp.slice();
            newrecord$4[/* cas_w */2] = /* tuple */[
              /* false */0,
              /* false */0
            ];
            newrecord$4[/* king_w */7] = /* tuple */[
              x2$1,
              y2$1
            ];
            ret = newrecord$4;
          } else {
            var newrecord$5 = tmp.slice();
            newrecord$5[/* cas_b */3] = /* tuple */[
              /* false */0,
              /* false */0
            ];
            newrecord$5[/* king_b */8] = /* tuple */[
              x2$1,
              y2$1
            ];
            ret = newrecord$5;
          }
          break;
      case 2 : 
          var match$4 = pos[/* turn */1];
          if (match$4 !== 0) {
            if (x1 !== 0) {
              if (x1 !== 7) {
                ret = tmp;
              } else if (y1 !== 0) {
                ret = tmp;
              } else {
                var newrecord$6 = tmp.slice();
                newrecord$6[/* cas_w */2] = no_k_castle$1(pos[/* cas_b */3]);
                ret = newrecord$6;
              }
            } else if (y1 !== 0) {
              ret = tmp;
            } else {
              var newrecord$7 = tmp.slice();
              newrecord$7[/* cas_w */2] = no_q_castle$1(pos[/* cas_w */2]);
              ret = newrecord$7;
            }
          } else if (x1 !== 0) {
            if (x1 !== 7) {
              ret = tmp;
            } else if (y1 !== 7) {
              ret = tmp;
            } else {
              var newrecord$8 = tmp.slice();
              newrecord$8[/* cas_b */3] = no_k_castle$1(pos[/* cas_b */3]);
              ret = newrecord$8;
            }
          } else if (y1 !== 7) {
            ret = tmp;
          } else {
            var newrecord$9 = tmp.slice();
            newrecord$9[/* cas_b */3] = no_q_castle$1(pos[/* cas_w */2]);
            ret = newrecord$9;
          }
          break;
      case 1 : 
      case 3 : 
      case 4 : 
          ret = tmp;
          break;
      case 5 : 
          ic = /* true */1;
          var match$5 = caml_array_get(caml_array_get(ar2, x2$1), y2$1);
          var match$6 = pos[/* turn */1];
          var e2;
          if (match$5) {
            var match$7 = match$5[0];
            e2 = match$7[0] >= 5 ? (
                match$7[1] !== 0 ? (
                    match$6 !== 0 && x1 === x2$1 && y1 === 1 && y2$1 === 3 ? /* Some */[x1] : /* None */0
                  ) : (
                    match$6 !== 0 || !(x1 === x2$1 && y1 === 6 && y2$1 === 4) ? /* None */0 : /* Some */[x1]
                  )
              ) : /* None */0;
          } else {
            e2 = /* None */0;
          }
          var match$8 = pos[/* en_passant */4];
          if (match$8) {
            var i = match$8[0];
            if (i === x2$1) {
              var match$9 = pos[/* turn */1];
              if (match$9 !== 0) {
                if (y2$1 === 5) {
                  caml_array_set(caml_array_get(ar2, i), 4, /* Empty */0);
                }
                
              } else if (y2$1 === 2) {
                caml_array_set(caml_array_get(ar2, i), 3, /* Empty */0);
              }
              
            }
            
          }
          var newrecord$10 = tmp.slice();
          newrecord$10[/* en_passant */4] = e2;
          ret = newrecord$10;
          break;
      
    }
  }
  var newrecord$11 = ret.slice();
  newrecord$11[/* irr_change */6] = ic ? 0 : pos[/* irr_change */6] + 1 | 0;
  return newrecord$11;
}

var knight$1 = /* :: */[
  /* tuple */[
    1,
    2
  ],
  /* :: */[
    /* tuple */[
      1,
      -2
    ],
    /* :: */[
      /* tuple */[
        2,
        1
      ],
      /* :: */[
        /* tuple */[
          2,
          -1
        ],
        /* :: */[
          /* tuple */[
            -1,
            2
          ],
          /* :: */[
            /* tuple */[
              -1,
              -2
            ],
            /* :: */[
              /* tuple */[
                -2,
                1
              ],
              /* :: */[
                /* tuple */[
                  -2,
                  -1
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var rook$1 = /* :: */[
  /* tuple */[
    -1,
    0
  ],
  /* :: */[
    /* tuple */[
      0,
      -1
    ],
    /* :: */[
      /* tuple */[
        0,
        1
      ],
      /* :: */[
        /* tuple */[
          1,
          0
        ],
        /* [] */0
      ]
    ]
  ]
];

var bishop$1 = /* :: */[
  /* tuple */[
    -1,
    -1
  ],
  /* :: */[
    /* tuple */[
      -1,
      1
    ],
    /* :: */[
      /* tuple */[
        1,
        -1
      ],
      /* :: */[
        /* tuple */[
          1,
          1
        ],
        /* [] */0
      ]
    ]
  ]
];

var queen$1 = $at(bishop$1, rook$1);

var pawn_white_cap$1 = /* :: */[
  /* tuple */[
    -1,
    1
  ],
  /* :: */[
    /* tuple */[
      1,
      1
    ],
    /* [] */0
  ]
];

var pawn_black_cap$1 = /* :: */[
  /* tuple */[
    -1,
    -1
  ],
  /* :: */[
    /* tuple */[
      1,
      -1
    ],
    /* [] */0
  ]
];

function add$2(param, param$1) {
  return /* tuple */[
          param[0] + param$1[0] | 0,
          param[1] + param$1[1] | 0
        ];
}

function explore_direction$1(pos, x_init, y_init, _x, _y, dx, dy, _num, _acc) {
  while(true) {
    var acc = _acc;
    var num = _num;
    var y = _y;
    var x = _x;
    if (num < 1) {
      return acc;
    } else {
      var match = add$2(/* tuple */[
            x,
            y
          ], /* tuple */[
            dx,
            dy
          ]);
      var y2 = match[1];
      var x2 = match[0];
      if (within_range2$1(/* tuple */[
              x2,
              y2
            ])) {
        var match$1 = caml_array_get(caml_array_get(pos[/* ar */0], x2), y2);
        if (match$1) {
          if (match$1[0][1] !== pos[/* turn */1]) {
            return /* :: */[
                    /* Move */__(0, [
                        x_init,
                        y_init,
                        x2,
                        y2
                      ]),
                    acc
                  ];
          } else {
            return acc;
          }
        } else {
          _acc = /* :: */[
            /* Move */__(0, [
                x_init,
                y_init,
                x2,
                y2
              ]),
            acc
          ];
          _num = num - 1 | 0;
          _y = y2;
          _x = x2;
          continue ;
          
        }
      } else {
        return acc;
      }
    }
  }
}

function explore_directions$1(pos, x, y, lst, num) {
  return flatten(map((function (direction) {
                    return explore_direction$1(pos, x, y, x, y, direction[0], direction[1], num, /* [] */0);
                  }), lst));
}

function checked_direction$1(pos, t, pt_list, _x, _y, dx, dy, _num) {
  while(true) {
    var num = _num;
    var y = _y;
    var x = _x;
    if (num < 1) {
      return /* false */0;
    } else {
      var match = add$2(/* tuple */[
            x,
            y
          ], /* tuple */[
            dx,
            dy
          ]);
      var y2 = match[1];
      var x2 = match[0];
      if (within_range2$1(/* tuple */[
              x2,
              y2
            ])) {
        var match$1 = caml_array_get(caml_array_get(pos[/* ar */0], x2), y2);
        if (match$1) {
          var match$2 = match$1[0];
          if (match$2[1] !== t) {
            return mem(match$2[0], pt_list);
          } else {
            return /* false */0;
          }
        } else {
          _num = num - 1 | 0;
          _y = y2;
          _x = x2;
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    }
  }
}

function checked_directions$1(pos, c, pt_list, x, y, _lst, num) {
  while(true) {
    var lst = _lst;
    if (lst) {
      var match = lst[0];
      if (checked_direction$1(pos, c, pt_list, x, y, match[0], match[1], num)) {
        return /* true */1;
      } else {
        _lst = lst[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }
}

function checked$1(pos, t, x, y) {
  if (checked_directions$1(pos, t, /* :: */[
          /* Rook */2,
          /* :: */[
            /* Queen */1,
            /* [] */0
          ]
        ], x, y, rook$1, 10)) {
    return /* true */1;
  } else if (checked_directions$1(pos, t, /* :: */[
          /* Bishop */3,
          /* :: */[
            /* Queen */1,
            /* [] */0
          ]
        ], x, y, bishop$1, 10)) {
    return /* true */1;
  } else if (checked_directions$1(pos, t, /* :: */[
          /* Knight */4,
          /* [] */0
        ], x, y, knight$1, 1)) {
    return /* true */1;
  } else if (checked_directions$1(pos, t, /* :: */[
          /* King */0,
          /* [] */0
        ], x, y, queen$1, 1)) {
    return /* true */1;
  } else {
    var tmp = t === /* White */1 ? pawn_white_cap$1 : pawn_black_cap$1;
    return checked_directions$1(pos, t, /* :: */[
                /* Pawn */5,
                /* [] */0
              ], x, y, tmp, 1);
  }
}

function find_king$1(pos, c) {
  return /* Some */[c !== 0 ? pos[/* king_w */7] : pos[/* king_b */8]];
}

function king_checked$1(pos, c) {
  var match = find_king$1(pos, c);
  if (match) {
    var match$1 = match[0];
    return checked$1(pos, c, match$1[0], match$1[1]);
  } else {
    return /* false */0;
  }
}

function empty_segment$1(pos, row, _x, y) {
  while(true) {
    var x = _x;
    if (x > y) {
      return /* true */1;
    } else if (caml_array_get(caml_array_get(pos[/* ar */0], x), row) !== /* Empty */0) {
      return /* false */0;
    } else {
      _x = x + 1 | 0;
      continue ;
      
    }
  }
}

function check_castle$1(pos, still_can, row, next, last, rk) {
  if (still_can) {
    if (caml_equal(caml_array_get(caml_array_get(pos[/* ar */0], rk), row), /* Piece */[/* tuple */[
              /* Rook */2,
              pos[/* turn */1]
            ]])) {
      if (empty_segment$1(pos, row, min(next, last), max(next, last))) {
        if (checked$1(pos, pos[/* turn */1], 4, row)) {
          return /* false */0;
        } else {
          var a = copy_matrix$1(pos[/* ar */0]);
          caml_array_set(caml_array_get(a, 4), row, /* Empty */0);
          caml_array_set(caml_array_get(a, next), row, /* Piece */[/* tuple */[
                  /* King */0,
                  pos[/* turn */1]
                ]]);
          var newrecord = pos.slice();
          return 1 - checked$1((newrecord[/* ar */0] = a, newrecord), pos[/* turn */1], next, row);
        }
      } else {
        return /* false */0;
      }
    } else {
      return /* false */0;
    }
  } else {
    return /* false */0;
  }
}

function castle_moves$1(pos) {
  var match = pos[/* turn */1];
  var match$1 = match !== 0 ? /* tuple */[
      pos[/* cas_w */2],
      0
    ] : /* tuple */[
      pos[/* cas_b */3],
      7
    ];
  var row = match$1[1];
  var match$2 = match$1[0];
  return $at(check_castle$1(pos, match$2[0], row, 3, 1, 0) ? /* :: */[
                /* Queenside_castle */1,
                /* [] */0
              ] : /* [] */0, check_castle$1(pos, match$2[1], row, 5, 6, 7) ? /* :: */[
                /* Kingside_castle */0,
                /* [] */0
              ] : /* [] */0);
}

function possible_field_simple_moves$1(pos, x, y) {
  var exp1 = function (lst) {
    return explore_directions$1(pos, x, y, lst, 1);
  };
  var expn = function (lst) {
    return explore_directions$1(pos, x, y, lst, 10);
  };
  var match = caml_array_get(caml_array_get(pos[/* ar */0], x), y);
  if (match) {
    var match$1 = match[0];
    var t = match$1[1];
    if (t === pos[/* turn */1]) {
      switch (match$1[0]) {
        case 0 : 
            return $at(castle_moves$1(pos), exp1(queen$1));
        case 1 : 
            return expn(queen$1);
        case 2 : 
            return expn(rook$1);
        case 3 : 
            return expn(bishop$1);
        case 4 : 
            return exp1(knight$1);
        case 5 : 
            var y2 = t !== 0 ? y + 1 | 0 : y - 1 | 0;
            var tmp = [/* [] */0];
            var also = function (some_move) {
              tmp[0] = /* :: */[
                some_move,
                tmp[0]
              ];
              return /* () */0;
            };
            var officers = /* :: */[
              /* Bishop */3,
              /* :: */[
                /* Knight */4,
                /* :: */[
                  /* Rook */2,
                  /* :: */[
                    /* Queen */1,
                    /* [] */0
                  ]
                ]
              ]
            ];
            if (y2 === 7 && t === /* White */1 || y2 === 0 && t === /* Black */0) {
              var match$2 = caml_array_get(caml_array_get(pos[/* ar */0], x), y2);
              if (!match$2) {
                iter((function (pt) {
                        return also(/* Promotion */__(1, [
                                      pt,
                                      x,
                                      x
                                    ]));
                      }), officers);
              }
              iter((function (x2) {
                      if (within_range$1(x2)) {
                        var match = caml_array_get(caml_array_get(pos[/* ar */0], x2), y2);
                        if (match && match[0][1] !== t) {
                          return iter((function (pt) {
                                        return also(/* Promotion */__(1, [
                                                      pt,
                                                      x,
                                                      x2
                                                    ]));
                                      }), officers);
                        } else {
                          return /* () */0;
                        }
                      } else {
                        return 0;
                      }
                    }), /* :: */[
                    x - 1 | 0,
                    /* :: */[
                      x + 1 | 0,
                      /* [] */0
                    ]
                  ]);
            } else {
              var match$3 = caml_array_get(caml_array_get(pos[/* ar */0], x), y2);
              if (!match$3) {
                also(/* Move */__(0, [
                        x,
                        y,
                        x,
                        y2
                      ]));
              }
              iter((function (x2) {
                      if (within_range$1(x2)) {
                        var match = caml_array_get(caml_array_get(pos[/* ar */0], x2), y2);
                        if (match && match[0][1] !== t) {
                          return also(/* Move */__(0, [
                                        x,
                                        y,
                                        x2,
                                        y2
                                      ]));
                        } else {
                          return /* () */0;
                        }
                      } else {
                        return 0;
                      }
                    }), /* :: */[
                    x - 1 | 0,
                    /* :: */[
                      x + 1 | 0,
                      /* [] */0
                    ]
                  ]);
            }
            if (y !== 1) {
              if (y === 6) {
                if (!t) {
                  var match$4 = caml_array_get(caml_array_get(pos[/* ar */0], x), 5);
                  var match$5 = caml_array_get(caml_array_get(pos[/* ar */0], x), 4);
                  if (!match$4) {
                    if (match$5) {
                      
                    } else {
                      also(/* Move */__(0, [
                              x,
                              y,
                              x,
                              4
                            ]));
                    }
                  }
                  
                }
                
              }
              
            } else if (t !== 0) {
              var match$6 = caml_array_get(caml_array_get(pos[/* ar */0], x), 2);
              var match$7 = caml_array_get(caml_array_get(pos[/* ar */0], x), 3);
              if (!match$6) {
                if (match$7) {
                  
                } else {
                  also(/* Move */__(0, [
                          x,
                          y,
                          x,
                          3
                        ]));
                }
              }
              
            }
            var match$8 = pos[/* en_passant */4];
            if (match$8) {
              var i = match$8[0];
              var y_en_passant = t !== 0 ? 5 : 2;
              iter((function (x2) {
                      if (within_range$1(x2) && x2 === i && y2 === y_en_passant) {
                        return also(/* Move */__(0, [
                                      x,
                                      y,
                                      x2,
                                      y2
                                    ]));
                      } else {
                        return 0;
                      }
                    }), /* :: */[
                    x - 1 | 0,
                    /* :: */[
                      x + 1 | 0,
                      /* [] */0
                    ]
                  ]);
            }
            return tmp[0];
        
      }
    } else {
      return /* [] */0;
    }
  } else {
    return /* [] */0;
  }
}

function possible_moves$1(pos) {
  var tmp = /* [] */0;
  for(var x = 0; x <= 7; ++x){
    for(var y = 0; y <= 7; ++y){
      tmp = $at(possible_field_simple_moves$1(pos, x, y), tmp);
    }
  }
  return tmp;
}

var board_center$1 = /* array */[
  /* array */[
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  /* array */[
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  /* array */[
    0,
    0,
    3,
    5,
    5,
    3,
    0,
    0
  ],
  /* array */[
    0,
    0,
    5,
    9,
    9,
    5,
    0,
    0
  ],
  /* array */[
    0,
    0,
    5,
    9,
    9,
    5,
    0,
    0
  ],
  /* array */[
    0,
    0,
    3,
    5,
    5,
    3,
    0,
    0
  ],
  /* array */[
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  /* array */[
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
];

function mirror_y$1(c, y) {
  if (c !== 0) {
    return y;
  } else {
    return 7 - y | 0;
  }
}

function piece_value$1(pt, x, y, c) {
  var y$1 = mirror_y$1(c, y);
  var tmp;
  switch (pt) {
    case 0 : 
        tmp = 1000000 - imul(5, caml_array_get(caml_array_get(board_center$1, x), y$1)) | 0;
        break;
    case 1 : 
        tmp = 9000 + imul(10, caml_array_get(caml_array_get(board_center$1, x), y$1)) | 0;
        break;
    case 2 : 
        tmp = 5000 + imul(10, caml_array_get(caml_array_get(board_center$1, x), y$1)) | 0;
        break;
    case 3 : 
        tmp = 3200 + imul(20, caml_array_get(caml_array_get(board_center$1, x), y$1)) | 0;
        break;
    case 4 : 
        tmp = 3000 + imul(30, caml_array_get(caml_array_get(board_center$1, x), y$1)) | 0;
        break;
    case 5 : 
        tmp = 1000 + imul(30, caml_array_get(caml_array_get(board_center$1, x), y$1)) | 0;
        break;
    
  }
  return tmp + imul(5, y$1) | 0;
}

var win$1 = piece_value$1(/* King */0, 0, 0, /* White */1) / 2 | 0;

var Interrupt$1 = create("Ochess.Interrupt");

var Illegal_position$1 = create("Ochess.Illegal_position");

function legal_moves$1(pos) {
  return filter((function (m) {
                  var p_new = make_move$1(pos, m, 0);
                  return 1 - king_checked$1(p_new, pos[/* turn */1]);
                }))(possible_moves$1(pos));
}

function game_status$1(pos) {
  if (draw$1(pos)) {
    return /* Draw */0;
  } else {
    var lm = legal_moves$1(pos);
    if (lm) {
      return /* Play */__(1, [lm]);
    } else if (king_checked$1(pos, pos[/* turn */1])) {
      return /* Win */__(0, [opposite_color$1(pos[/* turn */1])]);
    } else {
      return /* Draw */0;
    }
  }
}


/* init_array Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function string_of_piece_type(param) {
  switch (param) {
    case 0 : 
        return "king";
    case 1 : 
        return "queen";
    case 2 : 
        return "rook";
    case 3 : 
        return "bishop";
    case 4 : 
        return "knight";
    case 5 : 
        return "pawn";
    
  }
}

function string_of_color(param) {
  if (param !== 0) {
    return "white";
  } else {
    return "black";
  }
}

function make_move(position, move) {
  return make_move$1(position, move, 0);
}

function annotate_move(position, move) {
  var position$prime = make_move(position, move);
  var checked = king_checked$1(position$prime, position$prime[/* turn */1]);
  if (checked) {
    var match = legal_moves$1(position$prime);
    if (match) {
      return /* Check */0;
    } else {
      return /* Checkmate */1;
    }
  } else {
    return /* No_check */2;
  }
}

function long_move(position, move) {
  if (typeof move === "number") {
    if (move) {
      return /* Ochess_move */__(2, [/* Queenside_castle */1]);
    } else {
      return /* Ochess_move */__(2, [/* Kingside_castle */0]);
    }
  } else if (move.tag) {
    var t_file = move[2];
    var s_file = move[1];
    var match = position[/* turn */1];
    var t_rank = match !== 0 ? 7 : 0;
    return /* Pawn_move */__(1, [
              s_file,
              /* tuple */[
                t_file,
                t_rank
              ],
              +(s_file !== t_file),
              /* Some */[move[0]]
            ]);
  } else {
    var t_rank$1 = move[3];
    var t_file$1 = move[2];
    var s_rank = move[1];
    var s_file$1 = move[0];
    var match$1 = caml_array_get(caml_array_get(position[/* ar */0], s_file$1), s_rank);
    if (match$1) {
      var p_type = match$1[0][0];
      if (p_type >= 5) {
        return /* Pawn_move */__(1, [
                  s_file$1,
                  /* tuple */[
                    t_file$1,
                    t_rank$1
                  ],
                  +(s_file$1 !== t_file$1),
                  /* None */0
                ]);
      } else {
        var match$2 = caml_array_get(caml_array_get(position[/* ar */0], t_file$1), t_rank$1);
        var capture = match$2 ? /* true */1 : /* false */0;
        return /* Piece_move */__(0, [
                  p_type,
                  /* tuple */[
                    s_file$1,
                    s_rank
                  ],
                  /* tuple */[
                    t_file$1,
                    t_rank$1
                  ],
                  capture
                ]);
      }
    } else {
      throw Illegal_move$1;
    }
  }
}

function unify(value, hint) {
  if (hint && !caml_equal(value, hint[0])) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function unify_move(short_move, long_move) {
  switch (long_move.tag | 0) {
    case 0 : 
        var long_source = long_move[1];
        if (caml_equal(short_move[3], long_move[2]) && short_move[0] === long_move[0] && unify(long_source[0], short_move[1])) {
          return unify(long_source[1], short_move[2]);
        } else {
          return /* false */0;
        }
    case 1 : 
    case 2 : 
        return /* false */0;
    
  }
}

function unique(move_list, short_move) {
  return +(length(filter((function (param) {
                        return unify_move(short_move, param);
                      }))(move_list)) === 1);
}

function short_move_of_long_move(move_list, long_move) {
  switch (long_move.tag | 0) {
    case 0 : 
        var capture = long_move[3];
        var target = long_move[2];
        var match = long_move[1];
        var s_rank = match[1];
        var s_file = match[0];
        var p_type = long_move[0];
        var qg7 = /* tuple */[
          p_type,
          /* None */0,
          /* None */0,
          target,
          capture
        ];
        if (unique(move_list, qg7)) {
          return /* Some */[qg7];
        } else {
          var qhg7_001 = /* Some */[s_file];
          var qhg7 = /* tuple */[
            p_type,
            qhg7_001,
            /* None */0,
            target,
            capture
          ];
          if (unique(move_list, qhg7)) {
            return /* Some */[qhg7];
          } else {
            var q8g7_002 = /* Some */[s_rank];
            var q8g7 = /* tuple */[
              p_type,
              /* None */0,
              q8g7_002,
              target,
              capture
            ];
            if (unique(move_list, q8g7)) {
              return /* Some */[q8g7];
            } else {
              return /* Some */[/* tuple */[
                        p_type,
                        /* Some */[s_file],
                        /* Some */[s_rank],
                        target,
                        capture
                      ]];
            }
          }
        }
        break;
    case 1 : 
    case 2 : 
        return /* None */0;
    
  }
}

function san_of_move$prime(position, move_list, move) {
  var long_move$1 = long_move(position, move);
  var check = annotate_move(position, move);
  var short_move_option = short_move_of_long_move(move_list, long_move$1);
  var san;
  if (short_move_option) {
    var match = short_move_option[0];
    var match$1 = match[3];
    var rank_hint = match[2];
    var file_hint = match[1];
    san = _6(sprintf(/* Format */[
              /* Char */__(0, [/* String */__(2, [
                      /* No_padding */0,
                      /* String */__(2, [
                          /* No_padding */0,
                          /* String */__(2, [
                              /* No_padding */0,
                              /* Char */__(0, [/* Char */__(0, [/* End_of_format */0])])
                            ])
                        ])
                    ])]),
              "%c%s%s%s%c%c"
            ]), char_of_piece_type$1(match[0]), file_hint ? _1(sprintf(/* Format */[
                    /* Char */__(0, [/* End_of_format */0]),
                    "%c"
                  ]), get("abcdefgh", file_hint[0])) : "", rank_hint ? _1(sprintf(/* Format */[
                    /* Char */__(0, [/* End_of_format */0]),
                    "%c"
                  ]), get("12345678", rank_hint[0])) : "", match[4] ? "x" : "", get("abcdefgh", match$1[0]), get("12345678", match$1[1]));
  } else {
    switch (long_move$1.tag | 0) {
      case 0 : 
          throw Illegal_move$1;
      case 1 : 
          var promotion = long_move$1[3];
          var match$2 = long_move$1[1];
          san = _4(sprintf(/* Format */[
                    /* String */__(2, [
                        /* No_padding */0,
                        /* Char */__(0, [/* Char */__(0, [/* String */__(2, [
                                    /* No_padding */0,
                                    /* End_of_format */0
                                  ])])])
                      ]),
                    "%s%c%c%s"
                  ]), long_move$1[2] ? _1(sprintf(/* Format */[
                          /* Char */__(0, [/* Char_literal */__(12, [
                                  /* "x" */120,
                                  /* End_of_format */0
                                ])]),
                          "%cx"
                        ]), get("abcdefgh", long_move$1[0])) : "", get("abcdefgh", match$2[0]), get("12345678", match$2[1]), promotion ? _1(sprintf(/* Format */[
                          /* Char_literal */__(12, [
                              /* "=" */61,
                              /* Char */__(0, [/* End_of_format */0])
                            ]),
                          "=%c"
                        ]), char_of_piece_type$1(promotion[0])) : "");
          break;
      case 2 : 
          var match$3 = long_move$1[0];
          if (typeof match$3 === "number") {
            san = match$3 !== 0 ? "O-O-O" : "O-O";
          } else {
            throw Illegal_move$1;
          }
          break;
      
    }
  }
  var tmp;
  switch (check) {
    case 0 : 
        tmp = "+";
        break;
    case 1 : 
        tmp = "#";
        break;
    case 2 : 
        tmp = "";
        break;
    
  }
  return san + tmp;
}

function san_of_move(position, move) {
  var move_list = map((function (param) {
          return long_move(position, param);
        }), legal_moves$1(position));
  return san_of_move$prime(position, move_list, move);
}

var split_on_char = split_on_char$1;

var opposite_color = opposite_color$1;

var piece_type_of_char = piece_type_of_char$1;

var init_position = init_position$1;

var Illegal_move = Illegal_move$1;

var legal_moves = legal_moves$1;

var game_status = game_status$1;


/* Ochess Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function maybe(p) {
  return option(/* None */0, _2($great$great$eq, p, (function (x) {
                    return _1($$return, /* Some */[x]);
                  })));
}

function fold_right(f, init, p) {
  return (function (param) {
      var _acc = function (x) {
        return x;
      };
      var _input = param;
      while(true) {
        var input = _input;
        var acc = _acc;
        var match = _1(p, input);
        if (match) {
          var match$1 = match[0];
          var res = match$1[0];
          _input = match$1[1];
          _acc = (function(acc,res){
          return function (tl$$1) {
            return _1(acc, _2(f, res, tl$$1));
          }
          }(acc,res));
          continue ;
          
        } else {
          return /* Some */[/* tuple */[
                    _1(acc, init),
                    input
                  ]];
        }
      }
    });
}

function many(p) {
  return fold_right((function (x, xs) {
                return /* :: */[
                        x,
                        xs
                      ];
              }), /* [] */0, p);
}

var Ambiguous_move = create("Pgn.Ambiguous_move");

var Parse_error = create("Pgn.Parse_error");

var pgn_string = many(none_of(/* :: */[
          /* "\"" */34,
          /* [] */0
        ]));

var pgn_tag_key = many1(none_of(/* :: */[
          /* " " */32,
          /* [] */0
        ]));

var pgn_tag_value = $less$less($great$great(exactly(/* "\"" */34), pgn_string), exactly(/* "\"" */34));

var pgn_tag_key_value = _2($great$great$eq, $less$less(pgn_tag_key, many1(space)), (function (tag_key) {
        return _2($great$great$eq, pgn_tag_value, (function (tag_value) {
                      return _1($$return, /* tuple */[
                                  implode(tag_key),
                                  implode(tag_value)
                                ]);
                    }));
      }));

var pgn_tag = $less$less($great$great(exactly(/* "[" */91), pgn_tag_key_value), exactly(/* "]" */93));

var pgn_header = many($less$less(pgn_tag, newline));

var pgn_piece = $eq$great(one_of(/* :: */[
          /* "K" */75,
          /* :: */[
            /* "Q" */81,
            /* :: */[
              /* "R" */82,
              /* :: */[
                /* "B" */66,
                /* :: */[
                  /* "N" */78,
                  /* :: */[
                    /* "P" */80,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]), piece_type_of_char);

var pgn_file = choice(mapi$1((function (i, file) {
            return $great$great(exactly(file), (function (param) {
                          return $$return(i, param);
                        }));
          }), /* :: */[
          /* "a" */97,
          /* :: */[
            /* "b" */98,
            /* :: */[
              /* "c" */99,
              /* :: */[
                /* "d" */100,
                /* :: */[
                  /* "e" */101,
                  /* :: */[
                    /* "f" */102,
                    /* :: */[
                      /* "g" */103,
                      /* :: */[
                        /* "h" */104,
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]));

var pgn_rank = choice(mapi$1((function (i, file) {
            return $great$great(exactly(file), (function (param) {
                          return $$return(i, param);
                        }));
          }), /* :: */[
          /* "1" */49,
          /* :: */[
            /* "2" */50,
            /* :: */[
              /* "3" */51,
              /* :: */[
                /* "4" */52,
                /* :: */[
                  /* "5" */53,
                  /* :: */[
                    /* "6" */54,
                    /* :: */[
                      /* "7" */55,
                      /* :: */[
                        /* "8" */56,
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]));

var pgn_square = _2($great$great$eq, pgn_file, (function (file) {
        return _2($great$great$eq, pgn_rank, (function (rank) {
                      return _1($$return, /* tuple */[
                                  file,
                                  rank
                                ]);
                    }));
      }));

var pgn_capture = exactly(/* "x" */120);

var pgn_check = exactly(/* "+" */43);

var pgn_checkmate = exactly(/* "#" */35);

var pgn_promotion = $great$great(maybe(exactly(/* "=" */61)), pgn_piece);

var pgn_nag = _2($less$pipe$great, $great$great(exactly(/* "$" */36), $eq$great(many1(digit), implode)), $eq$great(many1(one_of(/* :: */[
                  /* "!" */33,
                  /* :: */[
                    /* "?" */63,
                    /* [] */0
                  ]
                ])), implode));

var pgn_castle = _2($less$pipe$great, $great$great(_2($less$pipe$great, token("O-O-O"), token("0-0-0")), (function (param) {
            return $$return(/* Queenside_castle */0, param);
          })), $great$great(_2($less$pipe$great, token("O-O"), token("0-0")), (function (param) {
            return $$return(/* Kingside_castle */1, param);
          })));

var pgn_disambiguated_move = _2($great$great$eq, pgn_piece, (function (piece) {
        return _2($great$great$eq, maybe(pgn_file), (function (file) {
                      return _2($great$great$eq, maybe(pgn_rank), (function (rank) {
                                    return $eq$great($great$great(optional(pgn_capture), pgn_square), (function (destination) {
                                                  return /* Piece_move */__(0, [
                                                            piece,
                                                            file,
                                                            rank,
                                                            destination
                                                          ]);
                                                }));
                                  }));
                    }));
      }));

var pgn_normal_move = _2($great$great$eq, pgn_piece, (function (piece) {
        return $eq$great($great$great(optional(pgn_capture), pgn_square), (function (destination) {
                      return /* Piece_move */__(0, [
                                piece,
                                /* None */0,
                                /* None */0,
                                destination
                              ]);
                    }));
      }));

var pgn_pawn_move = _2($great$great$eq, pgn_square, (function (destination) {
        return $eq$great(maybe(pgn_promotion), (function (promotion) {
                      return /* Pawn_move */__(1, [
                                /* None */0,
                                destination,
                                promotion
                              ]);
                    }));
      }));

var pgn_pawn_capture_move = _2($great$great$eq, maybe(pgn_file), (function (source_file) {
        return _2($great$great$eq, $great$great(optional(pgn_capture), pgn_square), (function (destination) {
                      return $eq$great(maybe(pgn_promotion), (function (promotion) {
                                    return /* Pawn_move */__(1, [
                                              source_file,
                                              destination,
                                              promotion
                                            ]);
                                  }));
                    }));
      }));

var pgn_san = $less$less(_2($less$pipe$great, _2($less$pipe$great, _2($less$pipe$great, (function (param) {
                    return $less$pipe$great(pgn_castle, pgn_disambiguated_move, param);
                  }), pgn_normal_move), pgn_pawn_move), pgn_pawn_capture_move), optional((function (param) {
            return $less$pipe$great(pgn_check, pgn_checkmate, param);
          })));

var pgn_comment = $eq$great($less$less($great$great(exactly(/* "{" */123), many(none_of(/* :: */[
                      /* "}" */125,
                      /* [] */0
                    ]))), exactly(/* "}" */125)), implode);

var pgn_number = $less$less(many1(digit), _2($less$pipe$great, _2($less$pipe$great, token(". ..."), token("...")), token(".")));

function pgn_rav() {
  return $less$less($great$great(exactly(/* "(" */40), lexeme(pgn_line(/* () */0))), lexeme(exactly(/* ")" */41)));
}

function pgn_move() {
  return _2($great$great$eq, many(lexeme(pgn_comment)), (function (pre_comment) {
                return _2($great$great$eq, $great$great(maybe(lexeme(pgn_number)), lexeme(pgn_san)), (function (move) {
                              return _2($great$great$eq, many(lexeme(pgn_nag)), (function (nags) {
                                            return _2($great$great$eq, many(lexeme(pgn_comment)), (function (post_comment) {
                                                          return _2($great$great$eq, many(lexeme(pgn_rav(/* () */0))), (function (rav) {
                                                                        return _1($$return, /* record */[
                                                                                    /* pre_comment */pre_comment,
                                                                                    /* move */move,
                                                                                    /* nags */nags,
                                                                                    /* rav */rav,
                                                                                    /* post_comment */post_comment
                                                                                  ]);
                                                                      }));
                                                        }));
                                          }));
                            }));
              }));
}

function pgn_line() {
  return sep_by(pgn_move(/* () */0), space);
}

var pgn_result = _2($less$pipe$great, _2($less$pipe$great, _2($less$pipe$great, _2($less$pipe$great, $great$great(token("1-0"), _1($$return, /* Some */[/* Win */[/* White */1]])), $great$great(token("1/2-1/2"), _1($$return, /* Some */[/* Draw */0]))), $great$great(token("1/2"), _1($$return, /* Some */[/* Draw */0]))), $great$great(token("0-1"), _1($$return, /* Some */[/* Win */[/* White */1]]))), $great$great(token("*"), (function (param) {
            return $$return(/* None */0, param);
          })));

var pgn_game = _2($great$great$eq, $less$less(lexeme(pgn_header), maybe(newline)), (function (header) {
        return _2($great$great$eq, $less$less(pgn_line(/* () */0), spaces), (function (movetext) {
                      return _2($great$great$eq, pgn_result, (function (result) {
                                    return _1($$return, /* tuple */[
                                                header,
                                                movetext,
                                                result
                                              ]);
                                  }));
                    }));
      }));

function unify_moves(position, pgn_move, move) {
  if (typeof pgn_move === "number") {
    if (pgn_move) {
      if (typeof move === "number" && move === 0) {
        return /* true */1;
      } else {
        return /* false */0;
      }
    } else if (typeof move === "number" && move !== 0) {
      return /* true */1;
    } else {
      return /* false */0;
    }
  } else if (pgn_move.tag) {
    var match = pgn_move[2];
    var match$1 = pgn_move[1];
    var t_rank = match$1[1];
    var t_file = match$1[0];
    var s_file = pgn_move[0];
    if (match) {
      if (typeof move === "number") {
        return /* false */0;
      } else if (move.tag === 1) {
        var s_file$prime = move[1];
        var match$2 = position[/* turn */1];
        var promo_rank = match$2 !== 0 ? 7 : 0;
        var match$3 = position[/* turn */1];
        var s_rank$prime = match$3 !== 0 ? 6 : 1;
        if (caml_equal(caml_array_get(caml_array_get(position[/* ar */0], s_file$prime), s_rank$prime), /* Piece */[/* tuple */[
                  /* Pawn */5,
                  position[/* turn */1]
                ]]) && unify(s_file$prime, s_file) && move[2] === t_file && promo_rank === t_rank) {
          return +(move[0] === match[0]);
        } else {
          return /* false */0;
        }
      } else {
        return /* false */0;
      }
    } else if (typeof move === "number") {
      return /* false */0;
    } else if (move.tag) {
      return /* false */0;
    } else {
      var s_file$prime$1 = move[0];
      if (caml_equal(caml_array_get(caml_array_get(position[/* ar */0], s_file$prime$1), move[1]), /* Piece */[/* tuple */[
                /* Pawn */5,
                position[/* turn */1]
              ]]) && unify(s_file$prime$1, s_file) && move[2] === t_file) {
        return +(move[3] === t_rank);
      } else {
        return /* false */0;
      }
    }
  } else if (typeof move === "number") {
    return /* false */0;
  } else if (move.tag) {
    return /* false */0;
  } else {
    var s_rank$prime$1 = move[1];
    var s_file$prime$2 = move[0];
    var match$4 = pgn_move[3];
    if (caml_equal(caml_array_get(caml_array_get(position[/* ar */0], s_file$prime$2), s_rank$prime$1), /* Piece */[/* tuple */[
              pgn_move[0],
              position[/* turn */1]
            ]]) && unify(s_file$prime$2, pgn_move[1]) && unify(s_rank$prime$1, pgn_move[2]) && move[2] === match$4[0]) {
      return +(move[3] === match$4[1]);
    } else {
      return /* false */0;
    }
  }
}

function move_of_pgn_move(position, move) {
  var moves = legal_moves(position);
  var possible_moves$$1 = filter((function (param) {
            return unify_moves(position, move, param);
          }))(moves);
  if (possible_moves$$1) {
    if (possible_moves$$1[1]) {
      throw Ambiguous_move;
    } else {
      return possible_moves$$1[0];
    }
  } else {
    throw Illegal_move;
  }
}

function game_of_string(string) {
  var advance = function (param, move) {
    var position = param[0];
    var move$prime = move_of_pgn_move(position, move[/* move */1]);
    var position$prime = make_move(position, move$prime);
    var san = san_of_move(position, move$prime);
    var acc$prime_000 = /* tuple */[
      move$prime,
      san
    ];
    var acc$prime_001 = param[2];
    var acc$prime = /* :: */[
      acc$prime_000,
      acc$prime_001
    ];
    return /* tuple */[
            position$prime,
            param[1] + 1 | 0,
            acc$prime
          ];
  };
  var pgn = parse(pgn_game, LazyStream[/* of_string */2](string));
  if (pgn) {
    var match = fold_left(advance, /* tuple */[
          init_position,
          0,
          /* [] */0
        ], pgn[0][1]);
    return /* tuple */[
            match[0],
            match[1],
            /* tuple */[
              match[2],
              /* [] */0
            ]
          ];
  } else {
    throw Parse_error;
  }
}


/* pgn_string Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function setStyle(n, key, value) {
  n.style[key] = value;
  return /* () */0;
}

function setStyleProperty(n, $staropt$star, key, value) {
  var priority = $staropt$star ? $staropt$star[0] : /* false */0;
  var style = n.style;
  var match = style.setProperty;
  if (match !== undefined) {
    return style.setProperty(key, value, priority ? "important" : null);
  } else {
    return setStyle(n, key, value);
  }
}

function insertBefore(n, child, refNode) {
  return n.insertBefore(child, refNode);
}

function setAttributeNsOptional(n, namespace, key, value) {
  if (namespace === "") {
    return n.setAttribute(key, value);
  } else {
    return n.setAttributeNS(namespace, key, value);
  }
}

function removeAttributeNsOptional(n, namespace, key) {
  if (namespace === "") {
    return n.removeAttribute(key);
  } else {
    return n.removeAttributeNS(namespace, key);
  }
}

function addEventListener(n, typ, listener, options) {
  return n.addEventListener(typ, listener, options);
}

function removeEventListener(n, typ, listener, options) {
  return n.removeEventListener(typ, listener, options);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function createElementNsOptional(namespace, tagName) {
  if (namespace === "") {
    return document.createElement(tagName);
  } else {
    return document.createElementNS(namespace, tagName);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var noNode = /* CommentNode */__(0, [""]);

function fullnode(namespace, tagName, key, unique, props, vdoms) {
  return /* Node */__(2, [
            namespace,
            tagName,
            key,
            unique,
            props,
            vdoms
          ]);
}

function onCB(name, key, cb) {
  return /* Event */__(3, [
            name,
            /* EventHandlerCallback */__(0, [
                key,
                cb
              ]),
            [/* None */0]
          ]);
}

function onMsg(name, msg) {
  return /* Event */__(3, [
            name,
            /* EventHandlerMsg */__(1, [msg]),
            [/* None */0]
          ]);
}

function style(key, value) {
  return /* Style */__(4, [/* :: */[
              /* tuple */[
                key,
                value
              ],
              /* [] */0
            ]]);
}

function renderToHtmlString(_param) {
  while(true) {
    var param = _param;
    switch (param.tag | 0) {
      case 0 : 
          return "<!-- " + (param[0] + " -->");
      case 1 : 
          return param[0];
      case 2 : 
          var tagName = param[1];
          var namespace = param[0];
          return concat$1("", /* :: */[
                      "<",
                      /* :: */[
                        namespace,
                        /* :: */[
                          namespace === "" ? "" : ":",
                          /* :: */[
                            tagName,
                            /* :: */[
                              concat$1("", map((function (p) {
                                          var param = p;
                                          if (typeof param === "number") {
                                            return "";
                                          } else {
                                            switch (param.tag | 0) {
                                              case 0 : 
                                                  return concat$1("", /* :: */[
                                                              " ",
                                                              /* :: */[
                                                                param[0],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[1],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case 1 : 
                                                  return concat$1("", /* :: */[
                                                              " ",
                                                              /* :: */[
                                                                param[1],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[2],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case 2 : 
                                                  return concat$1("", /* :: */[
                                                              " data-",
                                                              /* :: */[
                                                                param[0],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[1],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case 3 : 
                                                  return "";
                                              case 4 : 
                                                  return concat$1("", /* :: */[
                                                              " style=\"",
                                                              /* :: */[
                                                                concat$1(";", map((function (param) {
                                                                            return concat$1("", /* :: */[
                                                                                        param[0],
                                                                                        /* :: */[
                                                                                          ":",
                                                                                          /* :: */[
                                                                                            param[1],
                                                                                            /* :: */[
                                                                                              ";",
                                                                                              /* [] */0
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]);
                                                                          }), param[0])),
                                                                /* :: */[
                                                                  "\"",
                                                                  /* [] */0
                                                                ]
                                                              ]
                                                            ]);
                                              
                                            }
                                          }
                                        }), param[4])),
                              /* :: */[
                                ">",
                                /* :: */[
                                  concat$1("", map(renderToHtmlString, param[5])),
                                  /* :: */[
                                    "</",
                                    /* :: */[
                                      tagName,
                                      /* :: */[
                                        ">",
                                        /* [] */0
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]);
      case 3 : 
          _param = _1(param[1], /* () */0);
          continue ;
          case 4 : 
          _param = param[1];
          continue ;
          
    }
  }
}

function eventHandler(callbacks, cb) {
  return (function (ev) {
      var match = _1(cb[0], ev);
      if (match) {
        return _1(callbacks[0][/* enqueue */0], match[0]);
      } else {
        return /* () */0;
      }
    });
}

function eventHandler_GetCB(param) {
  if (param.tag) {
    var msg = param[0];
    return (function () {
        return /* Some */[msg];
      });
  } else {
    return param[1];
  }
}

function compareEventHandlerTypes(left, param) {
  if (param.tag) {
    if (!left.tag || !caml_equal(param[0], left[0])) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (!left.tag && param[0] === left[0]) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function eventHandler_Register(callbacks, elem, name, handlerType) {
  var cb = [eventHandler_GetCB(handlerType)];
  var handler = eventHandler(callbacks, cb);
  addEventListener(elem, name, handler, /* false */0);
  return /* Some */[/* record */[
            /* handler */handler,
            /* cb */cb
          ]];
}

function eventHandler_Unregister(elem, name, param) {
  if (param) {
    removeEventListener(elem, name, param[0][/* handler */0], /* false */0);
    return /* None */0;
  } else {
    return /* None */0;
  }
}

function eventHandler_Mutate(callbacks, elem, oldName, newName, oldHandlerType, newHandlerType, oldCache, newCache) {
  var match = oldCache[0];
  if (match) {
    if (oldName === newName) {
      newCache[0] = oldCache[0];
      if (compareEventHandlerTypes(oldHandlerType, newHandlerType)) {
        return /* () */0;
      } else {
        var cb = eventHandler_GetCB(newHandlerType);
        match[0][/* cb */1][0] = cb;
        return /* () */0;
      }
    } else {
      oldCache[0] = eventHandler_Unregister(elem, oldName, oldCache[0]);
      newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
      return /* () */0;
    }
  } else {
    newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
    return /* () */0;
  }
}

function patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, _, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = param[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, param[0], param[1], param[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Add Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Add Data Unhandled"
              ];
      case 3 : 
          param[2][0] = eventHandler_Register(callbacks, elem, param[0], param[1]);
          return /* () */0;
      case 4 : 
          return fold_left((function (_, param) {
                        return setStyleProperty(elem, /* None */0, param[0], param[1]);
                      }), /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_Remove(_, elem, _$1, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = undefined;
          return /* () */0;
      case 1 : 
          return removeAttributeNsOptional(elem, param[0], param[1]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Remove Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Remove Data Unhandled"
              ];
      case 3 : 
          var cache = param[2];
          cache[0] = eventHandler_Unregister(elem, param[0], cache[0]);
          return /* () */0;
      case 4 : 
          return fold_left((function (_, param) {
                        return setStyleProperty(elem, /* None */0, param[0], null);
                      }), /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, oldProp, newProp) {
  patchVNodesOnElems_PropertiesApply_Remove(callbacks, elem, idx, oldProp);
  patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, idx, newProp);
  return /* () */0;
}

function patchVNodesOnElems_PropertiesApply_Mutate(_, elem, _$1, oldProp, _newProp) {
  if (typeof _newProp === "number") {
    throw [
          failure,
          "This should never be called as all entries through NoProp are gated."
        ];
  } else {
    switch (_newProp.tag | 0) {
      case 0 : 
          elem[_newProp[0]] = _newProp[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, _newProp[0], _newProp[1], _newProp[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Mutate Data Unhandled",
                _newProp[0],
                _newProp[1]
              ]);
          throw [
                failure,
                "TODO:  Mutate Data Unhandled"
              ];
      case 3 : 
          throw [
                failure,
                "This will never be called because it is gated"
              ];
      case 4 : 
          if (typeof oldProp === "number") {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          } else if (oldProp.tag === 4) {
            return fold_left2((function (_, param, param$1) {
                          var nv = param$1[1];
                          var nk = param$1[0];
                          var ok = param[0];
                          if (ok === nk) {
                            if (param[1] === nv) {
                              return /* () */0;
                            } else {
                              return setStyleProperty(elem, /* None */0, nk, nv);
                            }
                          } else {
                            setStyleProperty(elem, /* None */0, ok, null);
                            return setStyleProperty(elem, /* None */0, nk, nv);
                          }
                        }), /* () */0, oldProp[0], _newProp[0]);
          } else {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          }
          break;
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply(callbacks, elem, _idx, _oldProperties, _newProperties) {
  while(true) {
    var newProperties = _newProperties;
    var oldProperties = _oldProperties;
    var idx = _idx;
    if (oldProperties) {
      var _oldProp = oldProperties[0];
      var exit = 0;
      if (newProperties) {
        if (typeof _oldProp === "number") {
          if (typeof newProperties[0] === "number") {
            _newProperties = newProperties[1];
            _oldProperties = oldProperties[1];
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            exit = 1;
          }
        } else {
          switch (_oldProp.tag | 0) {
            case 0 : 
                var newProp = newProperties[0];
                if (typeof newProp === "number") {
                  exit = 1;
                } else if (newProp.tag) {
                  exit = 1;
                } else {
                  if (!(_oldProp[0] === newProp[0] && _oldProp[1] === newProp[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                }
                break;
            case 1 : 
                var newProp$1 = newProperties[0];
                if (typeof newProp$1 === "number") {
                  exit = 1;
                } else if (newProp$1.tag === 1) {
                  if (!(_oldProp[0] === newProp$1[0] && _oldProp[1] === newProp$1[1] && _oldProp[2] === newProp$1[2])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$1);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 2 : 
                var newProp$2 = newProperties[0];
                if (typeof newProp$2 === "number") {
                  exit = 1;
                } else if (newProp$2.tag === 2) {
                  if (!(_oldProp[0] === newProp$2[0] && _oldProp[1] === newProp$2[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$2);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 3 : 
                var _newProp = newProperties[0];
                if (typeof _newProp === "number") {
                  exit = 1;
                } else if (_newProp.tag === 3) {
                  eventHandler_Mutate(callbacks, elem, _oldProp[0], _newProp[0], _oldProp[1], _newProp[1], _oldProp[2], _newProp[2]);
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 4 : 
                var newProp$3 = newProperties[0];
                if (typeof newProp$3 === "number") {
                  exit = 1;
                } else if (newProp$3.tag === 4) {
                  if (!caml_equal(_oldProp[0], newProp$3[0])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$3);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            
          }
        }
      } else {
        return /* false */0;
      }
      if (exit === 1) {
        patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, _oldProp, newProperties[0]);
        _newProperties = newProperties[1];
        _oldProperties = oldProperties[1];
        _idx = idx + 1 | 0;
        continue ;
        
      }
      
    } else if (newProperties) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  }
}

function patchVNodesOnElems_Properties(callbacks, elem, oldProperties, newProperties) {
  return patchVNodesOnElems_PropertiesApply(callbacks, elem, 0, oldProperties, newProperties);
}

function patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, param) {
  if (param.tag === 2) {
    var newProperties = param[4];
    var oldChild = caml_array_get(elems, idx);
    var newChild = createElementNsOptional(param[0], param[1]);
    var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function () {
                return /* NoProp */0;
              }), newProperties), newProperties);
    if (match !== 0) {
      var childChildren = newChild.childNodes;
      patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
      insertBefore(elem, newChild, oldChild);
      elem.removeChild(oldChild);
      return /* () */0;
    } else {
      throw [
            match_failure,
            [
              "/Users/daniel/Playground/tea-chess/node_modules/bucklescript-tea/src/vdom.ml",
              319,
              30
            ]
          ];
    }
  } else {
    throw [
          failure,
          "Node replacement should never be passed anything but a node itself"
        ];
  }
}

function patchVNodesOnElems_CreateElement(_callbacks, _param) {
  while(true) {
    var param = _param;
    var callbacks = _callbacks;
    switch (param.tag | 0) {
      case 0 : 
          var text = param[0];
          return document.createComment(text);
      case 1 : 
          var text$1 = param[0];
          return document.createTextNode(text$1);
      case 2 : 
          var newProperties = param[4];
          var newChild = createElementNsOptional(param[0], param[1]);
          var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function () {
                      return /* NoProp */0;
                    }), newProperties), newProperties);
          if (match !== 0) {
            var childChildren = newChild.childNodes;
            patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
            return newChild;
          } else {
            throw [
                  match_failure,
                  [
                    "/Users/daniel/Playground/tea-chess/node_modules/bucklescript-tea/src/vdom.ml",
                    333,
                    30
                  ]
                ];
          }
          break;
      case 3 : 
          var vdom = _1(param[1], /* () */0);
          param[2][0] = vdom;
          _param = vdom;
          continue ;
          case 4 : 
          _param = param[1];
          _callbacks = _1(param[0], callbacks);
          continue ;
          
    }
  }
}

function patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode) {
  if (oldNode.tag === 2) {
    if (newNode.tag === 2) {
      if (oldNode[3] !== newNode[3] || oldNode[1] !== newNode[1]) {
        return patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
      } else {
        var child = caml_array_get(elems, idx);
        var childChildren = child.childNodes;
        if (!patchVNodesOnElems_Properties(callbacks, child, oldNode[4], newNode[4])) {
          console.log("VDom:  Failed swapping properties because the property list length changed, use `noProp` to swap properties instead, not by altering the list structure.  This is a massive inefficiency until this issue is resolved.");
          patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
        }
        return patchVNodesOnElems(callbacks, child, childChildren, 0, oldNode[5], newNode[5]);
      }
    } else {
      throw [
            failure,
            "Non-node passed to patchVNodesOnElems_MutateNode"
          ];
    }
  } else {
    throw [
          failure,
          "Non-node passed to patchVNodesOnElems_MutateNode"
        ];
  }
}

function patchVNodesOnElems(callbacks, elem, elems, _idx, _oldVNodes, _newVNodes) {
  while(true) {
    var newVNodes = _newVNodes;
    var oldVNodes = _oldVNodes;
    var idx = _idx;
    if (oldVNodes) {
      var oldNode = oldVNodes[0];
      var exit = 0;
      switch (oldNode.tag | 0) {
        case 0 : 
            if (newVNodes) {
              var match = newVNodes[0];
              if (match.tag) {
                exit = 1;
              } else if (oldNode[0] === match[0]) {
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 1 : 
            if (newVNodes) {
              var match$1 = newVNodes[0];
              if (match$1.tag === 1) {
                var newText = match$1[0];
                if (oldNode[0] !== newText) {
                  var child = caml_array_get(elems, idx);
                  child.nodeValue = newText;
                }
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 2 : 
            if (newVNodes) {
              var newNode = newVNodes[0];
              if (newNode.tag === 2) {
                var newRest = newVNodes[1];
                var newKey = newNode[2];
                var newTagName = newNode[1];
                var newNamespace = newNode[0];
                var oldRest = oldVNodes[1];
                var oldKey = oldNode[2];
                var oldTagName = oldNode[1];
                var oldNamespace = oldNode[0];
                if (oldKey === newKey && oldKey !== "") {
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else if (oldKey === "" || newKey === "") {
                  patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$1 = 0;
                  var exit$2 = 0;
                  if (oldRest) {
                    var match$2 = oldRest[0];
                    if (match$2.tag === 2) {
                      var olderRest = oldRest[1];
                      var olderKey = match$2[2];
                      var olderTagName = match$2[1];
                      var olderNamespace = match$2[0];
                      var exit$3 = 0;
                      if (newRest) {
                        var match$3 = newRest[0];
                        if (match$3.tag === 2) {
                          if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey && oldNamespace === match$3[0] && oldTagName === match$3[1] && oldKey === match$3[2]) {
                            var firstChild$$1 = caml_array_get(elems, idx);
                            var secondChild = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild);
                            insertBefore(elem, secondChild, firstChild$$1);
                            _newVNodes = newRest[1];
                            _oldVNodes = olderRest;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$3 = 4;
                          }
                        } else {
                          exit$3 = 4;
                        }
                      } else {
                        exit$3 = 4;
                      }
                      if (exit$3 === 4) {
                        if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey) {
                          var oldChild = caml_array_get(elems, idx);
                          elem.removeChild(oldChild);
                          _newVNodes = newRest;
                          _oldVNodes = olderRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$2 = 3;
                        }
                      }
                      
                    } else {
                      exit$2 = 3;
                    }
                  } else {
                    exit$2 = 3;
                  }
                  if (exit$2 === 3) {
                    if (newRest) {
                      var match$4 = newRest[0];
                      if (match$4.tag === 2) {
                        if (oldNamespace === match$4[0] && oldTagName === match$4[1] && oldKey === match$4[2]) {
                          var oldChild$1 = caml_array_get(elems, idx);
                          var newChild = patchVNodesOnElems_CreateElement(callbacks, newNode);
                          insertBefore(elem, newChild, oldChild$1);
                          _newVNodes = newRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$1 = 2;
                        }
                      } else {
                        exit$1 = 2;
                      }
                    } else {
                      exit$1 = 2;
                    }
                  }
                  if (exit$1 === 2) {
                    patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                    _newVNodes = newRest;
                    _oldVNodes = oldRest;
                    _idx = idx + 1 | 0;
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 3 : 
            if (newVNodes) {
              var match$5 = newVNodes[0];
              if (match$5.tag === 3) {
                var newRest$1 = newVNodes[1];
                var newCache = match$5[2];
                var newGen = match$5[1];
                var newKey$1 = match$5[0];
                var oldRest$1 = oldVNodes[1];
                var oldCache = oldNode[2];
                var oldKey$1 = oldNode[0];
                if (oldKey$1 === newKey$1) {
                  newCache[0] = oldCache[0];
                  _newVNodes = newRest$1;
                  _oldVNodes = oldRest$1;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$4 = 0;
                  var exit$5 = 0;
                  if (oldRest$1) {
                    var match$6 = oldRest$1[0];
                    if (match$6.tag === 3) {
                      var olderRest$1 = oldRest$1[1];
                      var olderKey$1 = match$6[0];
                      var exit$6 = 0;
                      if (newRest$1) {
                        var match$7 = newRest$1[0];
                        if (match$7.tag === 3) {
                          if (olderKey$1 === newKey$1 && oldKey$1 === match$7[0]) {
                            var firstChild$1 = caml_array_get(elems, idx);
                            var secondChild$1 = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild$1);
                            insertBefore(elem, secondChild$1, firstChild$1);
                            _newVNodes = newRest$1[1];
                            _oldVNodes = olderRest$1;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$6 = 4;
                          }
                        } else {
                          exit$6 = 4;
                        }
                      } else {
                        exit$6 = 4;
                      }
                      if (exit$6 === 4) {
                        if (olderKey$1 === newKey$1) {
                          var oldChild$2 = caml_array_get(elems, idx);
                          elem.removeChild(oldChild$2);
                          var oldVdom = match$6[2][0];
                          newCache[0] = oldVdom;
                          _newVNodes = newRest$1;
                          _oldVNodes = olderRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$5 = 3;
                        }
                      }
                      
                    } else {
                      exit$5 = 3;
                    }
                  } else {
                    exit$5 = 3;
                  }
                  if (exit$5 === 3) {
                    if (newRest$1) {
                      var match$8 = newRest$1[0];
                      if (match$8.tag === 3) {
                        if (match$8[0] === oldKey$1) {
                          var oldChild$3 = caml_array_get(elems, idx);
                          var newVdom = _1(newGen, /* () */0);
                          newCache[0] = newVdom;
                          var newChild$1 = patchVNodesOnElems_CreateElement(callbacks, newVdom);
                          insertBefore(elem, newChild$1, oldChild$3);
                          _newVNodes = newRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$4 = 2;
                        }
                      } else {
                        exit$4 = 2;
                      }
                    } else {
                      exit$4 = 2;
                    }
                  }
                  if (exit$4 === 2) {
                    var oldVdom$1 = oldCache[0];
                    var newVdom$1 = _1(newGen, /* () */0);
                    newCache[0] = newVdom$1;
                    _newVNodes = /* :: */[
                      newVdom$1,
                      newRest$1
                    ];
                    _oldVNodes = /* :: */[
                      oldVdom$1,
                      oldRest$1
                    ];
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 4 : 
            _oldVNodes = /* :: */[
              oldNode[1],
              oldVNodes[1]
            ];
            continue ;
            
      }
      if (exit === 1) {
        var oldRest$2 = oldVNodes[1];
        if (newVNodes) {
          var newNode$1 = newVNodes[0];
          if (newNode$1.tag === 4) {
            patchVNodesOnElems(_1(newNode$1[0], callbacks), elem, elems, idx, /* :: */[
                  oldNode,
                  /* [] */0
                ], /* :: */[
                  newNode$1[1],
                  /* [] */0
                ]);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            var oldChild$4 = caml_array_get(elems, idx);
            var newChild$2 = patchVNodesOnElems_CreateElement(callbacks, newNode$1);
            insertBefore(elem, newChild$2, oldChild$4);
            elem.removeChild(oldChild$4);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          }
        } else {
          var child$1 = caml_array_get(elems, idx);
          elem.removeChild(child$1);
          _newVNodes = /* [] */0;
          _oldVNodes = oldRest$2;
          continue ;
          
        }
      }
      
    } else if (newVNodes) {
      var newChild$3 = patchVNodesOnElems_CreateElement(callbacks, newVNodes[0]);
      elem.appendChild(newChild$3);
      _newVNodes = newVNodes[1];
      _oldVNodes = /* [] */0;
      _idx = idx + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function patchVNodesIntoElement(callbacks, elem, oldVNodes, newVNodes) {
  var elems = elem.childNodes;
  patchVNodesOnElems(callbacks, elem, elems, 0, oldVNodes, newVNodes);
  return newVNodes;
}

function wrapCallbacks(func, callbacks) {
  return [/* record */[/* enqueue */(function (msg) {
                return _1(callbacks[0][/* enqueue */0], _1(func, msg));
              })]];
}

function map$5(func, vdom) {
  var tagger = function (callbacks) {
    return [/* record */[/* enqueue */(function (msg) {
                  return _1(callbacks[0][/* enqueue */0], _1(func, msg));
                })]];
  };
  return /* Tagger */__(4, [
            tagger,
            vdom
          ]);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function batch(cmds) {
  return /* Batch */__(1, [cmds]);
}

function msg(msg$1) {
  return /* EnqueueCall */__(2, [(function (callbacks) {
                return _1(callbacks[0][/* enqueue */0], msg$1);
              })]);
}

function run(callbacks, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 1 : 
          return fold_left((function (_, cmd) {
                        return run(callbacks, cmd);
                      }), /* () */0, param[0]);
      case 0 : 
      case 2 : 
          return _1(param[0], callbacks);
      
    }
  }
}

function map$4(func, cmd) {
  return /* Tagger */__(0, [(function (callbacks) {
                return run(wrapCallbacks(func, callbacks), cmd);
              })]);
}

var none = /* NoCmd */0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function batch$1(subs) {
  return /* Batch */__(0, [subs]);
}

function registration(key, enableCall) {
  return /* Registration */__(1, [
            key,
            (function (callbacks) {
                return _1(enableCall, callbacks[0]);
              }),
            [/* None */0]
          ]);
}

function map$6(msgMapper, sub) {
  var func = function (callbacks) {
    return [/* record */[/* enqueue */(function (userMsg) {
                  return _1(callbacks[0][/* enqueue */0], _1(msgMapper, userMsg));
                })]];
  };
  return /* Mapper */__(2, [
            func,
            sub
          ]);
}

function run$1(oldCallbacks, newCallbacks, oldSub, newSub) {
  var enable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return enable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              param[2][0] = /* Some */[_1(param[1], callbacks)];
              return /* () */0;
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var disable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return disable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              var diCB = param[2];
              var match = diCB[0];
              if (match) {
                diCB[0] = /* None */0;
                return _1(match[0], /* () */0);
              } else {
                return /* () */0;
              }
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var exit = 0;
  if (typeof oldSub === "number") {
    if (typeof newSub === "number") {
      return newSub;
    } else {
      exit = 1;
    }
  } else {
    switch (oldSub.tag | 0) {
      case 0 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag) {
            exit = 1;
          } else {
            var aux = function (_oldList, _newList) {
              while(true) {
                var newList = _newList;
                var oldList = _oldList;
                if (oldList) {
                  var oldRest = oldList[1];
                  var oldSubSub = oldList[0];
                  if (newList) {
                    run$1(oldCallbacks, newCallbacks, oldSubSub, newList[0]);
                    _newList = newList[1];
                    _oldList = oldRest;
                    continue ;
                    
                  } else {
                    disable(oldCallbacks, oldSubSub);
                    _newList = /* [] */0;
                    _oldList = oldRest;
                    continue ;
                    
                  }
                } else if (newList) {
                  enable(newCallbacks, newList[0]);
                  _newList = newList[1];
                  _oldList = /* [] */0;
                  continue ;
                  
                } else {
                  return /* () */0;
                }
              }
            };
            aux(oldSub[0], newSub[0]);
            return newSub;
          }
          break;
      case 1 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 1) {
            if (oldSub[0] === newSub[0]) {
              newSub[2][0] = oldSub[2][0];
              return newSub;
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
          break;
      case 2 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 2) {
            var olderCallbacks = _1(oldSub[0], oldCallbacks);
            var newerCallbacks = _1(newSub[0], newCallbacks);
            run$1(olderCallbacks, newerCallbacks, oldSub[1], newSub[1]);
            return newSub;
          } else {
            exit = 1;
          }
          break;
      
    }
  }
  if (exit === 1) {
    disable(oldCallbacks, oldSub);
    enable(newCallbacks, newSub);
    return newSub;
  }
  
}

var none$1 = /* NoSub */0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function text$1(str) {
  return /* Text */__(1, [str]);
}

function node$1($staropt$star, tagName, $staropt$star$1, $staropt$star$2, props, nodes) {
  var namespace = $staropt$star ? $staropt$star[0] : "";
  var key = $staropt$star$1 ? $staropt$star$1[0] : "";
  var unique = $staropt$star$2 ? $staropt$star$2[0] : "";
  return fullnode(namespace, tagName, key, unique, props, nodes);
}

function span($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "span", key, unique, props, nodes);
}

function a($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "a", key, unique, props, nodes);
}

function section($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "section", key, unique, props, nodes);
}

function button($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "button", key, unique, props, nodes);
}

function ul($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "ul", key, unique, props, nodes);
}

function li($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "li", key, unique, props, nodes);
}

function table($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "table", key, unique, props, nodes);
}

function tr($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "tr", key, unique, props, nodes);
}

function td($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "td", key, unique, props, nodes);
}

function nav($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "nav", key, unique, props, nodes);
}

function main$3($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "main", key, unique, props, nodes);
}

function id$1(str) {
  return /* RawProp */__(0, [
            "id",
            str
          ]);
}

function href(str) {
  return /* Attribute */__(1, [
            "",
            "href",
            str
          ]);
}

function class$prime(name) {
  return /* RawProp */__(0, [
            "className",
            name
          ]);
}

function classList(classes) {
  var name = concat$1(" ", map((function (param) {
              return param[0];
            }), filter((function (param) {
                    return param[1];
                  }))(classes)));
  return /* RawProp */__(0, [
            "className",
            name
          ]);
}

var style$2 = style;

function styles$1(s) {
  return /* Style */__(4, [s]);
}

var onCB$1 = onCB;

function onClick(msg) {
  return onMsg("click", msg);
}

var noNode$1 = noNode;

var noProp$1 = /* NoProp */0;


/* No side effect */

function classify$1(x) {
  var ty = typeof x;
  if (ty === "string") {
    return /* JSONString */__(0, [x]);
  } else if (ty === "number") {
    return /* JSONNumber */__(1, [x]);
  } else if (ty === "boolean") {
    if (x === true) {
      return /* JSONTrue */1;
    } else {
      return /* JSONFalse */0;
    }
  } else if (x === null) {
    return /* JSONNull */2;
  } else if (Array.isArray(x)) {
    return /* JSONArray */__(3, [x]);
  } else {
    return /* JSONObject */__(2, [x]);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var classify = classify$1;


/* null Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function error(param) {
  if (param.tag) {
    return /* Some */[param[0]];
  } else {
    return /* None */0;
  }
}

function first(fst, e) {
  if (e.tag) {
    return e;
  } else {
    return fst;
  }
}

function error_of_first(fst, param) {
  if (param.tag) {
    return /* Some */[param[0]];
  } else {
    return error(fst);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function height(param) {
  if (param) {
    return param[4];
  } else {
    return 0;
  }
}

function create$2(l, x, d, r) {
  var hl = height(l);
  var hr = height(r);
  return /* Node */[
          l,
          x,
          d,
          r,
          hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        ];
}

function singleton(x, d) {
  return /* Node */[
          /* Empty */0,
          x,
          d,
          /* Empty */0,
          1
        ];
}

function bal(l, x, d, r) {
  var hl = l ? l[4] : 0;
  var hr = r ? r[4] : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      var lr = l[3];
      var ld = l[2];
      var lv = l[1];
      var ll = l[0];
      if (height(ll) >= height(lr)) {
        return create$2(ll, lv, ld, create$2(lr, x, d, r));
      } else if (lr) {
        return create$2(create$2(ll, lv, ld, lr[0]), lr[1], lr[2], create$2(lr[3], x, d, r));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else if (hr > (hl + 2 | 0)) {
    if (r) {
      var rr = r[3];
      var rd = r[2];
      var rv = r[1];
      var rl = r[0];
      if (height(rr) >= height(rl)) {
        return create$2(create$2(l, x, d, rl), rv, rd, rr);
      } else if (rl) {
        return create$2(create$2(l, x, d, rl[0]), rl[1], rl[2], create$2(rl[3], rv, rd, rr));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else {
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  }
}

function is_empty(param) {
  if (param) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function add$3(x, data, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        return bal(add$3(x, data, l), v, d, r);
      } else {
        return bal(l, v, d, add$3(x, data, r));
      }
    } else {
      return /* Node */[
              l,
              x,
              data,
              r,
              param[4]
            ];
    }
  } else {
    return /* Node */[
            /* Empty */0,
            x,
            data,
            /* Empty */0,
            1
          ];
  }
}

function find$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[1]);
      if (c) {
        _param = c < 0 ? param[0] : param[3];
        continue ;
        
      } else {
        return param[2];
      }
    } else {
      throw not_found;
    }
  }
}

function mem$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[1]);
      if (c) {
        _param = c < 0 ? param[0] : param[3];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  }
}

function min_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var l = param[0];
      if (l) {
        _param = l;
        continue ;
        
      } else {
        return /* tuple */[
                param[1],
                param[2]
              ];
      }
    } else {
      throw not_found;
    }
  }
}

function max_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var r = param[3];
      if (r) {
        _param = r;
        continue ;
        
      } else {
        return /* tuple */[
                param[1],
                param[2]
              ];
      }
    } else {
      throw not_found;
    }
  }
}

function remove_min_binding(param) {
  if (param) {
    var l = param[0];
    if (l) {
      return bal(remove_min_binding(l), param[1], param[2], param[3]);
    } else {
      return param[3];
    }
  } else {
    throw [
          invalid_argument,
          "Map.remove_min_elt"
        ];
  }
}

function remove$1(x, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        return bal(remove$1(x, l), v, d, r);
      } else {
        return bal(l, v, d, remove$1(x, r));
      }
    } else {
      var t1 = l;
      var t2 = r;
      if (t1) {
        if (t2) {
          var match = min_binding(t2);
          return bal(t1, match[0], match[1], remove_min_binding(t2));
        } else {
          return t1;
        }
      } else {
        return t2;
      }
    }
  } else {
    return /* Empty */0;
  }
}

function iter$5(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      iter$5(f, param[0]);
      _2(f, param[1], param[2]);
      _param = param[3];
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function map$7(f, param) {
  if (param) {
    var l$prime = map$7(f, param[0]);
    var d$prime = _1(f, param[2]);
    var r$prime = map$7(f, param[3]);
    return /* Node */[
            l$prime,
            param[1],
            d$prime,
            r$prime,
            param[4]
          ];
  } else {
    return /* Empty */0;
  }
}

function mapi$4(f, param) {
  if (param) {
    var v = param[1];
    var l$prime = mapi$4(f, param[0]);
    var d$prime = _2(f, v, param[2]);
    var r$prime = mapi$4(f, param[3]);
    return /* Node */[
            l$prime,
            v,
            d$prime,
            r$prime,
            param[4]
          ];
  } else {
    return /* Empty */0;
  }
}

function fold(f, _m, _accu) {
  while(true) {
    var accu = _accu;
    var m = _m;
    if (m) {
      _accu = _3(f, m[1], m[2], fold(f, m[0], accu));
      _m = m[3];
      continue ;
      
    } else {
      return accu;
    }
  }
}

function for_all$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[1], param[2])) {
        if (for_all$1(p, param[0])) {
          _param = param[3];
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  }
}

function exists$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[1], param[2])) {
        return /* true */1;
      } else if (exists$1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[3];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }
}

function add_min_binding(k, v, param) {
  if (param) {
    return bal(add_min_binding(k, v, param[0]), param[1], param[2], param[3]);
  } else {
    return singleton(k, v);
  }
}

function add_max_binding(k, v, param) {
  if (param) {
    return bal(param[0], param[1], param[2], add_max_binding(k, v, param[3]));
  } else {
    return singleton(k, v);
  }
}

function join(l, v, d, r) {
  if (l) {
    if (r) {
      var rh = r[4];
      var lh = l[4];
      if (lh > (rh + 2 | 0)) {
        return bal(l[0], l[1], l[2], join(l[3], v, d, r));
      } else if (rh > (lh + 2 | 0)) {
        return bal(join(l, v, d, r[0]), r[1], r[2], r[3]);
      } else {
        return create$2(l, v, d, r);
      }
    } else {
      return add_max_binding(v, d, l);
    }
  } else {
    return add_min_binding(v, d, r);
  }
}

function concat$4(t1, t2) {
  if (t1) {
    if (t2) {
      var match = min_binding(t2);
      return join(t1, match[0], match[1], remove_min_binding(t2));
    } else {
      return t1;
    }
  } else {
    return t2;
  }
}

function concat_or_join(t1, v, d, t2) {
  if (d) {
    return join(t1, v, d[0], t2);
  } else {
    return concat$4(t1, t2);
  }
}

function split$1(x, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        var match = split$1(x, l);
        return /* tuple */[
                match[0],
                match[1],
                join(match[2], v, d, r)
              ];
      } else {
        var match$1 = split$1(x, r);
        return /* tuple */[
                join(l, v, d, match$1[0]),
                match$1[1],
                match$1[2]
              ];
      }
    } else {
      return /* tuple */[
              l,
              /* Some */[d],
              r
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            /* None */0,
            /* Empty */0
          ];
  }
}

function merge$1(f, s1, s2) {
  var exit$$1 = 0;
  if (s1) {
    var v1 = s1[1];
    if (s1[4] >= height(s2)) {
      var match = split$1(v1, s2);
      return concat_or_join(merge$1(f, s1[0], match[0]), v1, _3(f, v1, /* Some */[s1[2]], match[1]), merge$1(f, s1[3], match[2]));
    } else {
      exit$$1 = 1;
    }
  } else if (s2) {
    exit$$1 = 1;
  } else {
    return /* Empty */0;
  }
  if (exit$$1 === 1) {
    if (s2) {
      var v2 = s2[1];
      var match$1 = split$1(v2, s1);
      return concat_or_join(merge$1(f, match$1[0], s2[0]), v2, _3(f, v2, match$1[1], /* Some */[s2[2]]), merge$1(f, match$1[2], s2[3]));
    } else {
      throw [
            assert_failure,
            [
              "map.ml",
              270,
              10
            ]
          ];
    }
  }
  
}

function filter$1(p, param) {
  if (param) {
    var d = param[2];
    var v = param[1];
    var l$prime = filter$1(p, param[0]);
    var pvd = _2(p, v, d);
    var r$prime = filter$1(p, param[3]);
    if (pvd) {
      return join(l$prime, v, d, r$prime);
    } else {
      return concat$4(l$prime, r$prime);
    }
  } else {
    return /* Empty */0;
  }
}

function partition$1(p, param) {
  if (param) {
    var d = param[2];
    var v = param[1];
    var match = partition$1(p, param[0]);
    var lf = match[1];
    var lt = match[0];
    var pvd = _2(p, v, d);
    var match$1 = partition$1(p, param[3]);
    var rf = match$1[1];
    var rt = match$1[0];
    if (pvd) {
      return /* tuple */[
              join(lt, v, d, rt),
              concat$4(lf, rf)
            ];
    } else {
      return /* tuple */[
              concat$4(lt, rt),
              join(lf, v, d, rf)
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            /* Empty */0
          ];
  }
}

function cons_enum(_m, _e) {
  while(true) {
    var e = _e;
    var m = _m;
    if (m) {
      _e = /* More */[
        m[1],
        m[2],
        m[3],
        e
      ];
      _m = m[0];
      continue ;
      
    } else {
      return e;
    }
  }
}

function compare$4(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2) {
        var c = caml_string_compare(e1[0], e2[0]);
        if (c !== 0) {
          return c;
        } else {
          var c$1 = _2(cmp, e1[1], e2[1]);
          if (c$1 !== 0) {
            return c$1;
          } else {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
            
          }
        }
      } else {
        return 1;
      }
    } else if (e2) {
      return -1;
    } else {
      return 0;
    }
  }
}

function equal(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2) {
        if (caml_string_compare(e1[0], e2[0])) {
          return /* false */0;
        } else if (_2(cmp, e1[1], e2[1])) {
          _e2 = cons_enum(e2[2], e2[3]);
          _e1 = cons_enum(e1[2], e1[3]);
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        return /* false */0;
      }
    } else if (e2) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  }
}

function cardinal(param) {
  if (param) {
    return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
  } else {
    return 0;
  }
}

function bindings_aux(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[0];
      _accu = /* :: */[
        /* tuple */[
          param[1],
          param[2]
        ],
        bindings_aux(accu, param[3])
      ];
      continue ;
      
    } else {
      return accu;
    }
  }
}

function bindings(s) {
  return bindings_aux(/* [] */0, s);
}

var ObjectDict = [
  /* Empty */0,
  is_empty,
  mem$1,
  add$3,
  singleton,
  remove$1,
  merge$1,
  compare$4,
  equal,
  iter$5,
  fold,
  for_all$1,
  exists$1,
  filter$1,
  partition$1,
  cardinal,
  bindings,
  min_binding,
  max_binding,
  min_binding,
  split$1,
  find$1,
  map$7,
  mapi$4
];

var ParseFail = create("Tea_json.Decoder.ParseFail");

var string = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        return /* Error */__(1, ["Non-string value"]);
      } else if (match.tag) {
        return /* Error */__(1, ["Non-string value"]);
      } else {
        return /* Ok */__(0, [match[0]]);
      }
    })];

var $$int = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        return /* Error */__(1, ["Non-int value"]);
      } else if (match.tag === 1) {
        var n = match[0];
        if (n > min_int && n < max_int) {
          return /* Ok */__(0, [n | 0]);
        } else {
          return /* Error */__(1, ["number out of int range"]);
        }
      } else {
        return /* Error */__(1, ["Non-int value"]);
      }
    })];

var $$float = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        return /* Error */__(1, ["Non-float-value"]);
      } else if (match.tag === 1) {
        return /* Ok */__(0, [match[0]]);
      } else {
        return /* Error */__(1, ["Non-float-value"]);
      }
    })];

var bool = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        switch (match) {
          case 0 : 
              return /* Ok */__(0, [/* false */0]);
          case 1 : 
              return /* Ok */__(0, [/* true */1]);
          case 2 : 
              return /* Error */__(1, ["Non-boolean value"]);
          
        }
      } else {
        return /* Error */__(1, ["Non-boolean value"]);
      }
    })];

function $$null(v) {
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                if (match >= 2) {
                  return /* Ok */__(0, [v]);
                } else {
                  return /* Error */__(1, ["Non-null value"]);
                }
              } else {
                return /* Error */__(1, ["Non-null value"]);
              }
            })];
}

function list(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-list value"]);
              } else if (match.tag === 3) {
                var parse = function (v) {
                  var match = _1(decoder, v);
                  if (match.tag) {
                    throw [
                          ParseFail,
                          match[0]
                        ];
                  } else {
                    return match[0];
                  }
                };
                try {
                  return /* Ok */__(0, [map(parse, to_list(match[0]))]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["list -> " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-list value"]);
              }
            })];
}

function array(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-array value"]);
              } else if (match.tag === 3) {
                var parse = function (v) {
                  var match = _1(decoder, v);
                  if (match.tag) {
                    throw [
                          ParseFail,
                          match[0]
                        ];
                  } else {
                    return match[0];
                  }
                };
                try {
                  return /* Ok */__(0, [map$3(parse, match[0])]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["array -> " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-array value"]);
              }
            })];
}

function keyValuePairs(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-keyValuePair value"]);
              } else if (match.tag === 2) {
                var o = match[0];
                var keys = Object.keys(o);
                var parse = function (k, l) {
                  var match = o[k];
                  if (match !== undefined) {
                    var match$1 = _1(decoder, match);
                    if (match$1.tag) {
                      throw [
                            ParseFail,
                            match$1[0]
                          ];
                    } else {
                      return /* :: */[
                              /* tuple */[
                                k,
                                match$1[0]
                              ],
                              l
                            ];
                    }
                  } else {
                    throw [
                          ParseFail,
                          "Key is undefined: " + k
                        ];
                  }
                };
                try {
                  return /* Ok */__(0, [fold_right$2(parse, keys, /* [] */0)]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["Invalid keyValuePair parsing: " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-keyValuePair value"]);
              }
            })];
}

function dict(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-dict value"]);
              } else if (match.tag === 2) {
                var o = match[0];
                var keys = Object.keys(o);
                var parse = function (k, d) {
                  var match = o[k];
                  if (match !== undefined) {
                    var match$1 = _1(decoder, match);
                    if (match$1.tag) {
                      throw [
                            ParseFail,
                            match$1[0]
                          ];
                    } else {
                      return add$3(k, match$1[0], d);
                    }
                  } else {
                    throw [
                          ParseFail,
                          "Key is undefined: " + k
                        ];
                  }
                };
                try {
                  return /* Ok */__(0, [fold_right$2(parse, keys, /* Empty */0)]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["Invalid dict parsing: " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-dict value"]);
              }
            })];
}

function field(key, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-fieldable value"]);
              } else if (match.tag === 2) {
                var match$1 = match[0][key];
                if (match$1 !== undefined) {
                  var o = _1(decoder, match$1);
                  if (o.tag) {
                    return /* Error */__(1, ["field `" + (key + ("` -> " + o[0]))]);
                  } else {
                    return o;
                  }
                } else {
                  return /* Error */__(1, ["Field Value is undefined: " + key]);
                }
              } else {
                return /* Error */__(1, ["Non-fieldable value"]);
              }
            })];
}

function at(fields, dec) {
  return fold_right$1(field, fields, dec);
}

function index$2(idx, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-array value"]);
              } else if (match.tag === 3) {
                var a = match[0];
                if (idx < 0 || idx > a.length) {
                  return /* Error */__(1, ["Array index out of range: " + idx]);
                } else {
                  return _1(decoder, caml_array_get(a, idx));
                }
              } else {
                return /* Error */__(1, ["Non-array value"]);
              }
            })];
}

function maybe$1(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder, value);
              if (match.tag) {
                return /* Ok */__(0, [/* None */0]);
              } else {
                return /* Ok */__(0, [/* Some */[match[0]]]);
              }
            })];
}

function oneOf(decoders) {
  return /* Decoder */[(function (value) {
              var parse = function (v, _param) {
                while(true) {
                  var param = _param;
                  if (param) {
                    var rest = param[1];
                    try {
                      var ok$$1 = _1(param[0][0], v);
                      if (ok$$1.tag) {
                        return parse(v, rest);
                      } else {
                        return ok$$1;
                      }
                    }
                    catch (exn){
                      _param = rest;
                      continue ;
                      
                    }
                  } else {
                    return /* Error */__(1, ["No one-of's matched"]);
                  }
                }
              };
              return parse(value, decoders);
            })];
}

function map$1$1(mapper, param) {
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              if (match.tag) {
                return /* Error */__(1, ["map " + match[0]]);
              } else {
                return /* Ok */__(0, [_1(mapper, match[0])]);
              }
            })];
}

function map2$1(mapper, param, param$1) {
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_2(mapper, match[0], match$1[0])]);
              }
              if (exit$$1 === 1) {
                var match$2 = error_of_first(match, match$1);
                if (match$2) {
                  return /* Error */__(1, ["map2 -> " + match$2[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map3(mapper, param, param$1, param$2) {
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_3(mapper, match[0], match$1[0], match$2[0])]);
              }
              if (exit$$1 === 1) {
                var match$3 = first(match$2, first(match$1, match));
                if (match$3.tag) {
                  return /* Error */__(1, ["map3 -> " + match$3[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map4(mapper, param, param$1, param$2, param$3) {
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_4(mapper, match[0], match$1[0], match$2[0], match$3[0])]);
              }
              if (exit$$1 === 1) {
                var match$4 = first(match$3, first(match$2, first(match$1, match)));
                if (match$4.tag) {
                  return /* Error */__(1, ["map4 -> " + match$4[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map5(mapper, param, param$1, param$2, param$3, param$4) {
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_5(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0])]);
              }
              if (exit$$1 === 1) {
                var match$5 = first(match$4, first(match$3, first(match$2, first(match$1, match))));
                if (match$5.tag) {
                  return /* Error */__(1, ["map5 -> " + match$5[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map6(mapper, param, param$1, param$2, param$3, param$4, param$5) {
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else if (match$5.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_6(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0])]);
              }
              if (exit$$1 === 1) {
                var match$6 = first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))));
                if (match$6.tag) {
                  return /* Error */__(1, ["map6 -> " + match$6[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map7(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6) {
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var match$6 = _1(decoder7, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else if (match$5.tag) {
                exit$$1 = 1;
              } else if (match$6.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_7(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0])]);
              }
              if (exit$$1 === 1) {
                var match$7 = first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match))))));
                if (match$7.tag) {
                  return /* Error */__(1, ["map7 -> " + match$7[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map8(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7) {
  var decoder8 = param$7[0];
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var match$6 = _1(decoder7, value);
              var match$7 = _1(decoder8, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else if (match$5.tag) {
                exit$$1 = 1;
              } else if (match$6.tag) {
                exit$$1 = 1;
              } else if (match$7.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_8(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0], match$7[0])]);
              }
              if (exit$$1 === 1) {
                var match$8 = first(match$7, first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))))));
                if (match$8.tag) {
                  return /* Error */__(1, ["map8 -> " + match$8[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function succeed(v) {
  return /* Decoder */[(function () {
              return /* Ok */__(0, [v]);
            })];
}

function fail(e) {
  return /* Decoder */[(function () {
              return /* Error */__(1, [e]);
            })];
}

var value$1 = /* Decoder */[(function (value) {
      return /* Ok */__(0, [value]);
    })];

function andThen(func, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var err = _1(decoder, value);
              if (err.tag) {
                return err;
              } else {
                var match = _1(func, err[0]);
                return _1(match[0], value);
              }
            })];
}

function lazy_(func) {
  return andThen(func, /* Decoder */[(function () {
                  return /* Ok */__(0, [/* () */0]);
                })]);
}

function nullable(decoder) {
  return oneOf(/* :: */[
              $$null(/* None */0),
              /* :: */[
                map$1$1((function (v) {
                        return /* Some */[v];
                      }), decoder),
                /* [] */0
              ]
            ]);
}

function decodeValue(param, value) {
  try {
    return _1(param[0], value);
  }
  catch (raw_exn){
    var exn = internalToOCamlException(raw_exn);
    if (exn[0] === ParseFail) {
      return /* Error */__(1, [exn[1]]);
    } else {
      return /* Error */__(1, ["Unknown JSON parsing error"]);
    }
  }
}

function decodeEvent(param, value) {
  try {
    return _1(param[0], value);
  }
  catch (raw_exn){
    var exn = internalToOCamlException(raw_exn);
    if (exn[0] === ParseFail) {
      return /* Error */__(1, [exn[1]]);
    } else {
      return /* Error */__(1, ["Unknown JSON parsing error"]);
    }
  }
}

function decodeString(decoder, string) {
  try {
    var value = JSON.parse(string);
    return decodeValue(decoder, value);
  }
  catch (exn){
    return /* Error */__(1, ["Invalid JSON string"]);
  }
}

var Decoder = /* module */[
  /* ObjectDict */ObjectDict,
  /* ParseFail */ParseFail,
  /* string */string,
  /* int */$$int,
  /* float */$$float,
  /* bool */bool,
  /* null */$$null,
  /* list */list,
  /* array */array,
  /* keyValuePairs */keyValuePairs,
  /* dict */dict,
  /* field */field,
  /* at */at,
  /* index */index$2,
  /* maybe */maybe$1,
  /* oneOf */oneOf,
  /* map */map$1$1,
  /* map2 */map2$1,
  /* map3 */map3,
  /* map4 */map4,
  /* map5 */map5,
  /* map6 */map6,
  /* map7 */map7,
  /* map8 */map8,
  /* succeed */succeed,
  /* fail */fail,
  /* value */value$1,
  /* andThen */andThen,
  /* lazy_ */lazy_,
  /* nullable */nullable,
  /* decodeValue */decodeValue,
  /* decodeEvent */decodeEvent,
  /* decodeString */decodeString
];


/* Web_json Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var position = Decoder[/* map2 */17]((function (x, y) {
        return /* record */[
                /* x */x,
                /* y */y
              ];
      }), Decoder[/* field */11]("pageX", Decoder[/* int */3]), Decoder[/* field */11]("pageY", Decoder[/* int */3]));

function registerGlobal(name, key, tagger) {
  var enableCall = function (callbacks_base) {
    var callbacks = [callbacks_base];
    var fn = function (ev) {
      var match = Decoder[/* decodeEvent */31](position, ev);
      if (match.tag) {
        return /* None */0;
      } else {
        return /* Some */[_1(tagger, match[0])];
      }
    };
    var handler = /* EventHandlerCallback */__(0, [
        key,
        fn
      ]);
    var elem = document;
    var cache = eventHandler_Register(callbacks, elem, name, handler);
    return (function () {
        eventHandler_Unregister(elem, name, cache);
        return /* () */0;
      });
  };
  return registration(key, enableCall);
}

function moves($staropt$star, tagger) {
  var key = $staropt$star ? $staropt$star[0] : "";
  return registerGlobal("mousemove", key, tagger);
}

function ups($staropt$star, tagger) {
  var key = $staropt$star ? $staropt$star[0] : "";
  return registerGlobal("mouseup", key, tagger);
}


/* position Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function init$4() {
  return /* record */[
          /* orientation : White */1,
          /* status : Nothing */0
        ];
}

function cartesian_decoder(field_x, field_y) {
  return Decoder[/* map2 */17]((function (x, y) {
                return /* record */[
                        /* x */x,
                        /* y */y
                      ];
              }), Decoder[/* field */11](field_x, Decoder[/* int */3]), Decoder[/* field */11](field_y, Decoder[/* int */3]));
}

var partial_arg$1$1 = cartesian_decoder("pageX", "pageY");

var size = Decoder[/* field */11]("clientWidth", Decoder[/* int */3]);

var partial_arg$2$1 = Decoder[/* map3 */18]((function (a$$1, b, c) {
        return /* tuple */[
                a$$1,
                b,
                c
              ];
      }), cartesian_decoder("offsetX", "offsetY"), cartesian_decoder("pageX", "pageY"), Decoder[/* field */11]("target", size));

var partial_arg$3 = Decoder[/* decodeEvent */31];

function offset_page_size(param) {
  return partial_arg$3(partial_arg$2$1, param);
}

function handler(decoder, msg$$1, $$event) {
  var result = _1(decoder, $$event);
  if (result.tag) {
    return /* None */0;
  } else {
    return /* Some */[_1(msg$$1, result[0])];
  }
}

function target(orientation, drag) {
  var x$prime = (drag[/* coordinates */6][/* x */0] - drag[/* initial */4][/* x */0] | 0) + drag[/* offset */5][/* x */0] | 0;
  var y$prime = (drag[/* coordinates */6][/* y */1] - drag[/* initial */4][/* y */1] | 0) + drag[/* offset */5][/* y */1] | 0;
  var x = x$prime < 0 ? x$prime - drag[/* size */7] | 0 : x$prime;
  var y = y$prime < 0 ? y$prime - drag[/* size */7] | 0 : y$prime;
  var match = drag[/* source */1];
  var ii = match[1];
  var i = match[0];
  var match$1 = orientation !== 0 ? /* tuple */[
      i + div(x, drag[/* size */7]) | 0,
      ii - div(y, drag[/* size */7]) | 0
    ] : /* tuple */[
      i - div(x, drag[/* size */7]) | 0,
      ii + div(y, drag[/* size */7]) | 0
    ];
  var ii$prime = match$1[1];
  var i$prime = match$1[0];
  if (i$prime >= 0 && i$prime <= 7 && ii$prime >= 0 && ii$prime <= 7) {
    return /* Some */[/* tuple */[
              i$prime,
              ii$prime
            ]];
  } else {
    return /* None */0;
  }
}

function adjust_coordinates(orientation, coordinates, drag) {
  var newrecord = drag.slice();
  newrecord[/* target */2] = target(orientation, drag);
  newrecord[/* coordinates */6] = coordinates;
  return newrecord;
}

function update$1(model, param) {
  if (param.tag) {
    return /* tuple */[
            model,
            none
          ];
  } else {
    var msg$$1 = param[0];
    var match = model[/* status */1];
    if (typeof msg$$1 === "number") {
      if (msg$$1) {
        return /* tuple */[
                /* record */[
                  /* orientation */model[/* orientation */0],
                  /* status : Nothing */0
                ],
                none
              ];
      } else {
        var orientation$prime = opposite_color(model[/* orientation */0]);
        return /* tuple */[
                /* record */[
                  /* orientation */orientation$prime,
                  /* status */model[/* status */1]
                ],
                none
              ];
      }
    } else {
      switch (msg$$1.tag | 0) {
        case 0 : 
            return /* tuple */[
                    /* record */[
                      /* orientation */model[/* orientation */0],
                      /* status : Dragging */__(0, [msg$$1[0]])
                    ],
                    none
                  ];
        case 1 : 
            if (typeof match === "number") {
              return /* tuple */[
                      model,
                      none
                    ];
            } else if (match.tag) {
              return /* tuple */[
                      model,
                      none
                    ];
            } else {
              return /* tuple */[
                      /* record */[
                        /* orientation */model[/* orientation */0],
                        /* status : Dragging */__(0, [adjust_coordinates(model[/* orientation */0], msg$$1[0], match[0])])
                      ],
                      none
                    ];
            }
            break;
        case 2 : 
            if (typeof match === "number") {
              return /* tuple */[
                      model,
                      none
                    ];
            } else if (match.tag) {
              return /* tuple */[
                      model,
                      none
                    ];
            } else {
              var drag = match[0];
              var match$1 = drag[/* target */2];
              if (match$1) {
                var target = match$1[0];
                try {
                  var match$2 = assoc(target, drag[/* legal_targets */3]);
                  if (match$2) {
                    return /* tuple */[
                            /* record */[
                              /* orientation */model[/* orientation */0],
                              /* status : Nothing */0
                            ],
                            msg(/* Move */__(1, [match$2[0]]))
                          ];
                  } else {
                    return /* tuple */[
                            /* record */[
                              /* orientation */model[/* orientation */0],
                              /* status : Promoting */__(1, [/* record */[
                                    /* turn */drag[/* turn */0],
                                    /* source_file */drag[/* source */1][0],
                                    /* target_file */target[0],
                                    /* size */drag[/* size */7]
                                  ]])
                            ],
                            none
                          ];
                  }
                }
                catch (exn){
                  if (exn === not_found) {
                    return /* tuple */[
                            /* record */[
                              /* orientation */model[/* orientation */0],
                              /* status : Nothing */0
                            ],
                            none
                          ];
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* tuple */[
                        /* record */[
                          /* orientation */model[/* orientation */0],
                          /* status : Nothing */0
                        ],
                        none
                      ];
              }
            }
            break;
        case 3 : 
            if (typeof match === "number") {
              return /* tuple */[
                      model,
                      none
                    ];
            } else if (match.tag) {
              var promoting = match[0];
              var move_000 = msg$$1[0];
              var move_001 = promoting[/* source_file */1];
              var move_002 = promoting[/* target_file */2];
              var move = /* Promotion */__(1, [
                  move_000,
                  move_001,
                  move_002
                ]);
              return /* tuple */[
                      /* record */[
                        /* orientation */model[/* orientation */0],
                        /* status : Nothing */0
                      ],
                      msg(/* Move */__(1, [move]))
                    ];
            } else {
              return /* tuple */[
                      model,
                      none
                    ];
            }
            break;
        
      }
    }
  }
}

function filter_targets(source, moves$$1) {
  return map((function (param) {
                return /* tuple */[
                        param[1],
                        param[2]
                      ];
              }), filter((function (param) {
                      return caml_equal(param[0], source);
                    }))(moves$$1));
}

function coordinate_pairs(turn, move) {
  var home_rank = function (param) {
    if (param !== 0) {
      return 0;
    } else {
      return 7;
    }
  };
  if (typeof move === "number") {
    if (move) {
      return /* tuple */[
              /* tuple */[
                4,
                home_rank(turn)
              ],
              /* tuple */[
                2,
                home_rank(turn)
              ],
              /* Completed_move */[/* Queenside_castle */1]
            ];
    } else {
      return /* tuple */[
              /* tuple */[
                4,
                home_rank(turn)
              ],
              /* tuple */[
                6,
                home_rank(turn)
              ],
              /* Completed_move */[/* Kingside_castle */0]
            ];
    }
  } else if (move.tag) {
    var promotion_rank = function (param) {
      if (param !== 0) {
        return 7;
      } else {
        return 0;
      }
    };
    var pre_promotion_rank = function (param) {
      if (param !== 0) {
        return 6;
      } else {
        return 1;
      }
    };
    return /* tuple */[
            /* tuple */[
              move[1],
              pre_promotion_rank(turn)
            ],
            /* tuple */[
              move[2],
              promotion_rank(turn)
            ],
            /* Pawn_will_promote */0
          ];
  } else {
    var t_rank = move[3];
    var t_file = move[2];
    var s_rank = move[1];
    var s_file = move[0];
    return /* tuple */[
            /* tuple */[
              s_file,
              s_rank
            ],
            /* tuple */[
              t_file,
              t_rank
            ],
            /* Completed_move */[/* Move */__(0, [
                  s_file,
                  s_rank,
                  t_file,
                  t_rank
                ])]
          ];
  }
}

var buttons_view_000 = button(/* None */0, /* None */0, /* :: */[
      onClick(/* Internal_msg */__(0, [/* Flip */0])),
      /* [] */0
    ], /* :: */[
      text$1("flip board"),
      /* [] */0
    ]);

var buttons_view$1 = /* :: */[
  buttons_view_000,
  /* [] */0
];

function board_view(interactable, pos_ar, model) {
  var move_start;
  if (interactable) {
    var legal_moves$$1 = interactable[1];
    var turn = interactable[0];
    move_start = /* Some */[/* tuple */[
        (function (file, rank, param) {
            var coordinates = param[1];
            return /* Internal_msg */__(0, [/* Move_start */__(0, [/* record */[
                            /* turn */turn,
                            /* source : tuple */[
                              file,
                              rank
                            ],
                            /* target : None */0,
                            /* legal_targets */filter_targets(/* tuple */[
                                  file,
                                  rank
                                ], map((function (param) {
                                        return coordinate_pairs(turn, param);
                                      }), legal_moves$$1)),
                            /* initial */coordinates,
                            /* offset */param[0],
                            /* coordinates */coordinates,
                            /* size */param[2]
                          ]])]);
          }),
        turn
      ]];
  } else {
    move_start = /* None */0;
  }
  var match = model[/* orientation */0];
  var match$1 = match !== 0 ? /* tuple */[
      /* :: */[
        0,
        /* :: */[
          1,
          /* :: */[
            2,
            /* :: */[
              3,
              /* :: */[
                4,
                /* :: */[
                  5,
                  /* :: */[
                    6,
                    /* :: */[
                      7,
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ],
      /* :: */[
        7,
        /* :: */[
          6,
          /* :: */[
            5,
            /* :: */[
              4,
              /* :: */[
                3,
                /* :: */[
                  2,
                  /* :: */[
                    1,
                    /* :: */[
                      0,
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ] : /* tuple */[
      /* :: */[
        7,
        /* :: */[
          6,
          /* :: */[
            5,
            /* :: */[
              4,
              /* :: */[
                3,
                /* :: */[
                  2,
                  /* :: */[
                    1,
                    /* :: */[
                      0,
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ],
      /* :: */[
        0,
        /* :: */[
          1,
          /* :: */[
            2,
            /* :: */[
              3,
              /* :: */[
                4,
                /* :: */[
                  5,
                  /* :: */[
                    6,
                    /* :: */[
                      7,
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ];
  var files = match$1[0];
  var rank_view = function (rank) {
    return node$1(/* None */0, "cb-row", /* None */0, /* None */0, /* [] */0, map((function (param) {
                      var rank$1 = rank;
                      var file = param;
                      var target_highlight = function (drag, target) {
                        var match = drag[/* target */2];
                        if (match && caml_equal(match[0], target)) {
                          return /* true */1;
                        } else {
                          return /* false */0;
                        }
                      };
                      var legal_highlight = function (drag, target) {
                        return exists((function (param) {
                                      return caml_equal(param[0], target);
                                    }), drag[/* legal_targets */3]);
                      };
                      var match = model[/* status */1];
                      var tmp;
                      if (typeof match === "number") {
                        tmp = noProp$1;
                      } else if (match.tag) {
                        tmp = noProp$1;
                      } else {
                        var drag = match[0];
                        tmp = classList(/* :: */[
                              /* tuple */[
                                "destination",
                                legal_highlight(drag, /* tuple */[
                                      file,
                                      rank$1
                                    ])
                              ],
                              /* :: */[
                                /* tuple */[
                                  "hovering",
                                  target_highlight(drag, /* tuple */[
                                        file,
                                        rank$1
                                      ])
                                ],
                                /* [] */0
                              ]
                            ]);
                      }
                      var match$1 = caml_array_get(caml_array_get(pos_ar, file), rank$1);
                      var tmp$1;
                      if (match$1) {
                        var match$2 = match$1[0];
                        var color = match$2[1];
                        var listener;
                        if (move_start) {
                          var match$3 = move_start[0];
                          if (color === match$3[1]) {
                            var partial_arg = _2(match$3[0], file, rank$1);
                            listener = onCB$1("mousedown", "", (function (param) {
                                    return handler(offset_page_size, partial_arg, param);
                                  }));
                          } else {
                            listener = noProp$1;
                          }
                        } else {
                          listener = noProp$1;
                        }
                        var match$4 = model[/* status */1];
                        var styles;
                        if (typeof match$4 === "number") {
                          styles = noProp$1;
                        } else if (match$4.tag) {
                          styles = noProp$1;
                        } else {
                          var drag$1 = match$4[0];
                          styles = caml_equal(/* tuple */[
                                file,
                                rank$1
                              ], drag$1[/* source */1]) ? styles$1(/* :: */[
                                  /* tuple */[
                                    "z-index",
                                    "9"
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "transform",
                                      _2(sprintf(/* Format */[
                                                /* String_literal */__(11, [
                                                    "translate(",
                                                    /* Int */__(4, [
                                                        /* Int_d */0,
                                                        /* No_padding */0,
                                                        /* No_precision */0,
                                                        /* String_literal */__(11, [
                                                            "px,",
                                                            /* Int */__(4, [
                                                                /* Int_d */0,
                                                                /* No_padding */0,
                                                                /* No_precision */0,
                                                                /* String_literal */__(11, [
                                                                    "px)",
                                                                    /* End_of_format */0
                                                                  ])
                                                              ])
                                                          ])
                                                      ])
                                                  ]),
                                                "translate(%dpx,%dpx)"
                                              ]), ((drag$1[/* offset */5][/* x */0] - (drag$1[/* size */7] / 2 | 0) | 0) + drag$1[/* coordinates */6][/* x */0] | 0) - drag$1[/* initial */4][/* x */0] | 0, ((drag$1[/* offset */5][/* y */1] - (drag$1[/* size */7] / 2 | 0) | 0) + drag$1[/* coordinates */6][/* y */1] | 0) - drag$1[/* initial */4][/* y */1] | 0)
                                    ],
                                    /* [] */0
                                  ]
                                ]) : noProp$1;
                        }
                        tmp$1 = node$1(/* None */0, "cb-piece", /* None */0, /* None */0, /* :: */[
                              listener,
                              /* :: */[
                                styles,
                                /* :: */[
                                  classList(/* :: */[
                                        /* tuple */[
                                          string_of_color(color),
                                          /* true */1
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            string_of_piece_type(match$2[0]),
                                            /* true */1
                                          ],
                                          /* [] */0
                                        ]
                                      ]),
                                  /* [] */0
                                ]
                              ]
                            ], /* [] */0);
                      } else {
                        tmp$1 = noNode$1;
                      }
                      return node$1(/* None */0, "cb-square", /* None */0, /* None */0, /* :: */[
                                  tmp,
                                  /* [] */0
                                ], /* :: */[
                                  tmp$1,
                                  /* [] */0
                                ]);
                    }), files));
  };
  return node$1(/* None */0, "cb-board", /* None */0, /* None */0, /* [] */0, map(rank_view, match$1[1]));
}

function view$1(interactable, pos_ar, model) {
  var promo_view = function (promoting) {
    var file = promoting[/* target_file */2];
    var match = model[/* orientation */0];
    var match$1 = promoting[/* turn */0];
    var match$2 = match !== 0 ? (
        match$1 !== 0 ? /* tuple */[
            file,
            /* :: */[
              0,
              /* :: */[
                1,
                /* :: */[
                  2,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ] : /* tuple */[
            file,
            /* :: */[
              7,
              /* :: */[
                6,
                /* :: */[
                  5,
                  /* :: */[
                    4,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
      ) : (
        match$1 !== 0 ? /* tuple */[
            7 - file | 0,
            /* :: */[
              7,
              /* :: */[
                6,
                /* :: */[
                  5,
                  /* :: */[
                    4,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ] : /* tuple */[
            7 - file | 0,
            /* :: */[
              0,
              /* :: */[
                1,
                /* :: */[
                  2,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
      );
    var left = match$2[0];
    return node$1(/* None */0, "cb-promo", /* None */0, /* None */0, /* :: */[
                onClick(/* Internal_msg */__(0, [/* Promotion_canceled */1])),
                /* [] */0
              ], map((function (param) {
                      var piece_type = param[1];
                      return node$1(/* None */0, "cb-square", /* None */0, /* None */0, /* :: */[
                                  styles$1(/* :: */[
                                        /* tuple */[
                                          "left",
                                          _1(sprintf(/* Format */[
                                                    /* Int */__(4, [
                                                        /* Int_d */0,
                                                        /* No_padding */0,
                                                        /* No_precision */0,
                                                        /* String_literal */__(11, [
                                                            "px",
                                                            /* End_of_format */0
                                                          ])
                                                      ]),
                                                    "%dpx"
                                                  ]), imul(left, promoting[/* size */3]))
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "top",
                                            _1(sprintf(/* Format */[
                                                      /* Int */__(4, [
                                                          /* Int_d */0,
                                                          /* No_padding */0,
                                                          /* No_precision */0,
                                                          /* String_literal */__(11, [
                                                              "px",
                                                              /* End_of_format */0
                                                            ])
                                                        ]),
                                                      "%dpx"
                                                    ]), imul(param[0], promoting[/* size */3]))
                                          ],
                                          /* [] */0
                                        ]
                                      ]),
                                  /* [] */0
                                ], /* :: */[
                                  node$1(/* None */0, "cb-piece", /* None */0, /* None */0, /* :: */[
                                        onClick(/* Internal_msg */__(0, [/* Piece_promoted */__(3, [piece_type])])),
                                        /* :: */[
                                          classList(/* :: */[
                                                /* tuple */[
                                                  string_of_color(promoting[/* turn */0]),
                                                  /* true */1
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    string_of_piece_type(piece_type),
                                                    /* true */1
                                                  ],
                                                  /* [] */0
                                                ]
                                              ]),
                                          /* [] */0
                                        ]
                                      ], /* [] */0),
                                  /* [] */0
                                ]);
                    }), combine(match$2[1], /* :: */[
                        /* Queen */1,
                        /* :: */[
                          /* Knight */4,
                          /* :: */[
                            /* Rook */2,
                            /* :: */[
                              /* Bishop */3,
                              /* [] */0
                            ]
                          ]
                        ]
                      ])));
  };
  var match = model[/* status */1];
  var tmp;
  tmp = typeof match === "number" || !match.tag ? noNode$1 : promo_view(match[0]);
  return node$1(/* None */0, "cb-wrap", /* None */0, /* None */0, /* [] */0, /* :: */[
              tmp,
              /* :: */[
                board_view(interactable, pos_ar, model),
                /* [] */0
              ]
            ]);
}

function subscriptions$1(model) {
  var match = model[/* status */1];
  if (typeof match === "number" || match.tag) {
    return none$1;
  } else {
    return batch$1(/* :: */[
                moves(/* None */0, (function (x) {
                        return /* Internal_msg */__(0, [/* Move_drag */__(1, [x])]);
                      })),
                /* :: */[
                  ups(/* None */0, (function (x) {
                          return /* Internal_msg */__(0, [/* Move_drop */__(2, [x])]);
                        })),
                  /* [] */0
                ]
              ]);
  }
}


/* partial_arg Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var End_of_list = create("Zipper.End_of_list");

var Beginning_of_list = create("Zipper.Beginning_of_list");

function fwd(param) {
  var future = param[1];
  if (future) {
    var hd = future[0];
    return /* tuple */[
            hd,
            /* tuple */[
              /* :: */[
                hd,
                param[0]
              ],
              future[1]
            ]
          ];
  } else {
    throw End_of_list;
  }
}

function back(param) {
  var past = param[0];
  if (past) {
    return /* tuple */[
            past[1],
            /* :: */[
              past[0],
              param[1]
            ]
          ];
  } else {
    throw Beginning_of_list;
  }
}

function fwd$prime(item, param) {
  var future = param[1];
  var past = param[0];
  if (future) {
    var hd = future[0];
    if (caml_equal(hd, item)) {
      return /* tuple */[
              /* :: */[
                hd,
                past
              ],
              future[1]
            ];
    } else {
      return /* tuple */[
              /* :: */[
                item,
                past
              ],
              /* [] */0
            ];
    }
  } else {
    return /* tuple */[
            /* :: */[
              item,
              past
            ],
            /* [] */0
          ];
  }
}

function init$5() {
  return /* tuple */[
          /* [] */0,
          /* [] */0
        ];
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function polyfills() {
  ((
  // remove polyfill
  (function() {
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  }())
  ));
  ((
  // requestAnimationFrame polyfill
  (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                     || window[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          };

      if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          };
  }())
  ));
  return /* () */0;
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function programStateWrapper(initModel, pump, shutdown) {
  var model = [initModel];
  var callbacks = [/* record */[/* enqueue */(function () {
          console.log("INVALID enqueue CALL!");
          return /* () */0;
        })]];
  var pumperInterface = _1(pump, callbacks);
  var pending = [/* None */0];
  var handler = function (msg$$1) {
    var match = pending[0];
    if (match) {
      pending[0] = /* Some */[/* :: */[
          msg$$1,
          match[0]
        ]];
      return /* () */0;
    } else {
      pending[0] = /* Some */[/* [] */0];
      var newModel = _2(pumperInterface[/* handleMsg */2], model[0], msg$$1);
      model[0] = newModel;
      var match$1 = pending[0];
      if (match$1) {
        var msgs = match$1[0];
        if (msgs) {
          pending[0] = /* None */0;
          return iter(handler, rev(msgs));
        } else {
          pending[0] = /* None */0;
          return /* () */0;
        }
      } else {
        throw [
              failure,
              "INVALID message queue state, should never be None during message processing!"
            ];
      }
    }
  };
  var finalizedCBs = /* record */[/* enqueue */handler];
  callbacks[0] = finalizedCBs;
  var pi_requestShutdown = function () {
    callbacks[0] = /* record */[/* enqueue */(function () {
          console.log("INVALID message enqueued when shut down");
          return /* () */0;
        })];
    var cmd = _1(shutdown, model[0]);
    _1(pumperInterface[/* shutdown */3], cmd);
    return /* () */0;
  };
  var render_string = function () {
    return _1(pumperInterface[/* render_string */1], model[0]);
  };
  _1(pumperInterface[/* startup */0], /* () */0);
  return {
          pushMsg: handler,
          shutdown: pi_requestShutdown,
          getHtmlString: render_string
        };
}

function programLoop(update, view, subscriptions, initModel, initCmd, param) {
  if (param) {
    var parentNode = param[0];
    return (function (callbacks) {
        var priorRenderedVdom = [/* [] */0];
        var latestModel = [initModel];
        var nextFrameID = [/* None */0];
        var doRender = function () {
          var match = nextFrameID[0];
          if (match) {
            var newVdom_000 = _1(view, latestModel[0]);
            var newVdom = /* :: */[
              newVdom_000,
              /* [] */0
            ];
            var justRenderedVdom = patchVNodesIntoElement(callbacks, parentNode, priorRenderedVdom[0], newVdom);
            priorRenderedVdom[0] = justRenderedVdom;
            nextFrameID[0] = /* None */0;
            return /* () */0;
          } else {
            return /* () */0;
          }
        };
        var scheduleRender = function () {
          var match = nextFrameID[0];
          if (match) {
            return /* () */0;
          } else {
            nextFrameID[0] = /* Some */[-1];
            return doRender(16);
          }
        };
        var clearPnode = function () {
          while(parentNode.childNodes.length > 0) {
            var match = parentNode.firstChild;
            if (match !== null) {
              parentNode.removeChild(match);
            }
            
          }
          return /* () */0;
        };
        var oldSub = [/* NoSub */0];
        var handleSubscriptionChange = function (model) {
          var newSub = _1(subscriptions, model);
          oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
          return /* () */0;
        };
        var handlerStartup = function () {
          clearPnode(/* () */0);
          run(callbacks, initCmd);
          handleSubscriptionChange(latestModel[0]);
          nextFrameID[0] = /* Some */[-1];
          doRender(16);
          return /* () */0;
        };
        var render_string = function (model) {
          return renderToHtmlString(_1(view, model));
        };
        var handler = function (model, msg$$1) {
          var match = _2(update, model, msg$$1);
          var newModel = match[0];
          latestModel[0] = newModel;
          run(callbacks, match[1]);
          scheduleRender(/* () */0);
          handleSubscriptionChange(newModel);
          return newModel;
        };
        var handlerShutdown = function (cmd) {
          nextFrameID[0] = /* None */0;
          run(callbacks, cmd);
          oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
          priorRenderedVdom[0] = /* [] */0;
          clearPnode(/* () */0);
          return /* () */0;
        };
        return /* record */[
                /* startup */handlerStartup,
                /* render_string */render_string,
                /* handleMsg */handler,
                /* shutdown */handlerShutdown
              ];
      });
  } else {
    return (function (callbacks) {
        var oldSub = [/* NoSub */0];
        var handleSubscriptionChange = function (model) {
          var newSub = _1(subscriptions, model);
          oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
          return /* () */0;
        };
        return /* record */[
                /* startup */(function () {
                    run(callbacks, initCmd);
                    handleSubscriptionChange(initModel);
                    return /* () */0;
                  }),
                /* render_string */(function (model) {
                    return renderToHtmlString(_1(view, model));
                  }),
                /* handleMsg */(function (model, msg$$1) {
                    var match = _2(update, model, msg$$1);
                    var newModel = match[0];
                    run(callbacks, match[1]);
                    handleSubscriptionChange(newModel);
                    return newModel;
                  }),
                /* shutdown */(function (cmd) {
                    run(callbacks, cmd);
                    oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
                    return /* () */0;
                  })
              ];
      });
  }
}

function program(param, pnode, flags) {
  polyfills(/* () */0);
  var match = _1(param[/* init */0], flags);
  var initModel = match[0];
  var opnode = (pnode == null) ? /* None */0 : [pnode];
  var pumpInterface = programLoop(param[/* update */1], param[/* view */2], param[/* subscriptions */3], initModel, match[1], opnode);
  return programStateWrapper(initModel, pumpInterface, param[/* shutdown */4]);
}

var map$8 = map$5;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var key_event = Decoder[/* map5 */20]((function (key_code, shift, ctrl, alt, meta) {
        return /* record */[
                /* key_code */key_code,
                /* shift */shift,
                /* ctrl */ctrl,
                /* alt */alt,
                /* meta */meta
              ];
      }), Decoder[/* field */11]("keyCode", Decoder[/* int */3]), Decoder[/* field */11]("shiftKey", Decoder[/* bool */5]), Decoder[/* field */11]("ctrlKey", Decoder[/* bool */5]), Decoder[/* field */11]("altKey", Decoder[/* bool */5]), Decoder[/* field */11]("metaKey", Decoder[/* bool */5]));

function registerGlobal$1(name, key, tagger) {
  var enableCall = function (callbacks_base) {
    var callbacks = [callbacks_base];
    var fn = function (ev) {
      var match = Decoder[/* decodeEvent */31](key_event, ev);
      if (match.tag) {
        return /* None */0;
      } else {
        return /* Some */[_1(tagger, match[0])];
      }
    };
    var handler = /* EventHandlerCallback */__(0, [
        key,
        fn
      ]);
    var elem = document;
    var cache = eventHandler_Register(callbacks, elem, name, handler);
    return (function () {
        eventHandler_Unregister(elem, name, cache);
        return /* () */0;
      });
  };
  return registration(key, enableCall);
}

function downs$1($staropt$star, tagger) {
  var key = $staropt$star ? $staropt$star[0] : "";
  return registerGlobal$1("keydown", key, tagger);
}


/* key_event Not a pure module */

/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function append$2(key, value, f) {
  return f.append(key, value);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function getAllResponseHeaders(x) {
  var match = x.getAllResponseHeaders();
  if (match !== null) {
    if (match === "") {
      return /* Error */__(1, [/* NetworkError */1]);
    } else {
      return /* Ok */__(0, [match]);
    }
  } else {
    return /* Error */__(1, [/* IncompleteResponse */0]);
  }
}

function getAllResponseHeadersAsList(x) {
  var err = getAllResponseHeaders(x);
  if (err.tag) {
    return err;
  } else {
    return /* Ok */__(0, [map((function (param) {
                      if (param.length !== 2) {
                        throw [
                              failure,
                              "Cannot happen, already checked length"
                            ];
                      } else {
                        var key = param[0];
                        var value = param[1];
                        return /* tuple */[
                                key,
                                value
                              ];
                      }
                    }), filter((function (a) {
                            return +(a.length === 2);
                          }))(to_list(map$3((function (param) {
                                  return param.split(": ", 2);
                                }), err[0].split("\r\n")))))]);
  }
}

function getAllResponseHeadersAsDict(x) {
  var height = function (param) {
    if (param) {
      return param[4];
    } else {
      return 0;
    }
  };
  var create = function (l, x, d, r) {
    var hl = height(l);
    var hr = height(r);
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var bal = function (l, x, d, r) {
    var hl = l ? l[4] : 0;
    var hr = r ? r[4] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[3];
        var ld = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, ld, create(lr, x, d, r));
        } else if (lr) {
          return create(create(ll, lv, ld, lr[0]), lr[1], lr[2], create(lr[3], x, d, r));
        } else {
          throw [
                invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[3];
        var rd = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, x, d, rl), rv, rd, rr);
        } else if (rl) {
          return create(create(l, x, d, rl[0]), rl[1], rl[2], create(rl[3], rv, rd, rr));
        } else {
          throw [
                invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              x,
              d,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var add = function (x, data, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = caml_string_compare(x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, data, l), v, d, r);
        } else {
          return bal(l, v, d, add(x, data, r));
        }
      } else {
        return /* Node */[
                l,
                x,
                data,
                r,
                param[4]
              ];
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              data,
              /* Empty */0,
              1
            ];
    }
  };
  var err = getAllResponseHeadersAsList(x);
  if (err.tag) {
    return err;
  } else {
    var insert = function (d, param) {
      return add(param[0], param[1], d);
    };
    return /* Ok */__(0, [fold_left(insert, /* Empty */0, err[0])]);
  }
}

function open_(method$prime, url, $staropt$star, $staropt$star$1, $staropt$star$2, x) {
  var async = $staropt$star ? $staropt$star[0] : /* true */1;
  var user = $staropt$star$1 ? $staropt$star$1[0] : "";
  var password = $staropt$star$2 ? $staropt$star$2[0] : "";
  return x.open(method$prime, url, async, user, password);
}

function send$1(body, x) {
  if (typeof body === "number") {
    if (body) {
      return x.send(null);
    } else {
      return x.send();
    }
  } else {
    switch (body.tag | 0) {
      case 0 : 
          return x.send(body[0]);
      case 1 : 
          return x.send(body[0]);
      case 2 : 
          var form = fold_left((function (f, param) {
                  append$2(param[0], param[1], f);
                  return f;
                }), new FormData(), body[0]);
          return x.send(form);
      case 3 : 
          return x.send(body[0]);
      
    }
  }
}

function setRequestHeader(header, value, x) {
  return x.setRequestHeader(header, value);
}

function set_responseType(typ, x) {
  if (typeof typ === "number") {
    switch (typ) {
      case 0 : 
          return x.responseType = "";
      case 1 : 
          return x.responseType = "arraybuffer";
      case 2 : 
          return x.responseType = "blob";
      case 3 : 
          return x.responseType = "document";
      case 4 : 
          return x.responseType = "json";
      case 5 : 
          return x.responseType = "text";
      
    }
  } else {
    return x.responseType = typ[0];
  }
}

function get_responseType(x) {
  var s = x.responseType;
  switch (s) {
    case "" : 
        return /* StringResponseType */0;
    case "arraybuffer" : 
        return /* ArrayBufferResponseType */1;
    case "blob" : 
        return /* BlobResponseType */2;
    case "document" : 
        return /* DocumentResponseType */3;
    case "json" : 
        return /* JsonResponseType */4;
    case "text" : 
        return /* TextResponseType */5;
    default:
      return /* RawResponseType */[s];
  }
}

function get_response(x) {
  var match = x.response;
  if (match !== null) {
    var match$1 = get_responseType(x);
    if (typeof match$1 === "number") {
      switch (match$1) {
        case 0 : 
            return /* StringResponse */__(0, [match]);
        case 1 : 
            return /* ArrayBufferResponse */__(1, [match]);
        case 2 : 
            return /* BlobResponse */__(2, [match]);
        case 3 : 
            return /* DocumentResponse */__(3, [match]);
        case 4 : 
            return /* JsonResponse */__(4, [match]);
        case 5 : 
            return /* TextResponse */__(5, [match]);
        
      }
    } else {
      return /* RawResponse */__(6, [
                match$1[0],
                match
              ]);
    }
  } else {
    return /* NoResponse */0;
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function expectStringResponse(func) {
  return /* Expect */[
          /* TextResponseType */5,
          (function (param) {
              var body = param[/* body */3];
              if (typeof body === "number") {
                return /* Error */__(1, ["Non-text response returned"]);
              } else if (body.tag === 5) {
                return _1(func, body[0]);
              } else {
                return /* Error */__(1, ["Non-text response returned"]);
              }
            })
        ];
}

var expectString = expectStringResponse((function (resString) {
        return /* Ok */__(0, [resString]);
      }));

function getString(url) {
  return /* Request */[
          /* record */[
            /* method' */"GET",
            /* headers : [] */0,
            /* url */url,
            /* body : EmptyBody */0,
            /* expect */expectString,
            /* timeout : None */0,
            /* withCredentials : false */0
          ],
          /* None */0
        ];
}

function send(resultToMessage, param) {
  var maybeEvents = param[1];
  var request = param[0];
  var expect = request[/* expect */4];
  var responseToResult = expect[1];
  var typ = expect[0];
  var withCredentials = request[/* withCredentials */6];
  var timeout = request[/* timeout */5];
  var body = request[/* body */3];
  var url = request[/* url */2];
  var headers = request[/* headers */1];
  var method$prime = request[/* method' */0];
  return /* EnqueueCall */__(2, [(function (callbacks) {
                var enqRes = function (result, _) {
                  return _1(callbacks[0][/* enqueue */0], _1(resultToMessage, result));
                };
                var xhr = new XMLHttpRequest();
                if (maybeEvents) {
                  var match = maybeEvents[0];
                  var mayCB = function (thenDo, param) {
                    if (param) {
                      return _1(thenDo, _1(param[0], callbacks));
                    } else {
                      return /* () */0;
                    }
                  };
                  mayCB((function (param) {
                          return xhr.onreadystatechange = param;
                        }), match[/* onreadystatechange */0]);
                  mayCB((function (param) {
                          return xhr.onprogress = param;
                        }), match[/* onprogress */1]);
                }
                var partial_arg = /* Error */__(1, [/* NetworkError */1]);
                var cb = function (param) {
                  return enqRes(partial_arg, param);
                };
                xhr.onerror = cb;
                var partial_arg$1 = /* Error */__(1, [/* Timeout */0]);
                var cb$1 = function (param) {
                  return enqRes(partial_arg$1, param);
                };
                xhr.ontimeout = cb$1;
                var partial_arg$2 = /* Error */__(1, [/* Aborted */2]);
                var cb$2 = function (param) {
                  return enqRes(partial_arg$2, param);
                };
                xhr.onabort = cb$2;
                var cb$3 = function () {
                  var match = getAllResponseHeadersAsDict(xhr);
                  var headers;
                  headers = match.tag ? /* Empty */0 : match[0];
                  var response_000 = /* url */xhr.responseURL;
                  var response_001 = /* status : record */[
                    /* code */xhr.status,
                    /* message */xhr.statusText
                  ];
                  var response_003 = /* body */get_response(xhr);
                  var response = /* record */[
                    response_000,
                    response_001,
                    /* headers */headers,
                    response_003
                  ];
                  if (response_001[/* code */0] < 200 || 300 <= response_001[/* code */0]) {
                    var partial_arg = /* Error */__(1, [/* BadStatus */__(1, [response])]);
                    return (function (param) {
                                return enqRes(partial_arg, param);
                              })(/* () */0);
                  } else {
                    var match$1 = _1(responseToResult, response);
                    if (match$1.tag) {
                      var partial_arg$1 = /* Error */__(1, [/* BadPayload */__(2, [
                              match$1[0],
                              response
                            ])]);
                      return (function (param) {
                                  return enqRes(partial_arg$1, param);
                                })(/* () */0);
                    } else {
                      var partial_arg$2 = /* Ok */__(0, [match$1[0]]);
                      return (function (param) {
                                  return enqRes(partial_arg$2, param);
                                })(/* () */0);
                    }
                  }
                };
                xhr.onload = cb$3;
                try {
                  open_(method$prime, url, /* None */0, /* None */0, /* None */0, xhr);
                }
                catch (exn){
                  var partial_arg$3 = /* Error */__(1, [/* BadUrl */__(0, [url])]);
                  ((function (param) {
                          return enqRes(partial_arg$3, param);
                        })(/* () */0));
                }
                var setHeader = function (param) {
                  return setRequestHeader(param[0], param[1], xhr);
                };
                iter(setHeader, headers);
                set_responseType(typ, xhr);
                if (timeout) {
                  xhr.timeout = timeout[0];
                }
                xhr.withCredentials = withCredentials;
                send$1(body, xhr);
                return /* () */0;
              })]);
}


/* expectString Not a pure module */

var max_int$2 = 2147483647;


/* No side effect */

var max_int$3 = /* int64 */[
  /* hi */2147483647,
  /* lo */4294967295
];


/* No side effect */

function cmn(q, a, b, x, s, t) {
  var a$1 = ((a + q | 0) + x | 0) + t | 0;
  return ((a$1 << s) | (a$1 >>> (32 - s | 0)) | 0) + b | 0;
}

function f(a, b, c, d, x, s, t) {
  return cmn(b & c | (b ^ -1) & d, a, b, x, s, t);
}

function g(a, b, c, d, x, s, t) {
  return cmn(b & d | c & (d ^ -1), a, b, x, s, t);
}

function h(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}

function i$2(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | d ^ -1), a, b, x, s, t);
}

function cycle(x, k) {
  var a = x[0];
  var b = x[1];
  var c = x[2];
  var d = x[3];
  a = f(a, b, c, d, k[0], 7, -680876936);
  d = f(d, a, b, c, k[1], 12, -389564586);
  c = f(c, d, a, b, k[2], 17, 606105819);
  b = f(b, c, d, a, k[3], 22, -1044525330);
  a = f(a, b, c, d, k[4], 7, -176418897);
  d = f(d, a, b, c, k[5], 12, 1200080426);
  c = f(c, d, a, b, k[6], 17, -1473231341);
  b = f(b, c, d, a, k[7], 22, -45705983);
  a = f(a, b, c, d, k[8], 7, 1770035416);
  d = f(d, a, b, c, k[9], 12, -1958414417);
  c = f(c, d, a, b, k[10], 17, -42063);
  b = f(b, c, d, a, k[11], 22, -1990404162);
  a = f(a, b, c, d, k[12], 7, 1804603682);
  d = f(d, a, b, c, k[13], 12, -40341101);
  c = f(c, d, a, b, k[14], 17, -1502002290);
  b = f(b, c, d, a, k[15], 22, 1236535329);
  a = g(a, b, c, d, k[1], 5, -165796510);
  d = g(d, a, b, c, k[6], 9, -1069501632);
  c = g(c, d, a, b, k[11], 14, 643717713);
  b = g(b, c, d, a, k[0], 20, -373897302);
  a = g(a, b, c, d, k[5], 5, -701558691);
  d = g(d, a, b, c, k[10], 9, 38016083);
  c = g(c, d, a, b, k[15], 14, -660478335);
  b = g(b, c, d, a, k[4], 20, -405537848);
  a = g(a, b, c, d, k[9], 5, 568446438);
  d = g(d, a, b, c, k[14], 9, -1019803690);
  c = g(c, d, a, b, k[3], 14, -187363961);
  b = g(b, c, d, a, k[8], 20, 1163531501);
  a = g(a, b, c, d, k[13], 5, -1444681467);
  d = g(d, a, b, c, k[2], 9, -51403784);
  c = g(c, d, a, b, k[7], 14, 1735328473);
  b = g(b, c, d, a, k[12], 20, -1926607734);
  a = h(a, b, c, d, k[5], 4, -378558);
  d = h(d, a, b, c, k[8], 11, -2022574463);
  c = h(c, d, a, b, k[11], 16, 1839030562);
  b = h(b, c, d, a, k[14], 23, -35309556);
  a = h(a, b, c, d, k[1], 4, -1530992060);
  d = h(d, a, b, c, k[4], 11, 1272893353);
  c = h(c, d, a, b, k[7], 16, -155497632);
  b = h(b, c, d, a, k[10], 23, -1094730640);
  a = h(a, b, c, d, k[13], 4, 681279174);
  d = h(d, a, b, c, k[0], 11, -358537222);
  c = h(c, d, a, b, k[3], 16, -722521979);
  b = h(b, c, d, a, k[6], 23, 76029189);
  a = h(a, b, c, d, k[9], 4, -640364487);
  d = h(d, a, b, c, k[12], 11, -421815835);
  c = h(c, d, a, b, k[15], 16, 530742520);
  b = h(b, c, d, a, k[2], 23, -995338651);
  a = i$2(a, b, c, d, k[0], 6, -198630844);
  d = i$2(d, a, b, c, k[7], 10, 1126891415);
  c = i$2(c, d, a, b, k[14], 15, -1416354905);
  b = i$2(b, c, d, a, k[5], 21, -57434055);
  a = i$2(a, b, c, d, k[12], 6, 1700485571);
  d = i$2(d, a, b, c, k[3], 10, -1894986606);
  c = i$2(c, d, a, b, k[10], 15, -1051523);
  b = i$2(b, c, d, a, k[1], 21, -2054922799);
  a = i$2(a, b, c, d, k[8], 6, 1873313359);
  d = i$2(d, a, b, c, k[15], 10, -30611744);
  c = i$2(c, d, a, b, k[6], 15, -1560198380);
  b = i$2(b, c, d, a, k[13], 21, 1309151649);
  a = i$2(a, b, c, d, k[4], 6, -145523070);
  d = i$2(d, a, b, c, k[11], 10, -1120210379);
  c = i$2(c, d, a, b, k[2], 15, 718787259);
  b = i$2(b, c, d, a, k[9], 21, -343485551);
  x[0] = a + x[0] | 0;
  x[1] = b + x[1] | 0;
  x[2] = c + x[2] | 0;
  x[3] = d + x[3] | 0;
  return /* () */0;
}

var state = /* array */[
  1732584193,
  -271733879,
  -1732584194,
  271733878
];

var md5blk = /* array */[
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

function caml_md5_string(s, start, len) {
  var s$1 = s.slice(start, len);
  var n = s$1.length;
  state[0] = 1732584193;
  state[1] = -271733879;
  state[2] = -1732584194;
  state[3] = 271733878;
  for(var i = 0; i <= 15; ++i){
    md5blk[i] = 0;
  }
  var i_end = n / 64 | 0;
  for(var i$1 = 1; i$1 <= i_end; ++i$1){
    for(var j = 0; j <= 15; ++j){
      var k = ((i$1 << 6) - 64 | 0) + (j << 2) | 0;
      md5blk[j] = ((s$1.charCodeAt(k) + (s$1.charCodeAt(k + 1 | 0) << 8) | 0) + (s$1.charCodeAt(k + 2 | 0) << 16) | 0) + (s$1.charCodeAt(k + 3 | 0) << 24) | 0;
    }
    cycle(state, md5blk);
  }
  var s_tail = s$1.slice((i_end << 6));
  for(var kk = 0; kk <= 15; ++kk){
    md5blk[kk] = 0;
  }
  var i_end$1 = s_tail.length - 1 | 0;
  for(var i$2 = 0; i$2 <= i_end$1; ++i$2){
    md5blk[i$2 / 4 | 0] = md5blk[i$2 / 4 | 0] | (s_tail.charCodeAt(i$2) << (i$2 % 4 << 3));
  }
  var i$3 = i_end$1 + 1 | 0;
  md5blk[i$3 / 4 | 0] = md5blk[i$3 / 4 | 0] | (128 << (i$3 % 4 << 3));
  if (i$3 > 55) {
    cycle(state, md5blk);
    for(var i$4 = 0; i$4 <= 15; ++i$4){
      md5blk[i$4] = 0;
    }
  }
  md5blk[14] = (n << 3);
  cycle(state, md5blk);
  return String.fromCharCode(state[0] & 255, (state[0] >> 8) & 255, (state[0] >> 16) & 255, (state[0] >> 24) & 255, state[1] & 255, (state[1] >> 8) & 255, (state[1] >> 16) & 255, (state[1] >> 24) & 255, state[2] & 255, (state[2] >> 8) & 255, (state[2] >> 16) & 255, (state[2] >> 24) & 255, state[3] & 255, (state[3] >> 8) & 255, (state[3] >> 16) & 255, (state[3] >> 24) & 255);
}


/* No side effect */

function string$1$1(str) {
  return caml_md5_string(str, 0, str.length);
}


/* No side effect */

var size$1 = 54;


/* No side effect */

function assign(st1, st2) {
  blit$2(st2[/* st */0], 0, st1[/* st */0], 0, 55);
  st1[/* idx */1] = st2[/* idx */1];
  return /* () */0;
}

function full_init(s, seed) {
  var combine = function (accu, x) {
    return string$1$1(accu + x);
  };
  var extract = function (d) {
    return ((get(d, 0) + (get(d, 1) << 8) | 0) + (get(d, 2) << 16) | 0) + (get(d, 3) << 24) | 0;
  };
  var seed$1 = seed.length ? seed : /* int array */[0];
  var l = seed$1.length;
  for(var i = 0; i <= 54; ++i){
    caml_array_set(s[/* st */0], i, i);
  }
  var accu = "x";
  for(var i$1 = 0 ,i_finish = 54 + max(55, l) | 0; i$1 <= i_finish; ++i$1){
    var j = i$1 % 55;
    var k = i$1 % l;
    accu = combine(accu, caml_array_get(seed$1, k));
    caml_array_set(s[/* st */0], j, (caml_array_get(s[/* st */0], j) ^ extract(accu)) & 1073741823);
  }
  s[/* idx */1] = 0;
  return /* () */0;
}

function make$2(seed) {
  var result = /* record */[
    /* st */caml_make_vect(55, 0),
    /* idx */0
  ];
  full_init(result, seed);
  return result;
}

function make_self_init() {
  return make$2(caml_sys_random_seed(/* () */0));
}

function copy$3(s) {
  var result = /* record */[
    /* st */caml_make_vect(55, 0),
    /* idx */0
  ];
  assign(result, s);
  return result;
}

function bits(s) {
  s[/* idx */1] = (s[/* idx */1] + 1 | 0) % 55;
  var curval = caml_array_get(s[/* st */0], s[/* idx */1]);
  var newval = caml_array_get(s[/* st */0], (s[/* idx */1] + 24 | 0) % 55) + (curval ^ (curval >>> 25) & 31) | 0;
  var newval30 = newval & 1073741823;
  caml_array_set(s[/* st */0], s[/* idx */1], newval30);
  return newval30;
}

function $$int$2(s, bound) {
  if (bound > 1073741823 || bound <= 0) {
    throw [
          invalid_argument,
          "Random.int"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var r = bits(s$1);
      var v = r % n;
      if ((r - v | 0) > ((1073741823 - n | 0) + 1 | 0)) {
        continue ;
        
      } else {
        return v;
      }
    }
  }
}

function int32(s, bound) {
  if (bound <= 0) {
    throw [
          invalid_argument,
          "Random.int32"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var b1 = bits(s$1);
      var b2 = ((bits(s$1) & 1) << 30);
      var r = b1 | b2;
      var v = r % n;
      if ((r - v | 0) > ((max_int$2 - n | 0) + 1 | 0)) {
        continue ;
        
      } else {
        return v;
      }
    }
  }
}

function int64(s, bound) {
  if (le(bound, /* int64 */[
          /* hi */0,
          /* lo */0
        ])) {
    throw [
          invalid_argument,
          "Random.int64"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var b1 = of_int32(bits(s$1));
      var b2 = lsl_(of_int32(bits(s$1)), 30);
      var b3 = lsl_(of_int32(bits(s$1) & 7), 60);
      var r = or_(b1, /* int64 */[
            /* hi */b2[0] | b3[0],
            /* lo */((b2[1] | b3[1]) >>> 0)
          ]);
      var v = mod_$1(r, n);
      if (gt(sub(r, v), add(sub(max_int$3, n), /* int64 */[
                  /* hi */0,
                  /* lo */1
                ]))) {
        continue ;
        
      } else {
        return v;
      }
    }
  }
}

var nativeint = size$1 === 32 ? int32 : (function (s, bound) {
      return int64(s, of_int32(bound))[1] | 0;
    });

function rawfloat(s) {
  var r1 = bits(s);
  var r2 = bits(s);
  return (r1 / 1073741824.0 + r2) / 1073741824.0;
}

function $$float$2(s, bound) {
  return rawfloat(s) * bound;
}

function bool$2(s) {
  return +((bits(s) & 1) === 0);
}

var $$default = /* record */[
  /* st : array */[
    987910699,
    495797812,
    364182224,
    414272206,
    318284740,
    990407751,
    383018966,
    270373319,
    840823159,
    24560019,
    536292337,
    512266505,
    189156120,
    730249596,
    143776328,
    51606627,
    140166561,
    366354223,
    1003410265,
    700563762,
    981890670,
    913149062,
    526082594,
    1021425055,
    784300257,
    667753350,
    630144451,
    949649812,
    48546892,
    415514493,
    258888527,
    511570777,
    89983870,
    283659902,
    308386020,
    242688715,
    482270760,
    865188196,
    1027664170,
    207196989,
    193777847,
    619708188,
    671350186,
    149669678,
    257044018,
    87658204,
    558145612,
    183450813,
    28133145,
    901332182,
    710253903,
    510646120,
    652377910,
    409934019,
    801085050
  ],
  /* idx */0
];

function full_init$1(seed) {
  return full_init($$default, seed);
}

function self_init() {
  return full_init$1(caml_sys_random_seed(/* () */0));
}

function get_state() {
  return copy$3($$default);
}

function set_state(s) {
  return assign($$default, s);
}

var State = [
  make$2,
  make_self_init,
  copy$3,
  bits,
  $$int$2,
  int32,
  nativeint,
  int64,
  $$float$2,
  bool$2
];


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
self_init(/* () */0);

function $$int$1$1(min$$1, max$$1) {
  return /* Generator */[(function (state) {
              return min$$1 + State[/* int */4](state, max$$1) | 0;
            })];
}

function generate(tagger, param) {
  var genCmd = param[0];
  return /* EnqueueCall */__(2, [(function (callbacks) {
                var state = get_state(/* () */0);
                var genValue = _1(genCmd, state);
                set_state(state);
                return _1(callbacks[0][/* enqueue */0], _1(tagger, genValue));
              })]);
}


/*  Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function addEventListener$1(typ, listener, options) {
  return window.addEventListener(typ, listener, options);
}

function removeEventListener$1(typ, listener, options) {
  return window.removeEventListener(typ, listener, options);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function asRecord($$location) {
  return /* record */[
          /* href */$$location.href,
          /* protocol */$$location.protocol,
          /* host */$$location.host,
          /* hostname */$$location.hostname,
          /* port */$$location.port,
          /* pathname */$$location.pathname,
          /* search */$$location.search,
          /* hash */$$location.hash,
          /* username */$$location.username,
          /* password */$$location.password,
          /* origin */$$location.origin
        ];
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function replaceState$1($$window, state, title, url) {
  var match = $$window.history;
  if (match !== undefined) {
    return match.replaceState(state, title, url);
  } else {
    return /* () */0;
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var notifier = [/* None */0];

function notifyUrlChange() {
  var match = notifier[0];
  if (match) {
    var $$location = asRecord(document.location);
    _1(match[0], $$location);
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function subscribe(tagger) {
  var enableCall = function (callbacks) {
    var notifyHandler = function ($$location) {
      return _1(callbacks[/* enqueue */0], _1(tagger, $$location));
    };
    notifier[0] = /* Some */[notifyHandler];
    var handler = function () {
      return notifyUrlChange(/* () */0);
    };
    addEventListener$1("popstate", handler, /* false */0);
    return (function () {
        return removeEventListener$1("popstate", handler, /* false */0);
      });
  };
  return registration("navigation", enableCall);
}

function replaceState(url) {
  replaceState$1(window, JSON.parse("{}"), "", url);
  return /* () */0;
}

function modifyUrl(url) {
  return /* EnqueueCall */__(2, [(function () {
                replaceState(url);
                notifyUrlChange(/* () */0);
                return /* () */0;
              })]);
}

function navigationProgram(locationToMessage, stuff) {
  var init = function (flag) {
    return _2(stuff[/* init */0], flag, asRecord(document.location));
  };
  var subscriptions = function (model) {
    return /* Batch */__(0, [/* :: */[
                subscribe(locationToMessage),
                /* :: */[
                  _1(stuff[/* subscriptions */3], model),
                  /* [] */0
                ]
              ]]);
  };
  var partial_arg_001 = /* update */stuff[/* update */1];
  var partial_arg_002 = /* view */stuff[/* view */2];
  var partial_arg_004 = /* shutdown */stuff[/* shutdown */4];
  var partial_arg = /* record */[
    /* init */init,
    partial_arg_001,
    partial_arg_002,
    /* subscriptions */subscriptions,
    partial_arg_004
  ];
  return (function (param, param$1) {
      return program(partial_arg, param, param$1);
    });
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function board_msg(param_0) {
  return /* Board_msg */__(0, [param_0]);
}

function random_move(param_0) {
  return /* Random_move */__(1, [param_0]);
}

function key_pressed(param_0) {
  return /* Key_pressed */__(2, [param_0]);
}

function jump(param_0) {
  return /* Jump */__(3, [param_0]);
}

function tournament_data(param_0) {
  return /* Tournament_data */__(4, [param_0]);
}

function location_change(param_0) {
  return /* Location_change */__(5, [param_0]);
}

function pgn_requested(param_0) {
  return /* Pgn_requested */__(6, [param_0]);
}

function pgn_data(param_0, param_1) {
  return /* Pgn_data */__(7, [
            param_0,
            param_1
          ]);
}

function close_tab(param_0) {
  return /* Close_tab */__(8, [param_0]);
}

function validate_pgn(param_0) {
  return /* Validate_pgn */__(9, [param_0]);
}

var proxy = "https://thingproxy.freeboard.io/fetch/";

function route_of_location($$location) {
  var route = split_on_char(/* "/" */47, $$location[/* hash */7]);
  if (route) {
    if (route[0] === "#") {
      var match = route[1];
      if (match) {
        switch (match[0]) {
          case "game" : 
              if (match[1]) {
                return /* tuple */[
                        /* Game */0,
                        modifyUrl("#/game")
                      ];
              } else {
                return /* tuple */[
                        /* Game */0,
                        none
                      ];
              }
          case "pgn" : 
              var match$1 = match[1];
              if (match$1) {
                if (match$1[1]) {
                  return /* tuple */[
                          /* Game */0,
                          modifyUrl("#/game")
                        ];
                } else {
                  var id = match$1[0];
                  return /* tuple */[
                          /* Pgn */[id],
                          msg(/* Pgn_requested */__(6, [id]))
                        ];
                }
              } else {
                return /* tuple */[
                        /* Game */0,
                        modifyUrl("#/game")
                      ];
              }
              break;
          case "tournament" : 
              if (match[1]) {
                return /* tuple */[
                        /* Game */0,
                        modifyUrl("#/game")
                      ];
              } else {
                return /* tuple */[
                        /* Tournament */1,
                        none
                      ];
              }
          default:
            return /* tuple */[
                    /* Game */0,
                    modifyUrl("#/game")
                  ];
        }
      } else {
        return /* tuple */[
                /* Game */0,
                modifyUrl("#/game")
              ];
      }
    } else {
      return /* tuple */[
              /* Game */0,
              modifyUrl("#/game")
            ];
    }
  } else {
    return /* tuple */[
            /* Game */0,
            modifyUrl("#/game")
          ];
  }
}

function init(_, $$location) {
  var match = route_of_location($$location);
  var init_cmd = send(tournament_data, getString("https://lichess.org/api/tournament/GToVqkC9"));
  return /* tuple */[
          /* record */[
            /* position */init_position,
            /* board */init$4(/* () */0),
            /* moves */init$5(/* () */0),
            /* ply */0,
            /* tournament : Loading */0,
            /* pgn : [] */0,
            /* route */match[0]
          ],
          batch(/* :: */[
                init_cmd,
                /* :: */[
                  match[1],
                  /* [] */0
                ]
              ])
        ];
}

function update(model, param) {
  var exit$$1 = 0;
  var move$$1;
  if (typeof param === "number") {
    switch (param) {
      case 0 : 
          var match = game_status(model[/* position */0]);
          var tmp;
          if (typeof match === "number") {
            tmp = none;
          } else if (match.tag) {
            var move_list = match[0];
            tmp = generate((function (random_number) {
                    return /* Random_move */__(1, [nth(move_list, random_number)]);
                  }), $$int$1$1(0, length(move_list)));
          } else {
            tmp = none;
          }
          return /* tuple */[
                  model,
                  tmp
                ];
      case 1 : 
          var match$1 = model[/* position */0][/* prev */5];
          return /* tuple */[
                  match$1 ? /* record */[
                      /* position */match$1[0],
                      /* board */model[/* board */1],
                      /* moves */back(model[/* moves */2]),
                      /* ply */model[/* ply */3] - 1 | 0,
                      /* tournament */model[/* tournament */4],
                      /* pgn */model[/* pgn */5],
                      /* route */model[/* route */6]
                    ] : model,
                  none
                ];
      case 2 : 
          try {
            var match$2 = fwd(model[/* moves */2]);
            return /* tuple */[
                    /* record */[
                      /* position */make_move(model[/* position */0], match$2[0][0]),
                      /* board */model[/* board */1],
                      /* moves */match$2[1],
                      /* ply */model[/* ply */3] + 1 | 0,
                      /* tournament */model[/* tournament */4],
                      /* pgn */model[/* pgn */5],
                      /* route */model[/* route */6]
                    ],
                    none
                  ];
          }
          catch (exn){
            if (exn === End_of_list) {
              return /* tuple */[
                      model,
                      none
                    ];
            } else {
              throw exn;
            }
          }
          break;
      
    }
  } else {
    switch (param.tag | 0) {
      case 0 : 
          var match$3 = param[0];
          if (match$3.tag) {
            move$$1 = match$3[0];
            exit$$1 = 1;
          } else {
            var match$4 = update$1(model[/* board */1], /* Internal_msg */__(0, [match$3[0]]));
            var newrecord = model.slice();
            return /* tuple */[
                    (newrecord[/* board */1] = match$4[0], newrecord),
                    map$4(board_msg, match$4[1])
                  ];
          }
          break;
      case 1 : 
          move$$1 = param[0];
          exit$$1 = 1;
          break;
      case 2 : 
          var key_event$$1 = param[0];
          var match$5 = key_event$$1[/* ctrl */2];
          var match$6 = key_event$$1[/* key_code */0];
          var tmp$1;
          var exit$1 = 0;
          if (match$5 !== 0) {
            if (match$6 !== 66) {
              if (match$6 >= 82) {
                if (match$6 >= 85) {
                  exit$1 = 2;
                } else {
                  switch (match$6 - 82 | 0) {
                    case 0 : 
                        tmp$1 = msg(/* Random_button */0);
                        break;
                    case 1 : 
                        exit$1 = 2;
                        break;
                    case 2 : 
                        tmp$1 = msg(/* Back_button */1);
                        break;
                    
                  }
                }
              } else if (match$6 !== 70) {
                exit$1 = 2;
              } else {
                tmp$1 = msg(/* Fwd_button */2);
              }
            } else {
              tmp$1 = msg(/* Back_button */1);
            }
          } else {
            exit$1 = 2;
          }
          if (exit$1 === 2) {
            var switcher = match$6 - 37 | 0;
            if (switcher > 2 || switcher < 0) {
              tmp$1 = none;
            } else {
              switch (switcher) {
                case 0 : 
                    tmp$1 = msg(/* Back_button */1);
                    break;
                case 1 : 
                    tmp$1 = none;
                    break;
                case 2 : 
                    tmp$1 = msg(/* Fwd_button */2);
                    break;
                
              }
            }
          }
          return /* tuple */[
                  model,
                  tmp$1
                ];
      case 3 : 
          var how_many = param[0];
          var jump_fwd = function (_position, _zipper, _n) {
            while(true) {
              var n = _n;
              var zipper = _zipper;
              var position = _position;
              if (n <= 0) {
                return /* tuple */[
                        position,
                        zipper
                      ];
              } else {
                var match = fwd(zipper);
                _n = n - 1 | 0;
                _zipper = match[1];
                _position = make_move(position, match[0][0]);
                continue ;
                
              }
            }
          };
          var jump_back = function (_position, _zipper, _n) {
            while(true) {
              var n = _n;
              var zipper = _zipper;
              var position = _position;
              var match = position[/* prev */5];
              if (match) {
                if (n < 0) {
                  _n = n + 1 | 0;
                  _zipper = back(zipper);
                  _position = match[0];
                  continue ;
                  
                } else {
                  return /* tuple */[
                          position,
                          zipper
                        ];
                }
              } else {
                return /* tuple */[
                        position,
                        zipper
                      ];
              }
            }
          };
          if (how_many !== 0) {
            var match$7 = how_many > 0 ? jump_fwd(model[/* position */0], model[/* moves */2], how_many) : jump_back(model[/* position */0], model[/* moves */2], how_many);
            return /* tuple */[
                    /* record */[
                      /* position */match$7[0],
                      /* board */model[/* board */1],
                      /* moves */match$7[1],
                      /* ply */model[/* ply */3] + how_many | 0,
                      /* tournament */model[/* tournament */4],
                      /* pgn */model[/* pgn */5],
                      /* route */model[/* route */6]
                    ],
                    none
                  ];
          } else {
            return /* tuple */[
                    model,
                    none
                  ];
          }
          break;
      case 4 : 
          var match$8 = param[0];
          if (match$8.tag) {
            console.log(match$8[0]);
            var newrecord$1 = model.slice();
            return /* tuple */[
                    (newrecord$1[/* tournament */4] = /* Failed */1, newrecord$1),
                    none
                  ];
          } else {
            var players_decoder = Decoder[/* list */7](Decoder[/* string */2]);
            var pairing_decoder = Decoder[/* map2 */17]((function (x, y) {
                    return /* tuple */[
                            x,
                            y
                          ];
                  }), Decoder[/* field */11]("id", Decoder[/* string */2]), Decoder[/* field */11]("u", players_decoder));
            var list_decoder = Decoder[/* list */7](pairing_decoder);
            var pairings_decoder = Decoder[/* field */11]("pairings", list_decoder);
            var newrecord$2 = model.slice();
            var match$9 = Decoder[/* decodeString */32](pairings_decoder, match$8[0]);
            var tmp$2;
            tmp$2 = match$9.tag ? /* Failed */1 : /* Received */[match$9[0]];
            newrecord$2[/* tournament */4] = tmp$2;
            return /* tuple */[
                    newrecord$2,
                    none
                  ];
          }
          break;
      case 5 : 
          var match$10 = route_of_location(param[0]);
          var newrecord$3 = model.slice();
          return /* tuple */[
                  (newrecord$3[/* route */6] = match$10[0], newrecord$3),
                  match$10[1]
                ];
      case 6 : 
          var id = param[0];
          try {
            var match$11 = assoc(id, model[/* pgn */5]);
            if (typeof match$11 === "number") {
              return /* tuple */[
                      model,
                      none
                    ];
            } else {
              return /* tuple */[
                      model,
                      msg(/* Validate_pgn */__(9, [match$11[0]]))
                    ];
            }
          }
          catch (exn$1){
            if (exn$1 === not_found) {
              var url = _2(sprintf(/* Format */[
                        /* String */__(2, [
                            /* No_padding */0,
                            /* String_literal */__(11, [
                                "https://lichess.org/game/export/",
                                /* String */__(2, [
                                    /* No_padding */0,
                                    /* String_literal */__(11, [
                                        ".pgn",
                                        /* End_of_format */0
                                      ])
                                  ])
                              ])
                          ]),
                        "%shttps://lichess.org/game/export/%s.pgn"
                      ]), proxy, id);
              var cmd = send((function (param) {
                      return /* Pgn_data */__(7, [
                                id,
                                param
                              ]);
                    }), getString(url));
              return /* tuple */[
                      /* record */[
                        /* position */model[/* position */0],
                        /* board */model[/* board */1],
                        /* moves */model[/* moves */2],
                        /* ply */model[/* ply */3],
                        /* tournament */model[/* tournament */4],
                        /* pgn : :: */[
                          /* tuple */[
                            id,
                            /* Loading */0
                          ],
                          model[/* pgn */5]
                        ],
                        /* route : Pgn */[id]
                      ],
                      cmd
                    ];
            } else {
              throw exn$1;
            }
          }
          break;
      case 7 : 
          var match$12 = param[1];
          var id$1$$1 = param[0];
          if (match$12.tag) {
            var newrecord$4 = model.slice();
            return /* tuple */[
                    (newrecord$4[/* pgn */5] = /* :: */[
                        /* tuple */[
                          id$1$$1,
                          /* Failed */1
                        ],
                        remove_assoc(id$1$$1, model[/* pgn */5])
                      ], newrecord$4),
                    none
                  ];
          } else {
            var data = match$12[0];
            var newrecord$5 = model.slice();
            return /* tuple */[
                    (newrecord$5[/* pgn */5] = /* :: */[
                        /* tuple */[
                          id$1$$1,
                          /* Received */[data]
                        ],
                        remove_assoc(id$1$$1, model[/* pgn */5])
                      ], newrecord$5),
                    msg(/* Validate_pgn */__(9, [data]))
                  ];
          }
          break;
      case 8 : 
          var pgn = remove_assoc(param[0], model[/* pgn */5]);
          var route = pgn ? /* Pgn */[pgn[0][0]] : /* Tournament */1;
          return /* tuple */[
                  /* record */[
                    /* position */model[/* position */0],
                    /* board */model[/* board */1],
                    /* moves */model[/* moves */2],
                    /* ply */model[/* ply */3],
                    /* tournament */model[/* tournament */4],
                    /* pgn */pgn,
                    /* route */route
                  ],
                  none
                ];
      case 9 : 
          try {
            var match$13 = game_of_string(param[0]);
            return /* tuple */[
                    /* record */[
                      /* position */match$13[0],
                      /* board */model[/* board */1],
                      /* moves */match$13[2],
                      /* ply */match$13[1],
                      /* tournament */model[/* tournament */4],
                      /* pgn */model[/* pgn */5],
                      /* route */model[/* route */6]
                    ],
                    none
                  ];
          }
          catch (raw__e){
            var _e = internalToOCamlException(raw__e);
            console.log(_e);
            return /* tuple */[
                    model,
                    none
                  ];
          }
          break;
      
    }
  }
  if (exit$$1 === 1) {
    var san = san_of_move(model[/* position */0], move$$1);
    return /* tuple */[
            /* record */[
              /* position */make_move(model[/* position */0], move$$1),
              /* board */model[/* board */1],
              /* moves */fwd$prime(/* tuple */[
                    move$$1,
                    san
                  ], model[/* moves */2]),
              /* ply */model[/* ply */3] + 1 | 0,
              /* tournament */model[/* tournament */4],
              /* pgn */model[/* pgn */5],
              /* route */model[/* route */6]
            ],
            none
          ];
  }
  
}

function move_view($staropt$star, current_ply, offset, param) {
  var highlight = $staropt$star ? $staropt$star[0] : /* false */0;
  var ply = (current_ply + offset | 0) + 1 | 0;
  var number = ply / 2 | 0;
  var w_move = +(ply % 2 === 0);
  return li(/* None */0, /* None */0, /* :: */[
              classList(/* :: */[
                    /* tuple */[
                      "move",
                      /* true */1
                    ],
                    /* :: */[
                      /* tuple */[
                        "numbered",
                        w_move
                      ],
                      /* :: */[
                        /* tuple */[
                          "highlight",
                          highlight
                        ],
                        /* [] */0
                      ]
                    ]
                  ]),
              /* [] */0
            ], /* :: */[
              span(/* None */0, /* None */0, /* :: */[
                    class$prime("number"),
                    /* [] */0
                  ], /* :: */[
                    text$1(string_of_int(number)),
                    /* [] */0
                  ]),
              /* :: */[
                span(/* None */0, /* None */0, /* :: */[
                      class$prime("move"),
                      /* :: */[
                        offset !== 0 ? onClick(/* Jump */__(3, [offset])) : noProp$1,
                        /* [] */0
                      ]
                    ], /* :: */[
                      text$1(param[1]),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]);
}

function home_view(highlight, current_ply) {
  return li(/* None */0, /* None */0, /* :: */[
              classList(/* :: */[
                    /* tuple */[
                      "move",
                      /* true */1
                    ],
                    /* :: */[
                      /* tuple */[
                        "highlight",
                        highlight
                      ],
                      /* [] */0
                    ]
                  ]),
              /* [] */0
            ], /* :: */[
              span(/* None */0, /* None */0, /* :: */[
                    class$prime("move"),
                    /* :: */[
                      onClick(/* Jump */__(3, [-current_ply | 0])),
                      /* [] */0
                    ]
                  ], /* :: */[
                    text$1("\u2302"),
                    /* [] */0
                  ]),
              /* [] */0
            ]);
}

function move_list_future_view(ply, future) {
  var _offset = 1;
  var _cont = function (x) {
    return x;
  };
  var _param = future;
  while(true) {
    var param = _param;
    var cont = _cont;
    var offset = _offset;
    if (param) {
      var hd$$1 = param[0];
      _param = param[1];
      _cont = (function(offset,cont,hd$$1){
      return function (acc) {
        return _1(cont, /* :: */[
                    move_view(/* None */0, ply, offset, hd$$1),
                    acc
                  ]);
      }
      }(offset,cont,hd$$1));
      _offset = offset + 1 | 0;
      continue ;
      
    } else {
      return _1(cont, /* [] */0);
    }
  }
}

function move_list_view(ply, param) {
  var loop = function (_offset, _acc, _param) {
    while(true) {
      var param = _param;
      var acc = _acc;
      var offset = _offset;
      if (param) {
        _param = param[1];
        _acc = /* :: */[
          move_view(/* Some */[+(offset === 0)], ply, offset, param[0]),
          acc
        ];
        _offset = offset - 1 | 0;
        continue ;
        
      } else {
        return acc;
      }
    }
  };
  return ul(/* None */0, /* None */0, /* :: */[
              class$prime("moves"),
              /* [] */0
            ], /* :: */[
              home_view(+(ply === 0), ply),
              loop(0, move_list_future_view(ply, param[1]), param[0])
            ]);
}

var buttons_view = nav(/* None */0, /* None */0, /* :: */[
      id$1("buttons"),
      /* [] */0
    ], $at(map((function (param) {
                return map$8(board_msg, param);
              }), buttons_view$1), /* :: */[
          button(/* None */0, /* None */0, /* :: */[
                onClick(/* Random_button */0),
                /* [] */0
              ], /* :: */[
                text$1("random move"),
                /* [] */0
              ]),
          /* :: */[
            button(/* None */0, /* None */0, /* :: */[
                  onClick(/* Back_button */1),
                  /* [] */0
                ], /* :: */[
                  text$1("back"),
                  /* [] */0
                ]),
            /* :: */[
              button(/* None */0, /* None */0, /* :: */[
                    onClick(/* Fwd_button */2),
                    /* [] */0
                  ], /* :: */[
                    text$1("forward"),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]));

var header_nav_view = nav(/* None */0, /* None */0, /* :: */[
      class$prime("top"),
      /* [] */0
    ], /* :: */[
      ul(/* None */0, /* None */0, /* [] */0, /* :: */[
            li(/* None */0, /* None */0, /* :: */[
                  class$prime("home"),
                  /* [] */0
                ], /* :: */[
                  text$1("TEA-Chess"),
                  /* [] */0
                ]),
            /* :: */[
              li(/* None */0, /* None */0, /* [] */0, /* :: */[
                    a(/* None */0, /* None */0, /* :: */[
                          href("https://quernd.github.io/tutorials/tea-chess"),
                          /* [] */0
                        ], /* :: */[
                          text$1("Tutorial"),
                          /* [] */0
                        ]),
                    /* [] */0
                  ]),
              /* :: */[
                li(/* None */0, /* None */0, /* [] */0, /* :: */[
                      a(/* None */0, /* None */0, /* :: */[
                            href("https://github.com/quernd/tea-chess"),
                            /* [] */0
                          ], /* :: */[
                            text$1("Code"),
                            /* [] */0
                          ]),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]),
      /* [] */0
    ]);

function tournament_view(tournament) {
  if (typeof tournament === "number") {
    if (tournament !== 0) {
      return text$1("Tournament could not be loaded.");
    } else {
      return text$1("Loading tournament...");
    }
  } else {
    return table(/* None */0, /* None */0, /* [] */0, map((function (param) {
                      var id = param[0];
                      return tr(/* None */0, /* None */0, /* [] */0, /* :: */[
                                  td(/* None */0, /* None */0, /* [] */0, /* :: */[
                                        a(/* None */0, /* None */0, /* :: */[
                                              href(_1(sprintf(/* Format */[
                                                            /* String_literal */__(11, [
                                                                "#/pgn/",
                                                                /* String */__(2, [
                                                                    /* No_padding */0,
                                                                    /* End_of_format */0
                                                                  ])
                                                              ]),
                                                            "#/pgn/%s"
                                                          ]), id)),
                                              /* [] */0
                                            ], /* :: */[
                                              text$1(id),
                                              /* [] */0
                                            ]),
                                        /* [] */0
                                      ]),
                                  map((function (player) {
                                          return td(/* None */0, /* None */0, /* [] */0, /* :: */[
                                                      text$1(player),
                                                      /* [] */0
                                                    ]);
                                        }), param[1])
                                ]);
                    }), tournament[0]));
  }
}

function pgn_view(id, model) {
  try {
    var match = assoc(id, model[/* pgn */5]);
    if (typeof match === "number") {
      if (match !== 0) {
        return text$1("Game could not be loaded.");
      } else {
        return text$1("Loading PGN game...");
      }
    } else {
      return move_list_view(model[/* ply */3], model[/* moves */2]);
    }
  }
  catch (exn){
    if (exn === not_found) {
      return text$1("");
    } else {
      throw exn;
    }
  }
}

function game_nav_view(model) {
  var game_nav_item = function (current, link, label$$1) {
    return li(/* None */0, /* None */0, /* :: */[
                current ? class$prime("current") : noProp$1,
                /* [] */0
              ], /* :: */[
                current ? text$1(label$$1) : a(/* None */0, /* None */0, /* :: */[
                        href(link),
                        /* [] */0
                      ], /* :: */[
                        text$1(label$$1),
                        /* [] */0
                      ]),
                /* [] */0
              ]);
  };
  return nav(/* None */0, /* None */0, /* :: */[
              class$prime("top tabbed"),
              /* [] */0
            ], /* :: */[
              ul(/* None */0, /* None */0, /* [] */0, $at(/* :: */[
                        game_nav_item(+(model[/* route */6] === /* Game */0), "#/game", "Game"),
                        /* :: */[
                          game_nav_item(+(model[/* route */6] === /* Tournament */1), "#/tournament", "Tournament"),
                          /* [] */0
                        ]
                      ], rev_map((function (param) {
                              var id = param[0];
                              return li(/* None */0, /* None */0, /* :: */[
                                          caml_equal(model[/* route */6], /* Pgn */[id]) ? class$prime("current") : noProp$1,
                                          /* [] */0
                                        ], /* :: */[
                                          caml_equal(model[/* route */6], /* Pgn */[id]) ? text$1(id) : a(/* None */0, /* None */0, /* :: */[
                                                  href(_1(sprintf(/* Format */[
                                                                /* String_literal */__(11, [
                                                                    "#/pgn/",
                                                                    /* String */__(2, [
                                                                        /* No_padding */0,
                                                                        /* End_of_format */0
                                                                      ])
                                                                  ]),
                                                                "#/pgn/%s"
                                                              ]), id)),
                                                  /* [] */0
                                                ], /* :: */[
                                                  text$1(id),
                                                  /* [] */0
                                                ]),
                                          /* :: */[
                                            span(/* None */0, /* None */0, /* [] */0, /* :: */[
                                                  text$1(" "),
                                                  /* [] */0
                                                ]),
                                            /* :: */[
                                              span(/* None */0, /* None */0, /* :: */[
                                                    style$2("cursor", "pointer"),
                                                    /* :: */[
                                                      onClick(/* Close_tab */__(8, [id])),
                                                      /* [] */0
                                                    ]
                                                  ], /* :: */[
                                                    text$1("(x)"),
                                                    /* [] */0
                                                  ]),
                                              /* [] */0
                                            ]
                                          ]
                                        ]);
                            }), model[/* pgn */5]))),
              /* [] */0
            ]);
}

function view(model) {
  var game_status$$1 = game_status(model[/* position */0]);
  var interactable$$1;
  interactable$$1 = typeof game_status$$1 === "number" || !game_status$$1.tag ? /* Not_interactable */0 : /* Interactable */[
      model[/* position */0][/* turn */1],
      game_status$$1[0]
    ];
  var match = model[/* route */6];
  return main$3(/* None */0, /* None */0, /* [] */0, /* :: */[
              section(/* None */0, /* None */0, /* :: */[
                    id$1("board"),
                    /* [] */0
                  ], /* :: */[
                    header_nav_view,
                    /* :: */[
                      map$8(board_msg, view$1(interactable$$1, model[/* position */0][/* ar */0], model[/* board */1])),
                      /* :: */[
                        buttons_view,
                        /* [] */0
                      ]
                    ]
                  ]),
              /* :: */[
                section(/* None */0, /* None */0, /* :: */[
                      id$1("game"),
                      /* [] */0
                    ], /* :: */[
                      game_nav_view(model),
                      /* :: */[
                        section(/* None */0, /* None */0, /* :: */[
                              class$prime("scroll"),
                              /* [] */0
                            ], /* :: */[
                              typeof match === "number" ? (
                                  match !== 0 ? tournament_view(model[/* tournament */4]) : move_list_view(model[/* ply */3], model[/* moves */2])
                                ) : pgn_view(match[0], model),
                              /* [] */0
                            ]),
                        /* [] */0
                      ]
                    ]),
                /* [] */0
              ]
            ]);
}

function subscriptions(model) {
  return batch$1(/* :: */[
              map$6(board_msg, subscriptions$1(model[/* board */1])),
              /* :: */[
                downs$1(/* None */0, key_pressed),
                /* [] */0
              ]
            ]);
}

var main = navigationProgram(location_change, /* record */[
      /* init */init,
      /* update */update,
      /* view */view,
      /* subscriptions */subscriptions,
      /* shutdown */(function () {
          return none;
        })
    ]);

var random_button = /* Random_button */0;

var back_button = /* Back_button */1;

var fwd_button = /* Fwd_button */2;


/* buttons_view Not a pure module */

exports.board_msg = board_msg;
exports.random_button = random_button;
exports.back_button = back_button;
exports.fwd_button = fwd_button;
exports.random_move = random_move;
exports.key_pressed = key_pressed;
exports.jump = jump;
exports.tournament_data = tournament_data;
exports.location_change = location_change;
exports.pgn_requested = pgn_requested;
exports.pgn_data = pgn_data;
exports.close_tab = close_tab;
exports.validate_pgn = validate_pgn;
exports.proxy = proxy;
exports.route_of_location = route_of_location;
exports.init = init;
exports.update = update;
exports.move_view = move_view;
exports.home_view = home_view;
exports.move_list_future_view = move_list_future_view;
exports.move_list_view = move_list_view;
exports.buttons_view = buttons_view;
exports.header_nav_view = header_nav_view;
exports.tournament_view = tournament_view;
exports.pgn_view = pgn_view;
exports.game_nav_view = game_nav_view;
exports.view = view;
exports.subscriptions = subscriptions;
exports.main = main;

return exports;

}({}));
