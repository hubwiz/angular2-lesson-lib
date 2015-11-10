"format register";
System.register("angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy", ["angular2/di", "angular2/src/dom/dom_adapter", "angular2/src/render/dom/shadow_dom/shadow_dom_strategy"], function($__export) {
  "use strict";
  var __moduleName = "angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy";
  var __decorate,
      __metadata,
      Injectable,
      DOM,
      ShadowDomStrategy,
      NativeShadowDomStrategy;
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }],
    execute: function() {
      __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
          case 2:
            return decorators.reduceRight(function(o, d) {
              return (d && d(o)) || o;
            }, target);
          case 3:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key)), void 0;
            }, void 0);
          case 4:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key, o)) || o;
            }, desc);
        }
      };
      __metadata = (this && this.__metadata) || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      NativeShadowDomStrategy = $__export("NativeShadowDomStrategy", (function($__super) {
        var $__0 = function() {
          $traceurRuntime.superConstructor($__0).apply(this, arguments);
          ;
        };
        return ($traceurRuntime.createClass)($__0, {prepareShadowRoot: function(el) {
            return DOM.createShadowRoot(el);
          }}, {}, $__super);
      }(ShadowDomStrategy)));
      $__export("NativeShadowDomStrategy", NativeShadowDomStrategy = __decorate([Injectable(), __metadata('design:paramtypes', [])], NativeShadowDomStrategy));
    }
  };
});

System.register("angular2/src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy", ["angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/util"], function($__export) {
  "use strict";
  var __moduleName = "angular2/src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy";
  var isPresent,
      DOM,
      EmulatedUnscopedShadowDomStrategy,
      getContentAttribute,
      getHostAttribute,
      getComponentId,
      shimCssForComponent,
      insertStyleElement,
      EmulatedScopedShadowDomStrategy;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      EmulatedUnscopedShadowDomStrategy = $__m.EmulatedUnscopedShadowDomStrategy;
    }, function($__m) {
      getContentAttribute = $__m.getContentAttribute;
      getHostAttribute = $__m.getHostAttribute;
      getComponentId = $__m.getComponentId;
      shimCssForComponent = $__m.shimCssForComponent;
      insertStyleElement = $__m.insertStyleElement;
    }],
    execute: function() {
      EmulatedScopedShadowDomStrategy = $__export("EmulatedScopedShadowDomStrategy", (function($__super) {
        var EmulatedScopedShadowDomStrategy = function EmulatedScopedShadowDomStrategy(styleHost) {
          $traceurRuntime.superConstructor(EmulatedScopedShadowDomStrategy).call(this, styleHost);
        };
        return ($traceurRuntime.createClass)(EmulatedScopedShadowDomStrategy, {
          processStyleElement: function(hostComponentId, templateUrl, styleEl) {
            var cssText = DOM.getText(styleEl);
            cssText = shimCssForComponent(cssText, hostComponentId);
            DOM.setText(styleEl, cssText);
            this._moveToStyleHost(styleEl);
          },
          _moveToStyleHost: function(styleEl) {
            DOM.remove(styleEl);
            insertStyleElement(this.styleHost, styleEl);
          },
          processElement: function(hostComponentId, elementComponentId, element) {
            if (isPresent(hostComponentId)) {
              var contentAttribute = getContentAttribute(getComponentId(hostComponentId));
              DOM.setAttribute(element, contentAttribute, '');
            }
            if (isPresent(elementComponentId)) {
              var hostAttribute = getHostAttribute(getComponentId(elementComponentId));
              DOM.setAttribute(element, hostAttribute, '');
            }
          }
        }, {}, $__super);
      }(EmulatedUnscopedShadowDomStrategy)));
    }
  };
});

System.register("angular2/render", ["angular2/src/render/dom/compiler/view_loader", "angular2/src/render/dom/shadow_dom/shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/native_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy", "angular2/src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy", "angular2/src/render/api"], function($__export) {
  "use strict";
  var __moduleName = "angular2/render";
  var $__exportNames = {};
  var $__exportNames = {};
  var $__exportNames = {};
  var $__exportNames = {};
  var $__exportNames = {};
  var $__exportNames = {};
  return {
    setters: [function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }],
    execute: function() {}
  };
});
