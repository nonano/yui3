YUI.add("plugin",function(C){function A(D){A.superclass.constructor.apply(this,arguments);}A.NAME="plugin";A.NS="plugin";var B={_handles:null,initializer:function(D){if(D.owner){this._owner=D.owner;}else{}this._handles=[];},destructor:function(){for(i=0;i<this._handles.length;i++){this.detach(this._handles[i]);}},before:function(H,F,E){var D=this._owner,G;E=E||this;if(H in D){G=C.Do.before(F,this._owner,H,E);}else{if(D.on){G=D.on(H,F,E);}}this._handles.push(G);return G;},after:function(H,F,E){var D=this._owner,G;E=E||this;if(H in D){G=C.Do.after(F,this._owner,H,E);}else{if(D.after){G=D.after(H,F,E);}}this._handles.push(G);return G;},detach:function(D){if(D.detach){D.detach(D);}else{C.Do.detach.apply(C.Do,arguments);}},toString:function(){return this.constructor.NAME+"["+this.constructor.NS+"]";}};C.extend(A,C.Base,B);C.Plugin=A;},"@VERSION@",{requires:["base"]});