define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.data = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('markdown-aurelia',['exports', 'marked', 'aurelia-framework'], function (exports, _marked, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MarkdownAurelia = undefined;

  var _marked2 = _interopRequireDefault(_marked);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var MarkdownAurelia = exports.MarkdownAurelia = (_class = function () {
    function MarkdownAurelia() {
      _classCallCheck(this, MarkdownAurelia);

      _initDefineProp(this, 'raw', _descriptor, this);

      this.html = '';
    }

    MarkdownAurelia.prototype.rawChanged = function rawChanged(newValue) {
      this.html = (0, _marked2.default)(newValue);
    };

    return MarkdownAurelia;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'raw', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define([], function () {
    "use strict";

    var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var Endpoints = Endpoints || {};Endpoints["App"] = webpackJsonpEndpoints_App([0], { 10: function _(module, exports, __webpack_require__) {

            var $ = __webpack_require__("jquery");

            var Util = function Util() {};

            Util.prototype.inheritsFrom = function (child, parent) {
                child.prototype = Object.create(parent.prototype);
            };

            Util.prototype.registerPlugin = function (name, Plugin) {
                $.fn[name] = function (options) {
                    return this.each(function () {
                        if (!$.data(this, name)) {
                            $.data(this, name, new Plugin(this, options));
                        }
                    });
                };
            };

            Util.prototype.guid = function () {
                var id = '',
                    i,
                    random;
                for (i = 0; i < 32; i++) {
                    random = Math.random() * 16 | 0;
                    if (i == 8 || i == 12 || i == 16 || i == 20) {
                        id += '-';
                    }
                    id += (i == 12 ? 4 : i == 16 ? random & 3 | 8 : random).toString(16);
                }
                return id;
            };

            module.exports = new Util();
        },

        12: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DialogController = undefined;

            var _lifecycle = __webpack_require__(45);

            var _dialogResult = __webpack_require__(23);

            var DialogController = exports.DialogController = function () {
                function DialogController(renderer, settings, resolve, reject) {

                    this.renderer = renderer;
                    this.settings = settings;
                    this._resolve = resolve;
                    this._reject = reject;
                }

                DialogController.prototype.ok = function ok(output) {
                    return this.close(true, output);
                };

                DialogController.prototype.cancel = function cancel(output) {
                    return this.close(false, output);
                };

                DialogController.prototype.error = function error(message) {
                    var _this = this;

                    return (0, _lifecycle.invokeLifecycle)(this.viewModel, 'deactivate').then(function () {
                        return _this.renderer.hideDialog(_this);
                    }).then(function () {
                        _this.controller.unbind();
                        _this._reject(message);
                    });
                };

                DialogController.prototype.close = function close(ok, output) {
                    var _this2 = this;

                    if (this._closePromise) {
                        return this._closePromise;
                    }

                    this._closePromise = (0, _lifecycle.invokeLifecycle)(this.viewModel, 'canDeactivate').then(function (canDeactivate) {
                        if (canDeactivate) {
                            return (0, _lifecycle.invokeLifecycle)(_this2.viewModel, 'deactivate').then(function () {
                                return _this2.renderer.hideDialog(_this2);
                            }).then(function () {
                                var result = new _dialogResult.DialogResult(!ok, output);
                                _this2.controller.unbind();
                                _this2._resolve(result);
                                return result;
                            });
                        }

                        _this2._closePromise = undefined;
                    }, function (e) {
                        _this2._closePromise = undefined;
                        return Promise.reject(e);
                    });

                    return this._closePromise;
                };

                return DialogController;
            }();
        },

        15: function _(module, exports, __webpack_require__) {

            var $ = __webpack_require__("jquery");
            var Util = __webpack_require__(10);

            function ComponentBase(element, options, pluginName) {
                this.element = element;

                var baseDefaults = {
                    guid: Util.guid()
                };

                var extendedDefaults = $.extend(true, baseDefaults, this.defaults);
                this.config = $.extend(true, extendedDefaults, options);

                this._defaults = extendedDefaults;
                this._name = pluginName;

                this.init();
            }

            module.exports = ComponentBase;
        },

        16: function _(module, exports) {
            var cache = {};

            module.exports = function (str, data) {
                var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + "with(obj){p.push('" + str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");

                return data ? fn(data) : fn;
            };
        },

        18: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AiDialogBody = undefined;

            var _dec, _dec2, _class;

            var _aureliaTemplating = __webpack_require__(0);

            var AiDialogBody = exports.AiDialogBody = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-body'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialogBody() {}) || _class) || _class);
        },

        19: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AiDialogFooter = undefined;

            var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

            var _aureliaTemplating = __webpack_require__(0);

            var _dialogController = __webpack_require__(12);

            function _initDefineProp(target, property, descriptor, context) {
                if (!descriptor) return;
                Object.defineProperty(target, property, {
                    enumerable: descriptor.enumerable,
                    configurable: descriptor.configurable,
                    writable: descriptor.writable,
                    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
                });
            }

            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
                var desc = {};
                Object['ke' + 'ys'](descriptor).forEach(function (key) {
                    desc[key] = descriptor[key];
                });
                desc.enumerable = !!desc.enumerable;
                desc.configurable = !!desc.configurable;

                if ('value' in desc || desc.initializer) {
                    desc.writable = true;
                }

                desc = decorators.slice().reverse().reduce(function (desc, decorator) {
                    return decorator(target, property, desc) || desc;
                }, desc);

                if (context && desc.initializer !== void 0) {
                    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                    desc.initializer = undefined;
                }

                if (desc.initializer === void 0) {
                    Object['define' + 'Property'](target, property, desc);
                    desc = null;
                }

                return desc;
            }

            function _initializerWarningHelper(descriptor, context) {
                throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
            }

            var AiDialogFooter = exports.AiDialogFooter = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-footer'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n\n    <template if.bind="buttons.length > 0">\n      <button type="button" class="btn btn-default" repeat.for="button of buttons" click.trigger="close(button)">${button}</button>\n    </template>\n  </template>\n'), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
                function AiDialogFooter(controller) {

                    _initDefineProp(this, 'buttons', _descriptor, this);

                    _initDefineProp(this, 'useDefaultButtons', _descriptor2, this);

                    this.controller = controller;
                }

                AiDialogFooter.prototype.close = function close(buttonValue) {
                    if (AiDialogFooter.isCancelButton(buttonValue)) {
                        this.controller.cancel(buttonValue);
                    } else {
                        this.controller.ok(buttonValue);
                    }
                };

                AiDialogFooter.prototype.useDefaultButtonsChanged = function useDefaultButtonsChanged(newValue) {
                    if (newValue) {
                        this.buttons = ['Cancel', 'Ok'];
                    }
                };

                AiDialogFooter.isCancelButton = function isCancelButton(value) {
                    return value === 'Cancel';
                };

                return AiDialogFooter;
            }(), _class3.inject = [_dialogController.DialogController], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'buttons', [_aureliaTemplating.bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return [];
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'useDefaultButtons', [_aureliaTemplating.bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            })), _class2)) || _class) || _class);
        },

        20: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AiDialogHeader = undefined;

            var _dec, _dec2, _class, _class2, _temp;

            var _aureliaTemplating = __webpack_require__(0);

            var _dialogController = __webpack_require__(12);

            var AiDialogHeader = exports.AiDialogHeader = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-header'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <button type="button" class="dialog-close" aria-label="Close" if.bind="!controller.settings.lock" click.trigger="controller.cancel()">\n      <span aria-hidden="true">&times;</span>\n    </button>\n\n    <div class="dialog-header-content">\n      <slot></slot>\n    </div>\n  </template>\n'), _dec(_class = _dec2(_class = (_temp = _class2 = function AiDialogHeader(controller) {

                this.controller = controller;
            }, _class2.inject = [_dialogController.DialogController], _temp)) || _class) || _class);
        },

        21: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AiDialog = undefined;

            var _dec, _dec2, _class;

            var _aureliaTemplating = __webpack_require__(0);

            var AiDialog = exports.AiDialog = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialog() {}) || _class) || _class);
        },

        22: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.AttachFocus = undefined;

            var _dec, _class, _class2, _temp;

            var _aureliaTemplating = __webpack_require__(0);

            var AttachFocus = exports.AttachFocus = (_dec = (0, _aureliaTemplating.customAttribute)('attach-focus'), _dec(_class = (_temp = _class2 = function () {
                function AttachFocus(element) {

                    this.value = true;

                    this.element = element;
                }

                AttachFocus.prototype.attached = function attached() {
                    if (this.value && this.value !== 'false') {
                        this.element.focus();
                    }
                };

                AttachFocus.prototype.valueChanged = function valueChanged(newValue) {
                    this.value = newValue;
                };

                return AttachFocus;
            }(), _class2.inject = [Element], _temp)) || _class);
        },

        23: function _(module, exports) {

            "use strict";
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var DialogResult = exports.DialogResult = function DialogResult(cancelled, output) {

                this.wasCancelled = false;

                this.wasCancelled = cancelled;
                this.output = output;
            };
        },

        42: function _(module, exports, __webpack_require__) {

            "use strict";
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var $ = __webpack_require__("jquery");


            var Endpoints = exports.Endpoints = function () {
                function Endpoints(apiBaseUrlParam) {
                    _classCallCheck(this, Endpoints);

                    this.urls = {
                        saveShapeInfo: function saveShapeInfo(selectedDocumentId) {
                            return "/image/" + selectedDocumentId + "/save";
                        },
                        saveRotationInfo: function saveRotationInfo(selectedDocumentId) {
                            return "/image/" + selectedDocumentId + "/saverotationinfo";
                        },
                        getPageCount: function getPageCount(selectedDocumentId) {
                            return "/image/" + selectedDocumentId + "/getpagecount";
                        },
                        getexistingpreviewimages: function getexistingpreviewimages(selectedDocumentId) {
                            return "/image/" + selectedDocumentId + "/getexistingpreviewimages";
                        },
                        getShapes: function getShapes(selectedDocumentId) {
                            return "/image/" + selectedDocumentId + "/getshapes";
                        },
                        previewAvailable: function previewAvailable(selectedDocumentId, index) {
                            return "/image/" + selectedDocumentId + "/previewavailable/" + index;
                        }
                    };
                    this.apiBaseUrl = apiBaseUrlParam;
                }

                Endpoints.prototype.ajaxGetOptions = function ajaxGetOptions(url) {
                    return {
                        method: "GET",
                        url: url,
                        dataType: "json",
                        contentType: "application/json; charset=utf-8"
                    };
                };

                Endpoints.prototype.ajaxPostOptions = function ajaxPostOptions(url, data) {
                    return {
                        method: "POST",
                        url: url,
                        dataType: "json",
                        data: data,
                        contentType: "application/json; charset=utf-8"
                    };
                };

                Endpoints.prototype.makeAjaxCall = function makeAjaxCall(options) {
                    return $.ajax(options);
                };

                Endpoints.prototype.saveShapeInfo = function saveShapeInfo(selectedDocumentId, shapeInfo) {
                    var options = this.ajaxPostOptions("" + this.apiBaseUrl + this.urls.saveShapeInfo(selectedDocumentId), JSON.stringify(shapeInfo));
                    return this.makeAjaxCall(options);
                };

                Endpoints.prototype.saveRotationInfo = function saveRotationInfo(selectedDocumentId, rotationInfo) {
                    var options = this.ajaxPostOptions("" + this.apiBaseUrl + this.urls.saveRotationInfo(selectedDocumentId), JSON.stringify(rotationInfo));
                    return this.makeAjaxCall(options);
                };

                Endpoints.prototype.getPageCount = function getPageCount(selectedDocumentId) {
                    var options = this.ajaxGetOptions("" + this.apiBaseUrl + this.urls.getPageCount(selectedDocumentId));
                    return this.makeAjaxCall(options);
                };

                Endpoints.prototype.getExistingPreviewImages = function getExistingPreviewImages(selectedDocumentId) {
                    var options = this.ajaxGetOptions("" + this.apiBaseUrl + this.urls.getexistingpreviewimages(selectedDocumentId));
                    return this.makeAjaxCall(options);
                };

                Endpoints.prototype.getShapes = function getShapes(selectedDocumentId) {
                    var options = this.ajaxGetOptions("" + this.apiBaseUrl + this.urls.getShapes(selectedDocumentId));
                    return this.makeAjaxCall(options);
                };

                Endpoints.prototype.previewAvailable = function previewAvailable(selectedDocumentId, index) {
                    var options = this.ajaxGetOptions("" + this.apiBaseUrl + this.urls.previewAvailable(selectedDocumentId, index));
                    return this.makeAjaxCall(options);
                };

                return Endpoints;
            }();
        },

        44: function _(module, exports) {

            "use strict";
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var dialogOptions = exports.dialogOptions = {
                lock: true,
                centerHorizontalOnly: false,
                startingZIndex: 1000,
                ignoreTransitions: false
            };
        },

        45: function _(module, exports) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.invokeLifecycle = invokeLifecycle;
            function invokeLifecycle(instance, name, model) {
                if (typeof instance[name] === 'function') {
                    var result = instance[name](model);

                    if (result instanceof Promise) {
                        return result;
                    }

                    if (result !== null && result !== undefined) {
                        return Promise.resolve(result);
                    }

                    return Promise.resolve(true);
                }

                return Promise.resolve(true);
            }
        },

        46: function _(module, exports) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var Renderer = exports.Renderer = function () {
                function Renderer() {}

                Renderer.prototype.getDialogContainer = function getDialogContainer() {
                    throw new Error('DialogRenderer must implement getDialogContainer().');
                };

                Renderer.prototype.showDialog = function showDialog(dialogController) {
                    throw new Error('DialogRenderer must implement showDialog().');
                };

                Renderer.prototype.hideDialog = function hideDialog(dialogController) {
                    throw new Error('DialogRenderer must implement hideDialog().');
                };

                return Renderer;
            }();
        },

        57: function _(module, exports) {

            "use strict";
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Authorization = exports.Authorization = function () {
                function Authorization() {
                    _classCallCheck(this, Authorization);

                    this.cookieName = "authToken";
                }

                Authorization.prototype.getCookie = function getCookie(name) {
                    var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
                    if (match) {
                        return match[1];
                    }
                    return "";
                };

                Authorization.prototype.setCookie = function setCookie(name, value) {
                    document.cookie = name + "=" + value;
                };

                Authorization.prototype.get = function get() {
                    var level = this.getCookie(this.cookieName);
                    return level;
                };

                Authorization.prototype.set = function set(level) {
                    this.setCookie(this.cookieName, level);
                };

                return Authorization;
            }();
        },

        58: function _(module, exports, __webpack_require__) {

            "use strict";
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.exportModal = undefined;

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var _aureliaDialog = __webpack_require__("aurelia-dialog");

            var _aureliaFramework = __webpack_require__("aurelia-framework");

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = undefined && undefined.__metadata || function (k, v) {
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };
            var exportModal = exports.exportModal = function () {
                function exportModal(dialogController) {
                    _classCallCheck(this, exportModal);

                    this.dialogController = dialogController;
                    this.errors = [];
                    this.showRedactions = false;
                    this.showWatermark = false;
                    this.isPagerangeSelected = false;
                    this.init();
                }

                exportModal.prototype.Submit = function Submit() {
                    this.selectedPageChanged();

                    if (this.selectedPages.value === 'pages' && this.pagesToSend[0] >= this.pagesToSend[1]) {
                        this.errors.push("Number from should be smaller than number to");
                        return;
                    }
                    this.errors.pop();
                    this.dialogController.ok({
                        showRedactions: this.showRedactions,
                        showWatermark: this.showWatermark,
                        selectedPages: this.pagesToSend,
                        selectedFormat: this.selectedFormat && this.selectedFormat.value
                    });
                };

                exportModal.prototype.Close = function Close() {
                    this.dialogController.cancel();
                };

                exportModal.prototype.selectedPageChanged = function selectedPageChanged() {
                    switch (this.selectedPages.value) {
                        case 'all':
                            this.isPagerangeSelected = false;
                            this.pagesToSend = [1, this.pageCount];
                            break;
                        case 'pages':
                            this.isPagerangeSelected = true;
                            this.pagesToSend = [parseInt(this.pageFrom), parseInt(this.pageTo)];
                            break;
                        case 'current':
                            this.pagesToSend = [this.currentPage, this.currentPage];
                            this.isPagerangeSelected = false;
                            break;
                    }
                };

                exportModal.prototype.init = function init() {
                    this.sr = this.dialogController.settings.sr;
                    this.pages = [{ value: 'all', name: this.sr.allPages }, { value: 'pages', name: this.sr.pages }, { value: 'current', name: this.sr.currentPage }];
                    this.selectedPages = this.pages[0];
                    this.formats = [{ value: 'pdf', name: this.sr.pdfFormat }, { value: 'tiff', name: this.sr.tiffFormat }];
                    this.selectedFormat = this.formats[0];
                    this.currentPage = this.dialogController.settings.currentPage;
                    this.pageCount = this.dialogController.settings.pageCount;
                    this.showWatermarkDisabled = !this.dialogController.settings.permissions.toggleWatermark;
                    this.showRedactionsDisabled = !this.dialogController.settings.permissions.canSave;
                };

                return exportModal;
            }();
            exports.exportModal = exportModal = __decorate([(0, _aureliaFramework.useView)("transcend/components/modal/exportModal.html"), __metadata('design:paramtypes', [typeof (_a = typeof _aureliaDialog.DialogController !== 'undefined' && _aureliaDialog.DialogController) === 'function' && _a || Object])], exportModal);
            var _a;
        },

        59: function _(module, exports, __webpack_require__) {

            "use strict";
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.saveModal = undefined;

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var _aureliaDialog = __webpack_require__("aurelia-dialog");

            var _aureliaFramework = __webpack_require__("aurelia-framework");

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = undefined && undefined.__metadata || function (k, v) {
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };
            var saveModal = exports.saveModal = function () {
                function saveModal(dialogController) {
                    _classCallCheck(this, saveModal);

                    this.dialogController = dialogController;
                    this.sr = dialogController.settings.sr;
                }

                saveModal.prototype.submit = function submit(save) {
                    this.dialogController.ok(save);
                };

                saveModal.prototype.Close = function Close() {
                    this.dialogController.cancel();
                };

                return saveModal;
            }();
            exports.saveModal = saveModal = __decorate([(0, _aureliaFramework.useView)("transcend/components/modal/saveModal.html"), __metadata('design:paramtypes', [typeof (_a = typeof _aureliaDialog.DialogController !== 'undefined' && _aureliaDialog.DialogController) === 'function' && _a || Object])], saveModal);
            var _a;
        },

        60: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Printer = undefined;

            var _transcendEndpoints = __webpack_require__(42);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var $ = __webpack_require__("jquery");

            var Printer = exports.Printer = function () {
                function Printer(selectedDocumentIdParam, optionsParam) {
                    _classCallCheck(this, Printer);

                    this.selectedDocumentId = selectedDocumentIdParam;
                    this.options = optionsParam;
                }

                Printer.prototype.printDocument = function printDocument(rotatedPages) {
                    var _this = this;

                    this.rotatedPages = rotatedPages;

                    $('#sn-docpreview-print-iframe').remove();
                    $('body').append('<div class="loading-print-view"><img src="' + this.options.placeholderImgPath + '" /><br />loading</div>');
                    var endpoints = new _transcendEndpoints.Endpoints(this.options.dataTransmission.apiBaseUrl);
                    endpoints.getExistingPreviewImages(this.selectedDocumentId).always(function (data) {
                        return _this.makePrintVersion(data);
                    });
                };

                Printer.prototype.pageIsRotated = function pageIsRotated(pageNumber) {
                    for (var _iterator = this.rotatedPages, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref;

                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }

                        var rotatedPage = _ref;

                        if (pageNumber === parseInt(rotatedPage.pageNum) && rotatedPage.options.degree !== 0) {
                            return parseInt(rotatedPage.options.degree);
                        }
                    }
                    return -1;
                };

                Printer.prototype.isIe = function isIe(userAgent) {
                    userAgent = userAgent || navigator.userAgent;
                    return userAgent.indexOf('MSIE ') > -1 || userAgent.indexOf('Trident/') > -1 || userAgent.indexOf('Edge') > -1;
                };

                Printer.prototype.makePrintVersion = function makePrintVersion(data) {
                    var _this2 = this;

                    if (!data) {
                        throw new Error('Reply is incorrect for preview images request.');
                    }
                    var picsHtml = this.createHtmlForPictures(data);

                    var hiddFrameElement = this.createHiddenIframe();
                    document.body.appendChild(hiddFrameElement);

                    var doc = hiddFrameElement.contentDocument || hiddFrameElement.contentWindow.document;
                    doc.open();
                    doc.write(picsHtml);
                    doc.close();
                    this.frame = document.getElementById("sn-docpreview-print-iframe");
                    $(doc).ready(function () {
                        $('#sn-docpreview-print-iframe').contents().find("img").each(function (index, value) {
                            if (_this2.isIe) {
                                $(value).css("height", "90%");
                            } else {
                                $(value).css("height", "95%");
                            }
                        });
                    });
                    this.printHandlers(hiddFrameElement);
                    hiddFrameElement.onload = function () {
                        _this2.setPrint();
                    };
                    $('.loading-print-view').remove();
                };

                Printer.prototype.createHiddenIframe = function createHiddenIframe() {
                    var hiddFrameElement = document.createElement("iframe");
                    hiddFrameElement.id = 'sn-docpreview-print-iframe';
                    hiddFrameElement.style.visibility = "hidden";
                    hiddFrameElement.style.position = "fixed";
                    hiddFrameElement.style.right = "0";
                    hiddFrameElement.style.bottom = "0";
                    hiddFrameElement.style.width = '100%';
                    hiddFrameElement.style.height = '100%';
                    return hiddFrameElement;
                };

                Printer.prototype.setPrint = function setPrint() {
                    var _this3 = this;

                    this.frame.contentWindow.onbeforeunload = function () {
                        _this3.closePrint();
                    };
                    this.frame.contentWindow.focus();
                    this.frame.contentWindow.print();
                };

                Printer.prototype.closePrint = function closePrint() {
                    $('.loading-print-view').remove();
                    document.body.removeChild(this.frame);
                };

                Printer.prototype.createHtmlForPictures = function createHtmlForPictures(images) {
                    var $watermarkIcon = $('.sn-icon-nowatermark');
                    var IsWatermarked = typeof $watermarkIcon !== 'undefined' && $watermarkIcon && $watermarkIcon.length > 0;
                    var pics = '<style type="text/css">body{text-align: center;}</style>';
                    for (var _iterator2 = images, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                        var _ref2;

                        if (_isArray2) {
                            if (_i2 >= _iterator2.length) break;
                            _ref2 = _iterator2[_i2++];
                        } else {
                            _i2 = _iterator2.next();
                            if (_i2.done) break;
                            _ref2 = _i2.value;
                        }

                        var image = _ref2;

                        var ind = this.pageIsRotated(image.Index);
                        if (typeof ind !== 'undefined' && ind !== -1) {
                            if (ind === -90) {
                                ind = 270;
                            }
                            if (IsWatermarked) {
                                pics += '<p class="break"><img src="' + image.PreviewAvailable + '?watermark=true&rotation=' + ind + '" /></p>';
                            } else {
                                pics += '<p class="break"><img src="' + image.PreviewAvailable + '?rotation=' + ind + '" /></p>';
                            }
                        } else {
                            if (IsWatermarked) {
                                pics += '<p class="break"><img src="' + image.PreviewAvailable + '?watermark=true" /></p>';
                            } else {
                                pics += '<p class="break"><img src="' + image.PreviewAvailable + '" /></p>';
                            }
                        }
                    }
                    return pics;
                };

                Printer.prototype.printHandlers = function printHandlers(hiddFrameElement) {
                    var _this4 = this;

                    if (hiddFrameElement.contentWindow && hiddFrameElement.contentWindow.matchMedia) {
                        var mediaQueryList = hiddFrameElement.contentWindow.matchMedia('print');
                        mediaQueryList.addListener(function (mql) {
                            if (mql.matches) {
                                _this4.beforePrint();
                            } else {
                                _this4.afterPrint();
                                _this4.closePrint();
                            }
                        });
                    }

                    $(hiddFrameElement.contentWindow).on("beforeprint.snDocViewer", function () {
                        return _this4.beforePrint();
                    });
                    $(hiddFrameElement.contentWindow).on("afterprint.snDocViewer", function () {
                        _this4.afterPrint();
                        _this4.closePrint();
                    });
                };

                Printer.prototype.beforePrint = function beforePrint() {
                    this.beforePrintFunc && this.beforePrintFunc();
                };

                Printer.prototype.afterPrint = function afterPrint() {
                    this.afterPrintFunc && this.afterPrintFunc();
                };

                return Printer;
            }();
        },

        61: function _(module, exports, __webpack_require__) {

            "use strict";

            (function (regeneratorRuntime) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.TranscendViewer = undefined;

                var _transcendEndpoints = __webpack_require__(42);

                var _transcendPrinter = __webpack_require__(60);

                var _exportModal = __webpack_require__(58);

                var _saveModal = __webpack_require__(59);

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            result.done ? resolve(result.value) : new P(function (resolve) {
                                resolve(result.value);
                            }).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments)).next());
                    });
                };
                var $ = __webpack_require__("jquery");

                var TranscendViewer = exports.TranscendViewer = function () {
                    function TranscendViewer(dialogService) {
                        _classCallCheck(this, TranscendViewer);

                        this.dialogService = dialogService;
                        this.options = null;
                        this.basicOptions = null;
                        this.$viewer = null;
                        this.$basicViewer = null;
                        this.viewer = null;
                        this.requests = [];
                        this.documentIdCollection = null;
                        this.documentOpened = null;
                        this.loadedShapes = {};
                        this.isErrorPage = false;
                        this.overlay = $('<div class="overlay"></div>');
                        this.appendPreviewPostfix = null;
                        this.wm = false;

                        this.isLoaderVisible = false;
                    }

                    TranscendViewer.prototype.changeSelectedDocumentId = function changeSelectedDocumentId(newId) {
                        this.basicOptions.isFullscreen = this.isViewerFullscreen();
                        this.selectedDocumentId = newId;
                        this.options.callbacks && this.options.callbacks.selectedDocumentChange && this.options.callbacks.selectedDocumentChange(newId);
                        this.hideViewer();
                        this.basicOptions.selectedDocumentId = this.selectedDocumentId;
                        this.options.title = $('.docViewerLink[data-id="' + newId + '"]').text();
                        this.$viewer.show();
                        this.$viewer.removeData('snDocViewer');
                        this.initializeViewer(this.$viewer, this.basicOptions);
                    };

                    TranscendViewer.prototype.initializeOptions = function initializeOptions() {
                        this.options.SR = $.extend({
                            DocViewerCloseTitle: 'Close',
                            PreviewGenerationFailed: 'Preveiw generation failed'
                        }, this.options.SR);
                        this.options.callbacks = $.extend({
                            beforeClose: null,

                            afterClose: null
                        }, this.options.callbacks);
                        this.selectedDocumentId = this.options.selectedDocumentId || 1;
                    };

                    TranscendViewer.prototype.displayErrorMessage = function displayErrorMessage(errorMsg) {
                        this.isErrorPage = true;
                        var errorBlock = '<div class="sn-viewer-errorDiv"><h2 class ="errorTxt">' + errorMsg + '</h2></div>';
                        this.$viewer.html(errorBlock);
                    };

                    TranscendViewer.prototype.isViewerFullscreen = function isViewerFullscreen() {
                        return this.$viewer.data('snDocViewer').isFullscreen();
                    };

                    TranscendViewer.prototype.setViewerDisplayMode = function setViewerDisplayMode(isFullscreen) {
                        if (isFullscreen === true) {
                            setTimeout(function () {
                                var $viewerka = $('.sn-docpreview-container').parent();
                                if ($viewerka.length > 0) {
                                    $viewerka.data('snDocViewer').enterFullscreenMode($('.sn-input-jumptopage').val());
                                } else {
                                    this.$viewer.addClass('fullScreen');
                                }
                            }, 500);
                        } else {
                            this.$viewer.removeClass('fullScreen');
                        }
                    };

                    TranscendViewer.prototype.hideViewer = function hideViewer() {
                        if (this.viewer && this.viewer.destroy) {
                            this.viewer.destroy();
                            this.viewer = null;
                        }
                        this.$viewer.css('display', 'none');
                        $('.sn-doc-title').remove();
                    };

                    TranscendViewer.prototype.toggleWatermark = function toggleWatermark() {
                        var $this = $('#buttontoggleWatermark').children('span');
                        if ($this.hasClass('sn-icon-watermark')) {
                            $this.removeClass('sn-icon-watermark').addClass('sn-icon-nowatermark active').attr('title', 'Hide watermark');
                            this.switchWatermark(true);
                        } else {
                            $this.removeClass('sn-icon-nowatermark active').addClass('sn-icon-watermark').attr('title', 'Show watermark');
                            this.switchWatermark(false);
                        }
                    };

                    TranscendViewer.prototype.openModalForExport = function openModalForExport() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var sr, response;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            sr = {
                                                title: 'Export Document',
                                                pagesTitle: 'Pages',
                                                from: 'From:',
                                                to: 'To:',
                                                formatTitle: 'Format',
                                                watermarkTitle: 'Watermark',
                                                showWatermark: 'Show watermark',
                                                redactionTitle: 'Redactions',
                                                showRedactions: 'Show redactions',
                                                cancelBtn: 'Cancel',
                                                submitBtn: 'Submit',
                                                allPages: 'All Pages',
                                                pages: 'Pages',
                                                currentPage: 'Current Page',
                                                pdfFormat: 'PDF',
                                                tiffFormat: 'TIFF'
                                            };
                                            _context.next = 3;
                                            return this.dialogService.open({
                                                viewModel: _exportModal.exportModal,
                                                currentPage: this.viewer.currentPage(),
                                                pageCount: this.options.previewCount,
                                                permissions: this.options.permissionInfo,
                                                sr: sr
                                            });

                                        case 3:
                                            response = _context.sent;

                                            if (!response.wasCancelled) {
                                                window.location.href = this.options.dataTransmission.apiBaseUrl + '/document/export/' + this.selectedDocumentId + '/?showRedactions=' + response.output.showRedactions + '&showWatermark=' + response.output.showWatermark + '&pageNumberFrom=' + response.output.selectedPages[0] + '&pageNumberTo=' + response.output.selectedPages[1] + '&selectedFormat=' + response.output.selectedFormat;
                                            }

                                        case 5:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    };

                    TranscendViewer.prototype.download = function download() {
                        window.location.href = this.options.dataTransmission.apiBaseUrl + '/document/download/' + this.selectedDocumentId;
                    };

                    TranscendViewer.prototype.switchWatermark = function switchWatermark(enabled) {
                        var self = this;
                        var $images;
                        if (this.appendPreviewPostfix && typeof this.appendPreviewPostfix == 'function') {
                            this.wm = enabled;
                            $images = $('img[data-loaded=true]', $('.sn-docpreview-container'));
                            var wmParam = '&watermark=true';

                            for (var i = 0; i < $images.length; i++) {
                                var $img = $($images[i]);
                                var oldsrc = $img.attr('src');
                                var rotationParam = '';
                                var rotation = $img.parent().attr('data-degree');
                                if (typeof rotation !== 'undefined' && parseInt(rotation) !== 0) rotationParam = '&rotation=' + rotation;
                                var path;

                                if (enabled) {
                                    path = self.appendPreviewPostfix(oldsrc.substring(0, oldsrc.indexOf('?')), true, true, rotationParam);
                                    $img.attr('src', path);
                                    self.wm = true;
                                } else {
                                    path = self.appendPreviewPostfix(oldsrc.substring(0, oldsrc.indexOf('?')), false, true, rotationParam);
                                    $img.attr('src', path);
                                    self.wm = false;
                                }
                            }
                        }
                    };

                    TranscendViewer.prototype.getAvailableFunctions = function getAvailableFunctions(permissionInfo) {
                        var _this = this;

                        var self = this;
                        return {
                            export: {
                                action: function action() {
                                    return _this.openModalForExport();
                                },
                                title: 'Export',
                                icon: '<span class="sn-icon sn-icon-download"></span>',
                                type: 'dataRelated',
                                permission: permissionInfo.canDownload,
                                touch: false
                            },
                            print: {
                                action: function action() {
                                    return _this.printer.printDocument(_this.viewer.saveShapes().PageAttributes);
                                },
                                title: 'Print',
                                icon: '<span class="sn-icon sn-icon-print"></span>',
                                type: 'dataRelated',
                                permission: permissionInfo.canPrint,
                                touch: false
                            },
                            toggleWatermark: {
                                action: function action() {
                                    return _this.toggleWatermark();
                                },
                                title: 'Show watermark',
                                icon: '<span class="sn-icon sn-icon-watermark"></span>',
                                type: 'dataRelated',
                                permission: permissionInfo.toggleWatermark,
                                touch: false
                            },
                            save: {
                                action: function action() {
                                    self.endpoints.saveShapeInfo(self.selectedDocumentId, self.viewer.saveShapes());
                                },
                                title: 'Save',
                                icon: '<span class="sn-icon sn-icon-save">Save</span>',
                                type: 'dataRelated',
                                permission: permissionInfo.canSave,
                                touch: false
                            },
                            download: {
                                action: function action() {
                                    return _this.download();
                                },
                                title: 'Download',
                                icon: '<span class="sn-icon sn-icon-download"></span>',
                                type: 'dataRelated',
                                permission: permissionInfo.canDownload,
                                touch: false,
                                bindTo: this
                            }
                        };
                    };

                    TranscendViewer.prototype.openModalForSave = function openModalForSave(documentId) {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                            var stringResources, response;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            stringResources = {
                                                title: 'Save?',
                                                doYouWantToSave: 'Do you want to save ' + this.options.title + '?',
                                                saveBtn: 'Save',
                                                dontSaveBtn: 'Don\'t save',
                                                cancelBtn: 'Cancel'
                                            };
                                            _context2.next = 3;
                                            return this.dialogService.open({ viewModel: _saveModal.saveModal, sr: stringResources });

                                        case 3:
                                            response = _context2.sent;

                                            if (!response.wasCancelled) {
                                                _context2.next = 6;
                                                break;
                                            }

                                            return _context2.abrupt('return');

                                        case 6:
                                            if (response.output) {
                                                this.endpoints.saveShapeInfo(this.selectedDocumentId, this.viewer.saveShapes());
                                                this.changeSelectedDocumentId(documentId);
                                            } else {
                                                this.viewer.setUnsaved(false);
                                                this.changeSelectedDocumentId(documentId);
                                            }

                                        case 7:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        }));
                    };

                    TranscendViewer.prototype.initializeFunctions = function initializeFunctions() {
                        var self = this;
                        var initializeHelper = {
                            getPagerObject: function getPagerObject() {
                                var pagerHelper = {
                                    firstDocumentClickAction: function firstDocumentClickAction() {
                                        if (!$(this).children('span').hasClass('disabled')) {
                                            if (JSON.stringify(self.loadedShapes) !== JSON.stringify(self.viewer.getAllShapes())) {
                                                self.openModalForSave(self.documentIdCollection[0]);
                                            } else {
                                                self.changeSelectedDocumentId(self.documentIdCollection[0]);
                                            }
                                        }
                                    },
                                    previousDocumentClickAction: function previousDocumentClickAction() {
                                        if (!$(this).children('span').hasClass('disabled')) {
                                            var currentIndex = self.documentIdCollection.indexOf(self.selectedDocumentId);
                                            if (JSON.stringify(self.loadedShapes) !== JSON.stringify(self.viewer.getAllShapes())) {
                                                self.openModalForSave(self.documentIdCollection[currentIndex - 1]);
                                            } else {
                                                self.changeSelectedDocumentId(self.documentIdCollection[currentIndex - 1]);
                                            }
                                        }
                                    },
                                    nextDocumentClickAction: function nextDocumentClickAction() {
                                        if (!$(this).children('span').hasClass('disabled')) {
                                            var currentIndex = self.documentIdCollection.indexOf(self.selectedDocumentId);
                                            if (JSON.stringify(self.loadedShapes) !== JSON.stringify(self.viewer.getAllShapes())) {
                                                self.openModalForSave(self.documentIdCollection[currentIndex + 1]);
                                            } else {
                                                self.changeSelectedDocumentId(self.documentIdCollection[currentIndex + 1]);
                                            }
                                        }
                                    },
                                    lastDocumentClickAction: function lastDocumentClickAction() {
                                        if (!$(this).children('span').hasClass('disabled')) {
                                            if (JSON.stringify(self.loadedShapes) !== JSON.stringify(self.viewer.getAllShapes())) {
                                                self.openModalForSave(self.documentIdCollection[self.documentIdCollection.length - 1]);
                                            } else {
                                                self.changeSelectedDocumentId(self.documentIdCollection[self.documentIdCollection.length - 1]);
                                            }
                                        }
                                    }
                                };
                                return {
                                    firstdocument: {
                                        action: self.options.firstDocumentClick && self.options.firstDocumentClick.action || pagerHelper.firstDocumentClickAction,
                                        title: self.options.firstDocumentClick && self.options.firstDocumentClick.title || 'First document',
                                        icon: '<span id="firstDoc" class="sn-icon ' + (self.options.firstDocumentClick && self.options.firstDocumentClick.icon) + ' paging"></span>',
                                        type: self.options.firstDocumentClick && self.options.firstDocumentClick.type || 'dataRelated',
                                        permission: self.options.firstDocumentClick && self.options.firstDocumentClick.permission || true,
                                        touch: self.options.firstDocumentClick && self.options.firstDocumentClick.touch || true
                                    },
                                    prevdocument: {
                                        action: self.options.previousDocumentClick && self.options.previousDocumentClick.action || pagerHelper.previousDocumentClickAction,
                                        title: self.options.previousDocumentClick && self.options.previousDocumentClick.title || 'Previous document',
                                        icon: '<span id="prevDoc" class="sn-icon ' + (self.options.previousDocumentClick && self.options.previousDocumentClick.icon) + ' paging"></span>',
                                        type: self.options.previousDocumentClick && self.options.previousDocumentClick.type || 'dataRelated',
                                        permission: self.options.previousDocumentClick && self.options.previousDocumentClick.permission || true,
                                        touch: self.options.previousDocumentClick && self.options.previousDocumentClick.touch || true
                                    },
                                    nextdocument: {
                                        action: self.options.nextDocumentClick && self.options.nextDocumentClick.action || pagerHelper.nextDocumentClickAction,
                                        title: self.options.nextDocumentClick && self.options.nextDocumentClick.title || 'Next document',
                                        icon: '<span id="nextDoc" class="sn-icon ' + (self.options.nextDocumentClick && self.options.nextDocumentClick.icon) + ' paging"></span>',
                                        type: self.options.nextDocumentClick && self.options.nextDocumentClick.type || 'dataRelated',
                                        permission: self.options.nextDocumentClick && self.options.nextDocumentClick.permission || true,
                                        touch: self.options.nextDocumentClick && self.options.nextDocumentClick.touch || true
                                    },
                                    lastdocument: {
                                        action: self.options.lastDocumentClick && self.options.lastDocumentClick.action || pagerHelper.lastDocumentClickAction,
                                        title: self.options.lastDocumentClick && self.options.lastDocumentClick.title || 'Last document',
                                        icon: '<span id="lastDoc" class="sn-icon ' + (self.options.lastDocumentClick && self.options.lastDocumentClick.icon) + ' paging"></span>',
                                        type: self.options.lastDocumentClick && self.options.lastDocumentClick.type || 'dataRelated',
                                        permission: self.options.lastDocumentClick && self.options.lastDocumentClick.permission || true,
                                        touch: self.options.lastDocumentClick && self.options.lastDocumentClick.touch || true
                                    }
                                };
                            },
                            initializeDataTransmissionUrls: function initializeDataTransmissionUrls() {
                                var apiBaseUrl = self.options.dataTransmission.apiBaseUrl;
                                if (apiBaseUrl) {
                                    var isAbsoluteUrlRegex = /^(?:[a-z]+:)?\/\//i;
                                    for (var transmissionProp in self.options.dataTransmission) {
                                        if (transmissionProp !== 'apiBaseUrl' && self.options.dataTransmission.hasOwnProperty(transmissionProp)) {
                                            var url = self.options.dataTransmission[transmissionProp].url;
                                            if (!isAbsoluteUrlRegex.test(url)) {
                                                self.options.dataTransmission[transmissionProp].url = apiBaseUrl + '/' + url;
                                            }
                                        }
                                    }
                                }
                            },

                            Request: function Request(p, id, dead) {
                                this.p = p;
                                this.id = id;
                                this.dead = dead;
                            },
                            addPromiseToArray: function addPromiseToArray(p, id) {
                                var req = new initializeHelper.Request(p, id, false);
                                self.requests.push(req);
                                self.requests[self.requests.length - 1].p = p;
                                self.requests[self.requests.length - 1].idx = id;
                                self.requests[self.requests.length - 1].dead = false;
                            },
                            getImage: function getImage(item) {
                                var promise = $.Deferred();
                                initializeHelper.addPromiseToArray(promise, item);
                                self.previewExists(item).done(function (data) {
                                    promise.resolve(data);
                                });
                                return promise;
                            },

                            toolbarDropDownHandler: function toolbarDropDownHandler() {
                                var $openedToolbarDropdown;
                                var $fittTools = $('.sn-icon-originalsize, .sn-icon-fittowindow, .sn-icon-fittoheight, .sn-icon-fittowidth');
                                var $zoomTools = $('.sn-icon-zoomout, .sn-icon-zoomin, .sn-icon-rubberband');
                                $('.sn-zooming-tools').each(function () {
                                    $(this).find($fittTools).parent().wrapAll('<div id="fittingToolsContainer" class="fitting-tools-container"/>');
                                    $(this).find($zoomTools).parent().wrapAll('<div id="zoomingToolsContainer" class="zooming-tools-container"/>');
                                });
                                var $rotateContainer = $('.sn-viewer-rotate');
                                var $fittContainer = $('#fittingToolsContainer');
                                var $zoomContainer = $('#zoomingToolsContainer');
                                $fittContainer.css({ "margin-left": '123px' });
                                $zoomContainer.css({ "margin-left": '209px' });
                                $rotateContainer.before("<span class='rotate-tool-collector sn-icon'>ROTATE</span>");
                                $fittContainer.before("<span class='fitting-tool-collector sn-icon'>FIT</span>");
                                $zoomContainer.before("<span class='zooming-tool-collector sn-icon'>ZOOM</span>");
                                var dropdownHandler = function dropdownHandler($newDropdownContainer) {
                                    if ($newDropdownContainer) {
                                        $newDropdownContainer.show();
                                    }
                                    if ($openedToolbarDropdown && $openedToolbarDropdown.length > 0) {
                                        $openedToolbarDropdown.hide();
                                    }
                                    if (!$newDropdownContainer || $newDropdownContainer.is(':hidden')) {
                                        $openedToolbarDropdown = null;
                                    } else {
                                        $openedToolbarDropdown = $newDropdownContainer;
                                    }
                                };
                                $(document.body).on('click', function (event) {
                                    var $dropdownContainer = $(event.target).next();
                                    if ($dropdownContainer.is($rotateContainer) || $dropdownContainer.is($fittContainer) || $dropdownContainer.is($zoomContainer)) {
                                        dropdownHandler($dropdownContainer);
                                    } else {
                                        dropdownHandler(null);
                                    }
                                });
                                $rotateContainer.add($fittContainer).add($zoomContainer).children('span').each(function () {
                                    var text = $(this).attr('title');
                                    $(this).children().append('<span class="button-title"> ' + text + '</span>');
                                });
                                $rotateContainer.hide();
                                $fittContainer.hide();
                                $zoomContainer.hide();

                                $rotateContainer.append('<span class="saveRotation" title="Save rotation"><span class="sn-icon sn-icon-saverotate saverotation">Save rotation<span/></span>');
                                $rotateContainer.children('.saveRotation').click(function () {
                                    self.endpoints.saveRotationInfo(self.selectedDocumentId, {
                                        rotationInfo: self.viewer.saveShapes().PageAttributes
                                    });
                                });
                            },
                            pagerHandler: function pagerHandler() {
                                $('#viewerContainer').on('mouseover', function () {
                                    $('.sn-docpreview-container').mouseover(function () {
                                        $('.sn-paging-tools').fadeIn(400);
                                        $('.sn-doc-title').fadeIn(400);
                                    });
                                    $('.sn-docpreview-container').mouseleave(function () {
                                        $('.sn-paging-tools').fadeOut(400);
                                        $('.sn-doc-title').fadeOut(400);
                                    });
                                });
                            },
                            closeXHandler: function closeXHandler() {
                                var $closeButton = $('<button class="closeDocPreview" title="' + self.options.SR.DocViewerCloseTitle + '">&nbsp</button>').on('click.di9', function () {
                                    self.options.callbacks.beforeClose && self.options.callbacks.beforeClose();
                                    self.hideViewer();
                                    self.options.callbacks.afterClose && self.options.callbacks.afterClose();
                                });
                                $closeButton.appendTo(self.viewer.getContainer());
                            }
                        };
                        if (self.options.documentIdCollection) {
                            self.documentIdCollection = self.options.documentIdCollection;
                        }
                        if (self.options.enableDocumentPager) {
                            var functions = $.extend(initializeHelper.getPagerObject(), self.options.functions);
                            self.options.functions = functions;
                        }
                        if (self.options.dataTransmission) {
                            if (self.options.dataTransmission.getExistingPreviewImages && self.options.dataTransmission.getExistingPreviewImages.url) {
                                self.options.getExistingPreviewImages = function () {
                                    return self.endpoints.getExistingPreviewImages(self.selectedDocumentId);
                                };
                            }
                        }
                        self.documentOpened = self.options.callbacks.documentOpened;
                        self.options.callbacks.documentOpened = function () {
                            initializeHelper.toolbarDropDownHandler();
                            initializeHelper.pagerHandler();
                            if (self.options.needCloseButton) {
                                initializeHelper.closeXHandler();
                            }
                            if (self.options.thumbnailDirection) {
                                if (self.options.thumbnailDirection === 'vertical') {
                                    $('.sn-doc-thumbnails').addClass('vertical');
                                } else {
                                    $('.sn-doc-thumbnails').addClass('horizontal');
                                }
                            }
                            if (self.options.enableDocumentPager) {
                                var currentDocNum = self.documentIdCollection.indexOf(self.selectedDocumentId) + 1;
                                var $currentInput = $("<input type='text' id='currentDocNum' value='" + currentDocNum + "'/>");
                                var $documentCountSpan = $("<span type='text' id='documentCountContainer'>/" + self.documentIdCollection.length + '</span>');
                                var $previousDocumentContainer = $('#prevDoc').parent('span');
                                $currentInput.insertAfter($previousDocumentContainer);
                                $documentCountSpan.insertAfter($currentInput);
                                $currentInput.on('blur', function () {
                                    $currentInput.val(currentDocNum);
                                });
                                $currentInput.keydown(function (e) {
                                    if (e.keyCode === 13) {
                                        if ($currentInput.val() > self.documentIdCollection.length) {
                                            $currentInput.val(self.documentIdCollection.length);
                                            return;
                                        }
                                        var selectedDocInd = parseInt($currentInput.val(), 10) - 1;
                                        self.changeSelectedDocumentId(self.documentIdCollection[selectedDocInd]);
                                    }

                                    if ($.inArray(e.keyCode, [46, 8, 9, 27, 110, 190]) !== -1 || e.keyCode === 65 && e.ctrlKey === true || e.keyCode >= 35 && e.keyCode <= 39) {
                                        return;
                                    }

                                    if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
                                        e.preventDefault();
                                    }
                                });

                                var $firstDoc = $('#firstDoc');
                                var $prevDoc = $('#prevDoc');
                                var $nextDoc = $('#nextDoc');
                                var $lastDoc = $('#lastDoc');
                                if (currentDocNum === self.documentIdCollection.length) {
                                    $firstDoc.removeClass('disabled');
                                    $prevDoc.removeClass('disabled');
                                    $nextDoc.addClass('disabled');
                                    $lastDoc.addClass('disabled');
                                }
                                if (currentDocNum === self.documentIdCollection[0]) {
                                    $firstDoc.addClass('disabled');
                                    $prevDoc.addClass('disabled');
                                    $nextDoc.removeClass('disabled');
                                    $lastDoc.removeClass('disabled');
                                }
                            }
                            var $container = self.viewer.getContainer();
                            $container.find('.sn-doc-thumbnails').css('overflow', 'scroll');
                            $container.find('.sn-doc-thumbnails').css('height', '600px');
                        };
                        self.options.getImage = initializeHelper.getImage;
                    };


                    TranscendViewer.prototype.initByGetPageCount = function initByGetPageCount() {
                        var deferred = $.Deferred();
                        var self = this;
                        this.endpoints.getPageCount(this.selectedDocumentId).then(function (previewCount) {
                            self.enableDefaultDisplay(true);
                            switch (previewCount) {
                                case -1:
                                    setTimeout(function () {
                                        self.initByGetPageCount();
                                    }, self.options.pollTimeout || 3000);
                                    break;
                                case -3:
                                    self.enableDefaultDisplay(false);
                                    self.displayErrorMessage(self.options.SR.PreviewGenerationFailed);
                                    break;
                                default:
                                    self.options.previewCount = previewCount;
                                    self.pollUntilPreviewAvailable();
                                    self.pollUntilGetExistingPreviewImage(previewCount).done(function (data) {
                                        deferred.resolve(data);
                                    });
                            }
                        });
                        return deferred;
                    };

                    TranscendViewer.prototype.enableDefaultDisplay = function enableDefaultDisplay(isEnable) {
                        var $viewerContainer = $('#viewerContainer');
                        var loader = '<div class="loader"><h3>Loading is in progress</h3><br/><img src="/images/ajax-loader.gif"/></div>';
                        isEnable && $viewerContainer.html(loader) || $('.loader').remove();
                    };

                    TranscendViewer.prototype.previewExists = function previewExists(index) {
                        if (!index) {
                            index = 1;
                        }
                        var promise = $.Deferred();
                        if (this.viewer && this.viewer.pageCount && this.viewer.pageCount() < index) return promise;
                        var self = this;
                        this.endpoints.previewAvailable(this.selectedDocumentId, index).then(function (msg) {
                            if (msg && msg.PreviewAvailable !== null) {
                                promise.resolve(msg);
                            } else {
                                if (self.$viewer.is(':visible')) setTimeout(function () {
                                    self.previewExists(index).done(function (msg) {
                                        if (msg.PreviewAvailable) {
                                            promise.resolve(msg);
                                        } else {
                                            promise.reject();
                                        }
                                    }).fail(function () {
                                        promise.reject();
                                    });
                                }, 5000);
                            }
                        }, function () {
                            promise.reject();
                        });
                        return promise;
                    };

                    TranscendViewer.prototype.pollUntilPreviewAvailable = function pollUntilPreviewAvailable() {
                        this.previewExists(1);
                    };

                    TranscendViewer.prototype.pollUntilGetExistingPreviewImage = function pollUntilGetExistingPreviewImage(pageCount) {
                        var deferred = $.Deferred();
                        var self = this;
                        this.endpoints.getExistingPreviewImages(this.selectedDocumentId).then(function (msg) {
                            if (pageCount <= 5 && msg.length !== pageCount || pageCount > 5 && msg.length < 5) {
                                setTimeout(function () {
                                    self.pollUntilGetExistingPreviewImage(pageCount);
                                }, self.options.pollTimeout || 3000);
                            } else {
                                if (self.isErrorPage) {
                                    self.$viewer.html('');
                                }
                                self.isErrorPage = false;
                                self.options.functions = $.extend(self.getAvailableFunctions(self.options.permissionInfo), self.options.functions);
                                self.options.isAdmin = self.options.permissionInfo.canSave;
                                self.options.toggleWatermark = self.options.permissionInfo.toggleWatermark;
                                self.options.noWatermark = true;
                                self.options.noRedaction = self.options.permissionInfo.canRedact;

                                self.viewer = self.$viewer.documentViewer(self.options).data('snDocViewer');
                                self.loadedShapes = $.extend(true, {}, self.viewer.getAllShapes());
                                self.appendPreviewPostfix = self.viewer.appendPreviewPostfix;
                                self.enableDefaultDisplay(false);
                                deferred.resolve(this.viewer);
                            }
                        });
                        return deferred;
                    };

                    TranscendViewer.prototype.rejectAndRemoveAllPromises = function rejectAndRemoveAllPromises() {
                        this.requests.forEach(function (request) {
                            request.p.reject();
                        }, this);
                        this.requests.length = 0;
                    };

                    TranscendViewer.prototype.showLoader = function showLoader() {
                        if (this.isLoaderVisible === false) {
                            $('#preview-overlay').addClass('overlay-transition');
                            $('#preview-overlay').css('z-index', 9999);
                            this.isLoaderVisible = true;
                        }
                    };

                    TranscendViewer.prototype.hideLoader = function hideLoader() {
                        var self = this;
                        $('#preview-overlay').off();
                        $('#preview-overlay').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
                            $('#preview-overlay').off();
                            $('#preview-overlay').css('z-index', -9999);
                            self.isLoaderVisible = false;
                        });
                        $('#preview-overlay').removeClass('overlay-transition');
                    };

                    TranscendViewer.prototype.initializeViewer = function initializeViewer($viewerParam, optionsParam) {
                        var deferred = $.Deferred();
                        this.rejectAndRemoveAllPromises();
                        this.options = optionsParam;
                        this.basicOptions = optionsParam;
                        this.$viewer = $viewerParam;
                        this.$basicViewer = $viewerParam;
                        this.initializeOptions();
                        this.initializeFunctions();
                        this.endpoints = new _transcendEndpoints.Endpoints(this.options.dataTransmission.apiBaseUrl);
                        var self = this;
                        this.endpoints.getShapes(this.selectedDocumentId).then(function (shapes) {
                            self.options.shapes = shapes.RedactionInfo.Shapes;
                            optionsParam.callbacks.loadingStarted = function () {
                                self.showLoader();
                            };
                            optionsParam.callbacks.loadingEnded = function () {
                                self.hideLoader();
                            };
                            self.printer = new _transcendPrinter.Printer(self.selectedDocumentId, self.options);
                            self.initByGetPageCount().done(function (data) {
                                deferred.resolve(data);
                            });
                            self.setViewerDisplayMode(self.basicOptions.isFullscreen);
                        });
                        return deferred;
                    };

                    return TranscendViewer;
                }();
            }).call(exports, __webpack_require__(11));
        },

        62: function _(module, exports) {

            module.exports = "";
        },

        63: function _(module, exports) {

            module.exports = "";
        },

        64: function _(module, exports) {

            module.exports = "";
        },

        65: function _(module, exports, __webpack_require__) {

            var $ = __webpack_require__("jquery");
            var templateCompile = __webpack_require__(16);
            var template = __webpack_require__(62);
            var ComponentBase = __webpack_require__(15);
            var Util = __webpack_require__(10);

            var _C = {
                name: 'viewerDropdown'
            };

            function Dropdown(element, options) {
                this.defaults = {};

                ComponentBase.call(this, element, options, _C.name);
            }

            Util.inheritsFrom(Dropdown, ComponentBase);

            Dropdown.prototype.init = function () {
                console.log('Dropdown init');
            };

            Util.registerPlugin(_C.name, Dropdown);
        },

        66: function _(module, exports, __webpack_require__) {

            var $ = __webpack_require__("jquery");
            var templateCompile = __webpack_require__(16);
            var template = __webpack_require__(63);
            var ComponentBase = __webpack_require__(15);
            var Util = __webpack_require__(10);

            var _C = {
                name: 'viewerModal'
            };

            function Modal(element, options) {
                this.defaults = {};

                ComponentBase.call(this, element, options, _C.name);
            }

            Util.inheritsFrom(Modal, ComponentBase);

            Modal.prototype.init = function () {
                console.log('Modal init');
            };

            Util.registerPlugin(_C.name, Modal);
        },

        67: function _(module, exports, __webpack_require__) {

            var $ = __webpack_require__("jquery");
            var templateCompile = __webpack_require__(16);
            var template = __webpack_require__(64);
            var ComponentBase = __webpack_require__(15);
            var Util = __webpack_require__(10);

            var _C = {
                name: 'viewerToolbar'
            };

            function Toolbar(element, options) {
                this.defaults = {};

                ComponentBase.call(this, element, options, _C.name);
            }

            Util.inheritsFrom(Toolbar, ComponentBase);

            Toolbar.prototype.init = function () {
                console.log('Toolbar init');
            };

            Util.registerPlugin(_C.name, Toolbar);
        },

        68: function _(module, exports, __webpack_require__) {
            (function (jQuery) {
                __webpack_require__(65);
                __webpack_require__(66);
                __webpack_require__(67);

                (function ($) {
                    var lastDocViewerId = 0;
                    var resizeFlags = {
                        fromTop: 1,
                        fromRight: 2,
                        fromBottom: 4,
                        fromLeft: 8
                    };

                    $.fn.extend({
                        documentViewer: function documentViewer(options) {
                            if (this.data('snDocViewer')) return;

                            var docViewerId = ++lastDocViewerId;
                            var $pluginSubject = $(this[0]);
                            var $container = $('<div class="sn-docpreview-container"></div>').appendTo($pluginSubject);

                            var SR = $.extend({
                                toolbarNotes: 'Edit annotations',
                                toolbarHighlight: 'Edit highlight',
                                toolbarRedaction: 'Edit redaction',
                                toolbarFirstPage: 'Go to first page',
                                toolbarPreviousPage: 'Go to previous page',
                                toolbarNextPage: 'Go to next page',
                                toolbarLastPage: 'Go to last page',
                                toolbarFitWindow: 'Fit document to viewer',
                                toolbarFitHeight: 'Fit document to viewer height',
                                toolbarFitWidth: 'Fit document to viewer width',
                                toolbarZoomOut: 'Zoom out',
                                toolbarZoomIn: 'Zoom in',
                                toolbarPrint: 'Print the document',
                                toolbarRubberBandZoom: 'Rubberband zoom',
                                toolbarFullscreen: 'Switch to full screen mode',
                                toolbarExitFullscreen: 'Exit full screen mode',
                                toolbarShowShapes: 'Show document with shapes',
                                toolbarHideShapes: 'Hide shapes',
                                toolbarShowWatermark: 'Show document with watermark',
                                toolbarHideWatermark: 'Hide watermark',
                                toolbarBurn: 'Burn shapes',
                                toolbarRotatePageLeft: 'Rotate current page left',
                                toolbarRotatePageRight: 'Rotate current page right',
                                toolbarRotateDocLeft: 'Rotate document left',
                                toolbarRotateDocRight: 'Rotate document right',
                                annotationDefaultText: 'Double click to edit text',
                                page: 'Page',
                                showThumbnails: 'Show thumbnails',
                                deleteText: 'Delete',
                                saveText: 'Save',
                                cancelText: 'Cancel',
                                originalSizeText: 'Original size',
                                downloadText: 'Download',
                                errorWithDrawingOnSelectedPage: 'Please click on the page where you want to draw!',
                                otherPageIsSelected: 'Page is selected! Now you can draw on it!',
                                otherPageIsSelectedRubberband: 'Page is selected! Now you can use the rubberband zoom on it!'
                            }, options.SR);

                            var callbacks = $.extend({
                                documentOpened: null,

                                documentClosed: null,

                                pageChanged: null,

                                contextMenuShown: null,

                                zoomLevelChanged: null,

                                viewerError: null,

                                viewerWarning: null,

                                viewerInfo: null,

                                documentChanged: null,

                                rotationStarted: null,

                                rotationEnded: null,

                                loadingStarted: null,

                                loadingEnded: null

                            }, options.callbacks);

                            var metadataHtml = options.metadataHtml || null;
                            var showtoolbar = options.showtoolbar || false;
                            var edittoolbar = options.edittoolbar || false;
                            var showthumbnails = options.showthumbnails || false;
                            var metadata = options.metadata || false;
                            var isAdmin = options.isAdmin || false;
                            var showShapes = options.showShapes || true;
                            var title = options.title || "";
                            var showTitle = options.showTitle !== undefined ? options.showTitle : true;
                            var containerWidth = (typeof options.containerWidth === "function" ? options.containerWidth() : options.containerWidth) || $pluginSubject.width();
                            var containerHeight = (typeof options.containerHeight === "function" ? options.containerHeight() : options.containerHeight) || $pluginSubject.height();
                            var reactToResize = options.reactToResize === true ? true : false;
                            var redrawInterval = options.redrawInterval || 20;
                            var minZoomLevel = options.minZoomLevel || 0.5;
                            var maxZoomLevel = options.maxZoomLevel || 2.5;
                            var annotationDefaultText = options.annotationDefaultText || SR.annotationDefaultText;
                            var pageMargin = options.pageMargin || 50;
                            var filePath = options.filePath || null;
                            var scale = options.defaultScale || 1;
                            var imgWidth = options.imgWidth || 1240;
                            var imgHeight = options.imgHeight || 1754;
                            var customFunctions = options.functions || null;
                            var maxpreview = parseInt(options.previewCount) || 0;
                            var pageNum = options.pageNum || 1;
                            var previewNumInTheSameTime = options.previewNumInTheSameTime || 3;
                            var placeholderImgPath = options.placeholderImgPath || '/Root/Global/images/ajax-loader.gif';
                            var fitContainer = options.fitContainer || false;
                            var shapes = options.shapes || [];
                            var pageAttributes = options.pageAttributes || [];
                            var noWatermark = options.noWatermark || false;
                            var iHeight = null;
                            var addNoChachePostfix = options.addNoChachePostfix || false;
                            var origWidth = imgWidth;
                            var pageAttributesObj = [];
                            var thumbnailWidth, thumbnailHeight;
                            var firstLoad = false;
                            var documentDegree = 0;
                            var $ul, $thumbnailList;
                            var ulWidth = containerWidth;
                            var numberOfPagesForRotation = 0;
                            var multipleRotation = false;
                            var $rubbertechnicalcanvas;

                            var currentpreview = maxpreview > 0 ? pageNum : 0;
                            var currentpreviewWidth = 0;
                            var editbuttons = {
                                annotations: '<span title="' + SR.toolbarNotes + '"><span class="sn-icon sn-icon-notes" data-canvastype="annotation"></span></span>',
                                highlights: '<span title="' + SR.toolbarHighlight + '"><span class="sn-icon sn-icon-highlight" data-canvastype="highlight"></span></span>',
                                redaction: '<span title="' + SR.toolbarRedaction + '"><span class="sn-icon sn-icon-redaction" data-canvastype="redaction"></span></span>',
                                pager: '<div class="sn-pager">\
                            <span title="' + SR.toolbarFirstPage + '"><span class="sn-icon sn-icon-firstpage"></span></span>\
                            <span title="' + SR.toolbarPreviousPage + '"><span class="sn-icon sn-icon-prev"></span></span>\
                            <input class="sn-input-jumptopage" value="' + currentpreview + '" />\
                            <span class="pagenumber"><span id="docpreviewpage"> / ' + maxpreview + '</span></span>\
                            <span title="' + SR.toolbarNextPage + '" ><span class="sn-icon sn-icon-next"></span></span>\
                            <span title="' + SR.toolbarLastPage + '"><span class="sn-icon sn-icon-lastpage"></span></span>\
                        </div>',
                                rotation: '<div class=sn-viewer-rotate>\
                             <span title="' + SR.toolbarRotatePageLeft + '"><span class="sn-icon sn-icon-rotateleft"></span></span>\
                            <span title="' + SR.toolbarRotatePageRight + '"><span class="sn-icon sn-icon-rotateright"></span></span>\
                            <span title="' + SR.toolbarRotateDocLeft + '"><span class="sn-icon sn-icon-rotatedocleft"><span class="sn-icon-overlay"></span></span></span>\
                            <span title="' + SR.toolbarRotateDocRight + '"><span class="sn-icon sn-icon-rotatedocright"><span class="sn-icon-overlay"></span></span></span>\
                            </div>',
                                fittowindow: '<span title="' + SR.toolbarFitWindow + '"><span class="sn-icon sn-icon-fittowindow"></span></span>',
                                fittowidth: '<span title="' + SR.toolbarFitWidth + '"><span class="sn-icon sn-icon-fittowidth"></span></span>',
                                fittoheight: '<span title="' + SR.toolbarFitHeight + '"><span class="sn-icon sn-icon-fittoheight"></span></span>',
                                fullscreen: '<span title="' + SR.toolbarFullscreen + '"><span class="sn-icon sn-icon-fullscreen"></span></span>',
                                rubberbandzoom: '<span title="' + SR.toolbarRubberBandZoom + '"><span class="sn-icon sn-icon-rubberband" id="sn-rubberband"></span></span>',
                                zoomout: '<span title="' + SR.toolbarZoomOut + '"><span class="sn-icon sn-icon-zoomout" ></span></span>',
                                zoomin: '<span title="' + SR.toolbarZoomIn + '"><span class="sn-icon sn-icon-zoomin" ></span></span>',
                                originaldocument: '<span title="' + SR.toolbarHideShapes + '"><span class="sn-icon sn-icon-original"></span></span>',
                                editeddocument: '<span title="' + SR.toolbarShowShapes + '"><span class="sn-icon sn-icon-edited"></span></span>',
                                originalsize: '<span title="' + SR.originalSizeText + '"><span class="sn-icon sn-icon-originalsize"></span></span>'
                            };

                            var allshapes = {
                                redaction: [],
                                highlight: [],
                                annotation: []
                            };
                            var saveableshapes = {
                                redaction: [],
                                highlight: [],
                                annotation: []
                            };
                            var mouseover = false;var touched = false;
                            var msie8 = false;
                            var agentStr = navigator.userAgent;
                            if (agentStr.indexOf("Trident/4.0") > -1) {
                                msie8 = true;
                            }
                            var touch = false;
                            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10/i.test(navigator.userAgent)) touch = true;
                            if (touch) $('body').addClass('touch');

                            var mySel = null;
                            var mySelColor = '#007dc6';
                            var mySelWidth = 2;
                            var mySelBoxColor = '007dc6';
                            var mySelBoxSize = 6;
                            var isDrag = false;
                            var isResizeDrag = false;
                            var selectionHandles = [];
                            var canvasValid = false;
                            var shapeIndex = null;
                            var contexts = {};
                            var expectResize = 0;
                            var rmx, rmy, rmstart;
                            var canvasType;
                            var editmode = false;
                            var shapesAreShowing = showShapes;
                            var $imagecontainer, $metadatacontainer, $docpreview, $toolbarContainer;
                            var started = false;
                            var x0, y0;
                            var unsaved = false;
                            var pages = [];var hpages = [];var thumbnails = [];var hthumbnails = [];var existingPages = [];
                            var thumbnailUrls;

                            var lastPosition = 0;
                            var timer;
                            var firstInit = true;
                            var jumpDistance = 1;

                            function initializeDocViewerPlugin() {

                                parseShapesJson(shapes);

                                parsePageAttributesJson(pageAttributes);

                                if (pageAttributesObj.allValuesSame() && typeof pageAttributesObj[0] !== 'undefined' && pageAttributesObj.length === maxpreview) {
                                    documentDegree = pageAttributesObj[0].options.degree;
                                }

                                $container.html("");
                                if (maxpreview !== 0) $imagecontainer = $('<div class="image-container"></div>');else {
                                    $imagecontainer = $('<div class="image-container"><div class="no-preview">' + options.SR.noPreview + '</div></div>');
                                    $('.sn-docpreview-container').addClass('empty');
                                }

                                $metadatacontainer = $();
                                $docpreview = $('<div class="sn-docpreview-desktop docpreview" id="docpreview"><div class="zoomer" id="zoomr"><ul></ul></div></div>');
                                $toolbarContainer = $();
                                $imagecontainer.appendTo($container);

                                if (!metadata && !showthumbnails) {
                                    $imagecontainer.width('100%');
                                }
                                if (showtoolbar) {
                                    $toolbarContainer = $('<div class="sn-docviewer-tools"></div>');
                                    $toolbarContainer.appendTo($imagecontainer);
                                    createToolbar();
                                }
                                if (metadata || showthumbnails) {
                                    $metadatacontainer = $('<div class="metadatas"></div>');
                                    $metadatacontainer.appendTo($container);
                                }
                                if (showthumbnails) {
                                    if (maxpreview !== '0') $metadatacontainer.append('<div class="sn-doc-thumbnails"></div></div>');else $metadatacontainer.append('<div class="sn-doc-thumbnails"><div class="no-thumbnail">No thumbnail!</div></div>');
                                }
                                if (metadata) {
                                    $metadatacontainer.append(metadataHtml);
                                }

                                $container.append('<div style="clear:both;height:1px;">&nbsp;</div>');
                                var wi = containerWidth;
                                if (window.innerWidth < 800) wi = $docpreview.parent().width;else if (!showthumbnails && !metadata) wi = $container.width();
                                $docpreview.width(wi).height(containerHeight).on('contextmenu.snDocViewer', function () {
                                    return false;
                                }).appendTo($imagecontainer);
                                var $imageList = $('ul', $docpreview);

                                if (typeof options.getExistingPreviewImages === "function") {
                                    options.getExistingPreviewImages().then(function (data) {
                                        thumbnailUrls = data.map(function (m) {
                                            return m.ThumbnailAvailable;
                                        });
                                        existingPages = data;
                                        if (showthumbnails) {
                                            $('.sn-doc-thumbnails').append('<ul></ul>');
                                            $thumbnailList = $('ul', $('.sn-doc-thumbnails'));

                                            createThumbnailContainersOnInterval(data, $thumbnailList);
                                        }

                                        createImageContainersOnInterval(data, $imageList);
                                        getDeletableAndLoadableCanvases(1, data);
                                        if (ulWidth - 240 < data[0].Width) ulWidth = data[0].Width + 240;

                                        $docpreview.find('ul').width(ulWidth);
                                        firstLoad = 0;


                                        $(window).on("unload.snDocViewer_" + docViewerId, function (e) {
                                            callbacks.documentClosed && callbacks.documentClosed();
                                        });

                                        $docpreview.hover(function () {
                                            mouseover = true;
                                        }, function () {
                                            mouseover = false;
                                        });

                                        $docpreview.on('touchstart', function (e) {
                                            touched = true;
                                        });

                                        if (reactToResize) {
                                            var onResized = function onResized() {
                                                var isFullscreen = dataObj.isFullscreen();

                                                setTimeout(function () {
                                                    if (isFullscreen) {
                                                        containerHeight = $(window).height() - $docpreview.offset().top;
                                                        containerWidth = $(window).width();
                                                    } else {
                                                        containerHeight = (typeof options.containerHeight === "function" ? options.containerHeight() : options.containerHeight) || $pluginSubject.height();
                                                        containerWidth = (typeof options.containerWidth === "function" ? options.containerWidth() : options.containerWidth) || $pluginSubject.width();
                                                    }
                                                    $docpreview.width(containerWidth).height(containerHeight);
                                                    $('.sn-doc-thumbnails').height(containerHeight);
                                                }, 300);
                                            };
                                            $(window).on("resize.snDocViewer_" + docViewerId, onResized);

                                            $(window).on("orientationchange.snDocViewer_" + docViewerId, onResized);

                                            onResized();
                                        }


                                        callbacks.documentOpened && callbacks.documentOpened();

                                        if (scale !== 1 && scale <= maxZoomLevel && scale >= minZoomLevel && !touch) {
                                            setZoomLevel(scale);
                                        }

                                        if (touch) {

                                            var rate = containerWidth / imgWidth;
                                            if (!fitContainer) rate = scale;

                                            scale = rate;

                                            $('.docpreview').ready(function () {

                                                var rate = $('body').width() / imgWidth;

                                                var myScroll = new IScroll('#docpreview', {
                                                    zoom: true,
                                                    scrollX: true,
                                                    scrollY: true,
                                                    mouseWheel: true,
                                                    zoomMin: minZoomLevel,
                                                    zoomMax: maxZoomLevel,
                                                    startZoom: rate
                                                });

                                                enterFullscreenMode(currentpreview);

                                                myScroll.on('scrollEnd', updatePosition);

                                                $('.sn-icon-originalsize').on('click', function () {
                                                    myScroll.zoom(1);
                                                });

                                                $('.sn-icon-fittowindow').on('click', function () {
                                                    var containerWidth, fitToWidthScale;
                                                    containerWidth = myScroll.wrapperWidth;
                                                    fitToWidthScale = (containerWidth / imgWidth).toFixed(2);
                                                    myScroll.zoom(fitToWidthScale);
                                                });
                                            });
                                        }

                                        $docpreview.scrollTop(0);

                                        unsaved = false;

                                        $docpreview.scroll($.debounce(500, function () {
                                            if ($('.sn-docpreview-desktop:hover').length !== 0) {
                                                setPageAccordingToScroll(true);
                                            }
                                        }));

                                        $('.sn-doc-thumbnails').scroll($.debounce(250, function () {
                                            scrollThumbnails();
                                        }));

                                        $('.sn-docviewer-page').on('click.snDocViewer', myClick);

                                        $thumbnailList.on('click.snDocViewer', '.sn-thumbnail-page', function () {
                                            if ($(this).children('img').attr('data-loaded') === "true") {
                                                var thumbnailNum = parseInt($(this).attr('data-page'));
                                                removeAllContextMenu();

                                                if (newPage(thumbnailNum)) {
                                                    demandNewPage(thumbnailNum);
                                                    setDataTops(thumbnailNum);
                                                }

                                                getDeletableAndLoadableCanvases(thumbnailNum);
                                                SetPreviewControls(thumbnailNum);
                                            }
                                        });
                                        fitToWidth(data[0].Width);
                                    });
                                }
                                SetPreviewControls(1);
                            }

                            function wholeDocumentRotated() {
                                var wholeDocRotationDegrees = 0;
                                var degrees = [0, 90, -90, 180];
                                for (var i = 0; i < degrees.length; i++) {
                                    if ($('.sn-docviewer-page').length === $('.sn-docviewer-page.rotated').length && $('.sn-docviewer-page[data-degree="' + degrees[i] + '"]').length === $('.sn-docviewer-page').length) {
                                        wholeDocRotationDegrees = degrees[i];
                                    }
                                }

                                return wholeDocRotationDegrees;
                            }

                            function createImageContainersOnInterval(data, $imageList) {
                                var orientation = 'portrait';

                                displayImage(data[0], $imageList, orientation);
                                callbacks.loadingStarted && callbacks.loadingStarted();

                                $('#imageContainer1 img').imageLoad(function () {
                                    if (!multipleRotation) {
                                        callbacks.loadingEnded && callbacks.loadingEnded();
                                        if ($('.sn-docviewer-page[data-page="2"]').length === 0) {
                                            $.each(data, function (i, item) {
                                                if (i > 0 && i < 10) {
                                                    displayImage(item, $imageList, orientation);
                                                }
                                            });
                                        }
                                    }
                                });
                            }

                            function displayImage(item, $imageList, orientation) {

                                if (item.Width > item.Height) orientation = 'landscape';

                                var path = item.PreviewAvailable;

                                path = appendPreviewPostfix(path, !noWatermark, addNoChachePostfix);

                                var $li = $('<li class="sn-docviewer-page ' + orientation + '" id="imageContainer' + item.Index + '" data-page="' + item.Index + '" data-width="' + item.Width + '" data-height="' + item.Height + '"><img src="' + path + '" data-loaded="true" /></li>');


                                $imageList.append($li);

                                $li.css({
                                    'width': item.Width + 240,
                                    'height': item.Height
                                });

                                var ind = pageIsRotated(item.Index);
                                if (ind > -1) {
                                    var newDegree = parseInt(pageAttributesObj[ind].options.degree);
                                    multipleRotation = false;
                                    rotate(newDegree, item.Index, false, true);
                                    rotateThumbnail(newDegree, item.Index);
                                }

                                $('#imageContainer' + item.Index + ' img').imageLoad(function () {
                                    setPageMargins(item.Index);
                                    setDataTops(item.Index);
                                });
                            }

                            function setPageMargins(p) {
                                var $that = $('#imageContainer' + p);
                                var leftMargin = Math.abs(ulWidth - $that.width()) / 2;
                                $that.css({ 'margin': '0px auto 50px' });
                            }

                            function createThumbnailContainersOnInterval(data) {
                                $.each(data, function (i, item) {
                                    if (i < 10) displayThumbnail(item.Index, item.PreviewAvailable, item.Width, item.Height, item.ThumbnailAvailable);
                                });
                            }

                            function updatePosition() {
                                var scale = myScroll.scale;
                                var itemHeight = $('.sn-docviewer-page').height() * scale;
                                var outer = myScroll.y;
                                var pNum;
                                if (outer !== 0 && itemHeight !== 0) pNum = -1 * parseInt(Math.round(outer / itemHeight));else pNum = 0;

                                if (pNum > -1 && pNum < maxpreview) {
                                    pNum = pNum + 1;
                                }
                                if (pNum > maxpreview) pNum = maxpreview;

                                getDeletableAndLoadableCanvases(pNum);

                                if (pNum) {
                                    $('#docpreviewpage').text(pNum);
                                    currentpreview = Number(pNum);
                                    currentpreviewWidth = $('#imageContainer' + pNum).attr('data-width');
                                } else {
                                    $('#docpreviewpage').text(0);
                                }

                                $thumbnailList.children('li').removeClass('active');
                                $thumbnailList.children('li[data-page="' + currentpreview + '"]').addClass('active');
                            }

                            function scrollThumbnails() {

                                var containerWidth = $('.sn-doc-thumbnails').width();
                                var containerHeight = $('.sn-doc-thumbnails').height();
                                var orientation, scrollPosition, thumbnailNum;
                                if (containerWidth > containerHeight) {
                                    var itemWidth = 115;
                                    scrollPosition = $('.sn-doc-thumbnails ul').position().left - 17;
                                    thumbnailNum = parseInt(Math.abs(scrollPosition / itemWidth)) + 1;
                                    orientation = 'h';
                                } else {
                                    var itemHeight = 160;
                                    scrollPosition = $('.sn-doc-thumbnails ul').position().top;
                                    thumbnailNum = parseInt(Math.abs(scrollPosition / itemHeight)) + 1;
                                    orientation = 'v';
                                }

                                var lastThumbnail = parseInt($('.sn-thumbnail-page').last().attr('data-page'));

                                if (lastThumbnail + 1 <= maxpreview && newPage(lastThumbnail + 1)) {
                                    if (lastThumbnail + 1 === maxpreview) {
                                        demandNewPage(lastThumbnail + 1, false);
                                        setDataTops(lastThumbnail + 1);
                                    } else {
                                        demandNewPage(lastThumbnail + 1, false);
                                        setDataTops(lastThumbnail + 1);
                                    }
                                }

                                lastPosition = scrollPosition;
                            }

                            function createToolbar() {
                                if (showTitle) {
                                    if (title.length >= 30) {
                                        title = title.slice(0, 27).trim() + "...";
                                    }
                                    $toolbarContainer.append('<div class="sn-doc-title" title="' + title + '"><span class="sn-doc-title-text">' + title + '</span></div><div class="sn-paging-tools"><div class="sn-pager">' + editbuttons.pager + '</div></div>');
                                } else {
                                    $toolbarContainer.append('<div class="sn-paging-tools"><div class="sn-pager">' + editbuttons.pager + '</div></div>');
                                }

                                if (showtoolbar && edittoolbar && isAdmin && !touch) {
                                    $toolbarContainer.append('<div class="sn-additional-tools">' + editbuttons.annotations + editbuttons.highlights + editbuttons.redaction + '</div>');
                                }

                                if (showShapes) {
                                    $toolbarContainer.append('<div class="sn-zooming-tools">' + editbuttons.rotation + editbuttons.originalsize + editbuttons.fittowindow + editbuttons.fittoheight + editbuttons.fittowidth + editbuttons.zoomout + editbuttons.zoomin + editbuttons.rubberbandzoom + editbuttons.fullscreen + editbuttons.originaldocument + '</div>');
                                } else {
                                    $toolbarContainer.append('<div class="sn-zooming-tools">' + editbuttons.rotation + editbuttons.originalsize + editbuttons.fittowindow + editbuttons.fittoheight + editbuttons.fittowidth + editbuttons.zoomout + editbuttons.zoomin + editbuttons.rubberbandzoom + editbuttons.fullscreen + editbuttons.editeddocument + '</div>');
                                }

                                function adminbutton(name, disabled) {
                                    this.name = name;
                                    this.disable = disabled;
                                }

                                var admintoolbar = [];
                                var $admintoolbar = $('.sn-additional-tools');
                                $admintoolbar.find('span.sn-icon').each(function (i) {
                                    var that = $(this);
                                    var name = that.attr('data-canvastype');
                                    var disabled = false;
                                    var attr = that.attr('disabled');
                                    if ((typeof attr === "undefined" ? "undefined" : _typeof2(attr)) !== (typeof undefined === "undefined" ? "undefined" : _typeof2(undefined)) && attr !== false) disabled = true;
                                    admintoolbar[i] = new adminbutton(name, disabled);
                                });

                                if (customFunctions) {
                                    $.each(customFunctions, function (i, item) {
                                        if (touch && item.touch === true || !touch) {
                                            var $button = $('<span id="' + 'button' + i + '" title="' + item.title + '">' + item.icon + '</span>');
                                            if (item.type === 'dataRelated') {
                                                if (typeof item.permission !== 'undefined' && item.permission) $('.sn-zooming-tools').append($button);
                                                if (typeof item.permission === 'undefined') $('.sn-zooming-tools').append($button);
                                            }
                                            if (item.type === 'drawingRelated') {
                                                if (typeof item.permission !== 'undefined' && item.permission) $('.sn-additional-tools').append($button);
                                                if (typeof item.permission === 'undefined') $('.sn-additional-tools').append($button);
                                            }
                                            if (item.bindTo !== undefined) {
                                                $button.on('click', function () {
                                                    item.action.call(item.bindTo);
                                                });
                                            } else {
                                                $button.on('click', item.action);
                                            }
                                        }
                                    });
                                }

                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-notes', function () {
                                    var attr = $(this).attr('disabled');
                                    if (!((typeof attr === "undefined" ? "undefined" : _typeof2(attr)) !== (typeof undefined === "undefined" ? "undefined" : _typeof2(undefined)) && attr !== false)) {
                                        clearMenuSelection($(this));
                                        initializeCanvasFeature("annotation");
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-highlight', function () {
                                    var attr = $(this).attr('disabled');
                                    if (!((typeof attr === "undefined" ? "undefined" : _typeof2(attr)) !== (typeof undefined === "undefined" ? "undefined" : _typeof2(undefined)) && attr !== false)) {
                                        clearMenuSelection($(this));
                                        initializeCanvasFeature("highlight");
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-redaction', function () {
                                    var attr = $(this).attr('disabled');
                                    if (!((typeof attr === "undefined" ? "undefined" : _typeof2(attr)) !== (typeof undefined === "undefined" ? "undefined" : _typeof2(undefined)) && attr !== false)) {
                                        clearMenuSelection($(this));
                                        initializeCanvasFeature("redaction");
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-firstpage', function () {
                                    removeAllContextMenu();
                                    getDeletableAndLoadableCanvases(1);
                                    SetPreviewControls(1);
                                    scrollToThumbnail(1);
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-prev', function () {
                                    removeAllContextMenu();
                                    if (currentpreview !== 1) {
                                        getDeletableAndLoadableCanvases(currentpreview - 1);
                                        SetPreviewControls(currentpreview - 1);
                                        scrollToThumbnail(currentpreview);
                                        if (newPage(currentpreview)) {
                                            demandNewPage(currentpreview);
                                            setDataTops(currentpreview);
                                        }
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-next', function () {
                                    removeAllContextMenu();
                                    if (currentpreview !== maxpreview && $('.sn-docviewer-page[data-page="' + (currentpreview + 1) + '"] img').attr('data-loaded') === "true") {
                                        getDeletableAndLoadableCanvases(currentpreview + 1);
                                        SetPreviewControls(currentpreview + 1);
                                        scrollToThumbnail(currentpreview);
                                        if (newPage(currentpreview + 2) && currentpreview + 2 <= maxpreview) {
                                            demandNewPage(currentpreview + 2);
                                            setDataTops(currentpreview + 2);
                                        }
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-lastpage', function () {
                                    removeAllContextMenu();
                                    if (newPage(maxpreview)) {
                                        for (var i = currentpreview + 1; i < maxpreview + 1; i++) {
                                            if (newPage(i)) {
                                                if (i === maxpreview) {
                                                    demandNewPage(i, true);
                                                    setDataTops(i);
                                                } else {
                                                    demandNewPage(i, false);
                                                    setDataTops(i);
                                                }
                                            }
                                        }
                                        $('.sn-doc-thumbnails li').removeClass('active');
                                        $('.sn-doc-thumbnails li[data-page="' + maxpreview + '"]', $container).addClass('active');
                                        $docpreview.scrollTop(1000000);
                                        scrollToThumbnail(maxpreview);
                                    } else {
                                        getDeletableAndLoadableCanvases(maxpreview);
                                        SetPreviewControls(maxpreview, false);
                                        scrollToThumbnail(maxpreview);
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-originalsize', function () {
                                    clearMenuSelection();
                                    if (!touch) {
                                        setZoomLevel(1);
                                        fitPreviewsToLeftEdge(false, false, currentpreviewWidth);
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-fittowidth', function () {
                                    removeAllContextMenu();
                                    if (!touch) fitToWidth(currentpreviewWidth);
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-fittoheight', function () {
                                    removeAllContextMenu();
                                    fitToHeight();
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-fittowindow', function () {
                                    removeAllContextMenu();
                                    if (!touch) fitToWindow();
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-rubberband', function () {
                                    var $this = $(this);

                                    if ($this.hasClass('active')) {
                                        clearMenuSelection();
                                        setZoomLevel(1);
                                        return;
                                    }

                                    clearMenuSelection($this);
                                    editmode = false;
                                    isDrag = false;

                                    setTechnicalCanvasForRubberbandZoom(currentpreview);
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-zoomout', function () {
                                    removeAllContextMenu();
                                    $('.sn-icon-rubberband', $toolbarContainer).removeClass('active');
                                    if (scale >= minZoomLevel) {
                                        setZoomLevel(scale - 0.1);
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-zoomin', function () {
                                    removeAllContextMenu();
                                    $('.sn-icon-rubberband', $toolbarContainer).removeClass('active');
                                    if (scale + 0.1 <= maxZoomLevel) {
                                        setZoomLevel(scale + 0.1);
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-fullscreen', function () {
                                    removeAllContextMenu();
                                    var $this = $(this);
                                    if ($this.hasClass('normalscreen')) {
                                        exitFullscreenMode(currentpreview);
                                    } else {
                                        enterFullscreenMode(currentpreview);
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-original', function () {
                                    var $this = $(this);
                                    clearMenuSelection($this);
                                    removeAllContextMenu();
                                    $('.sn-additional-tools', $toolbarContainer).hide();
                                    $this.removeClass('sn-icon-original').addClass('sn-icon-edited').attr('title', SR.toolbarShowShapes);
                                    $('canvas', $container).hide();
                                    editmode = false;
                                    shapesAreShowing = false;

                                    clearInterval(mainDraw);
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-edited', function () {
                                    clearMenuSelection();
                                    removeAllContextMenu();
                                    var $this = $(this);
                                    if (!msie8) {
                                        $('.sn-additional-tools', $toolbarContainer).show();
                                    }
                                    $this.removeClass('sn-icon-edited').addClass('sn-icon-original').attr('title', SR.toolbarHideShapes);

                                    $container.find("canvas").show();
                                    if (!isAdmin) {
                                        $container.find("canvas.redaction-canvas").hide();
                                    }

                                    shapesAreShowing = true;
                                    clearInterval(mainDraw);
                                    setInterval(mainDraw, redrawInterval);
                                });

                                $toolbarContainer.on('keyup.snDocViewer', '.sn-input-jumptopage', function (e) {
                                    if (e.keyCode === 13) {
                                        var pageNum = parseInt($(this).val());
                                        if (pageNum < maxpreview + 1 && pageNum > 0) {
                                            removeAllContextMenu();
                                            if (newPage(pageNum)) {
                                                for (var i = currentpreview + 1; i < pageNum + 1; i++) {
                                                    if (newPage(i)) {
                                                        if (i === pageNum) {
                                                            demandNewPage(i, true);
                                                            setDataTops(i);
                                                        } else {
                                                            demandNewPage(i, false);
                                                            setDataTops(i);
                                                        }
                                                    }
                                                }
                                                $('.sn-doc-thumbnails li').removeClass('active');
                                                $('.sn-doc-thumbnails li[data-page="' + pageNum + '"]', $container).addClass('active');
                                                scrollToThumbnail(pageNum);
                                                $('.sn-doc-thumbnails li[data-page="' + pageNum + '"] img', $container).imageLoad(function () {
                                                    getDeletableAndLoadableCanvases(pageNum);
                                                });
                                            } else {
                                                scrollToThumbnail(pageNum);
                                                getDeletableAndLoadableCanvases(pageNum);
                                                SetPreviewControls(pageNum, false);
                                            }
                                        } else if (pageNum > maxpreview) {
                                            removeAllContextMenu();
                                            if (newPage(maxpreview)) {
                                                for (var i = currentpreview + 1; i < maxpreview + 1; i++) {
                                                    if (newPage(i)) {
                                                        demandNewPage(i, true);
                                                        setDataTops(i);
                                                    }
                                                }
                                                $('.sn-doc-thumbnails li').removeClass('active');
                                                $('.sn-doc-thumbnails li[data-page="' + maxpreview + '"]', $container).addClass('active');
                                                scrollToThumbnail(maxpreview);
                                            } else {
                                                getDeletableAndLoadableCanvases(maxpreview);
                                                SetPreviewControls(maxpreview, false);
                                                scrollToThumbnail(maxpreview);
                                            }
                                        } else if (pageNum < 1) {
                                            removeAllContextMenu();
                                            jumpDistance = Math.abs(1 - currentpreview);
                                            getDeletableAndLoadableCanvases(1);
                                            SetPreviewControls(1);
                                        }
                                        e.preventDefault();
                                    }
                                });
                                $toolbarContainer.on('keypress.snDocViewer', '.sn-input-jumptopage', function (e) {
                                    var theEvent = e || window.event;
                                    var key = theEvent.keyCode || theEvent.which;
                                    key = String.fromCharCode(key);
                                    var regex = /[0-9]|\./;
                                    if (!regex.test(key)) {
                                        theEvent.returnValue = false;
                                        if (theEvent.preventDefault) theEvent.preventDefault();
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-rotateleft', function () {
                                    var $button = $(this);
                                    callbacks.rotationStarted && callbacks.rotationStarted($button);
                                    var currentDegree = 0;
                                    if (typeof $('.sn-docviewer-page[data-page="' + currentpreview + '"]').attr('data-degree') !== 'undefined') currentDegree = parseInt($('.sn-docviewer-page[data-page="' + currentpreview + '"]').attr('data-degree'));
                                    var newDegree = computeDegree(currentDegree, -90);
                                    multipleRotation = false;
                                    rotate(newDegree, currentpreview, false);
                                    rotateThumbnail(newDegree, currentpreview);
                                    saveRotation(currentpreview, newDegree);
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-rotateright', function () {
                                    var $button = $(this);
                                    callbacks.rotationStarted && callbacks.rotationStarted($button);
                                    var currentDegree = 0;
                                    if (typeof $('.sn-docviewer-page[data-page="' + currentpreview + '"]').attr('data-degree') !== 'undefined') currentDegree = parseInt($('.sn-docviewer-page[data-page="' + currentpreview + '"]').attr('data-degree'));
                                    var newDegree = computeDegree(currentDegree, 90);
                                    multipleRotation = false;
                                    rotate(newDegree, currentpreview, false);
                                    rotateThumbnail(newDegree, currentpreview, false);
                                    saveRotation(currentpreview, newDegree);
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-rotatedocleft', function () {
                                    var $button = $(this);
                                    callbacks.rotationStarted && callbacks.rotationStarted($button);
                                    documentDegree = computeDegree(documentDegree, -90);
                                    $('.sn-docviewer-page').each(function () {
                                        numberOfPagesForRotation += 1;
                                        var currentPageNum = parseInt($(this).attr('data-page'));
                                        var currentDegree = documentDegree;
                                        if (typeof $('.sn-docviewer-page[data-page="' + currentPageNum + '"]').attr('data-degree') !== 'undefined') currentDegree = computeDegree(parseInt($('.sn-docviewer-page[data-page="' + currentPageNum + '"]').attr('data-degree')), -90);
                                        multipleRotation = true;
                                        rotate(currentDegree, currentPageNum, true);
                                        rotateThumbnail(currentDegree, currentPageNum);
                                    });
                                    for (var i = 1; i < maxpreview + 1; i++) {
                                        saveRotation(i, documentDegree);
                                    }
                                });
                                $toolbarContainer.on('click.snDocViewer', '.sn-icon-rotatedocright', function () {
                                    var $button = $(this);
                                    callbacks.rotationStarted && callbacks.rotationStarted($button);
                                    documentDegree = computeDegree(documentDegree, 90);
                                    $('.sn-docviewer-page').each(function () {
                                        numberOfPagesForRotation += 1;
                                        var currentPageNum = parseInt($(this).attr('data-page'));
                                        var currentDegree = documentDegree;
                                        if (typeof $('.sn-docviewer-page[data-page="' + currentPageNum + '"]').attr('data-degree') !== 'undefined') currentDegree = computeDegree(parseInt($('.sn-docviewer-page[data-page="' + currentPageNum + '"]').attr('data-degree')), 90);
                                        multipleRotation = true;
                                        rotate(currentDegree, currentPageNum, true);
                                        rotateThumbnail(currentDegree, currentPageNum);
                                    });
                                    for (var i = 1; i < maxpreview + 1; i++) {
                                        saveRotation(i, documentDegree);
                                    }
                                });
                            }

                            function setTechnicalCanvasForRubberbandZoom(page) {
                                var $rubbertechnicalcanvas = $('.sn-docviewer-page[data-page="' + page + '"]').find('canvas.technical-canvas');
                                $rubbertechnicalcanvas.off('mousedown.snDocViewer').off('mousemove.snDocViewer').off('mouseup.snDocViewer');
                                $rubbertechnicalcanvas.on('mousedown.snDocViewer', drawRectangle).on('mousemove.snDocViewer', drawRectangleMove).on('mouseup.snDocViewer', function (e) {
                                    if (parseInt($(this).closest('.sn-docviewer-page').attr('data-page')) === page) {
                                        rubberBandZoom.call(this, e);
                                        $rubbertechnicalcanvas.off('mousedown.snDocViewer');
                                        $rubbertechnicalcanvas.off('mousemove.snDocViewer');
                                        $rubbertechnicalcanvas.css({ 'cursor': 'default' });
                                    } else {
                                        callbacks.viewerInfo && callbacks.viewerInfo(SR.otherPageIsSelectedRubberBand);
                                        var $currentPage = $('.sn-docviewer-page[data-page="' + page + '"]');
                                        var technicalctx = $currentPage.find('.technical-canvas')[0].getContext('2d');
                                        clear(technicalctx);
                                        $('.sn-icon-rubberband', $toolbarContainer).removeClass('active');
                                        started = false;
                                        $rubbertechnicalcanvas.off('mousedown.snDocViewer');
                                        $rubbertechnicalcanvas.off('mousemove.snDocViewer');
                                        $rubbertechnicalcanvas.css({ 'cursor': 'default' });
                                    }
                                });
                            }

                            function newPage(ind) {
                                return $('li.sn-docviewer-page[data-page="' + ind + '"]').length === 0;
                            }

                            function demandNewPage(ind, jump) {
                                if (ind <= maxpreview) {
                                    var $li = $('<li class="sn-docviewer-page" id="imageContainer' + ind + '" data-page="' + ind + '" data-top="0"><img src="' + placeholderImgPath + '" data-loaded="false" data-top="0" /></li>').appendTo($ul);
                                    var $thumbnail = $('<li class="sn-thumbnail-page" data-page="' + ind + '"><img src="' + placeholderImgPath + '" data-loaded="false" /><span>Page ' + ind + '</span></li>').appendTo($thumbnailList);
                                    displayNewPage(ind, $li, $thumbnail, jump);
                                }
                            }

                            function displayNewPage(ind, $li, $thumbnail, jump) {

                                if (typeof options.getImage === "function") {
                                    var $img = $li.children('img');
                                    options.getImage(ind).done(function (data) {
                                        if (typeof data !== 'undefined') {
                                            var page = data;
                                            page.Index = ind;
                                            existingPages.push(page);

                                            var path = appendPreviewPostfix(page.PreviewAvailable, dataObj.isWatermarked(), addNoChachePostfix);
                                            $img.attr('src', path);
                                            $img.attr('data-loaded', true);

                                            var thumbnailPath = data.ThumbnailAvailable;

                                            var that = $('.sn-thumbnail-page[data-page="' + ind + '"] img');

                                            thumbnailPath = appendPreviewPostfix(thumbnailPath, dataObj.isWatermarked(), addNoChachePostfix);

                                            that.attr('data-loaded', true);
                                            that.attr('src', thumbnailPath);

                                            $li.css({
                                                'width': data.Width + 240,
                                                'height': data.Height,
                                                'margin': '0 auto ' + pageMargin + 'px auto'
                                            });

                                            $li.attr('data-top', getTopOfThePage(ind));
                                            $li.attr('data-width', data.Width);
                                            $li.attr('data-height', data.Height);

                                            var twidth = '105px';var theight = '150px';
                                            if (data.Width > data.Height) {
                                                twidth = '120px';
                                                theight = '100px';
                                            }
                                            $thumbnail.css({
                                                'margin-right': '20px',
                                                'width': twidth,
                                                'height': theight
                                            });

                                            $thumbnail.find('img').css({ 'margin': '0px auto;width:90%' });

                                            var cwidth = 95;
                                            var cheight = 130;

                                            $thumbnail.attr('data-width', cwidth).attr('data-height', cheight);
                                            if (data.Width > data.Height) $thumbnail.attr('data-width', cheight).attr('data-height', cwidth);

                                            if (jump) SetPreviewControls(ind, false);

                                            var index = pageIsRotated(ind);

                                            if (index > -1) {
                                                var newDegree = parseInt(pageAttributesObj[index].options.degree);
                                                multipleRotation = false;
                                                rotate(newDegree, ind, false);
                                                rotateThumbnail(newDegree, ind);
                                                saveRotation(ind, newDegree);
                                            }

                                            if (ulWidth - 240 < data.Width) {
                                                ulWidth = data.Width + 240;
                                                $ul.width(ulWidth).css('width', ulWidth);
                                                fitPreviewsToLeftEdge(dataObj.isFullscreen(), false, currentpreviewWidth);
                                            }

                                            $docpreview.on('click.snDocViewer', '.sn-docviewer-page', function () {
                                                if ($(this).children('img').attr('data-loaded') === 'true' && parseInt($(this).attr('data-page')) !== currentpreview) {
                                                    var pNum = parseInt($(this).attr('data-page'));
                                                    removeAllContextMenu();

                                                    getDeletableAndLoadableCanvases(pNum);
                                                    SetPreviewControls(pNum, true);
                                                }
                                            });

                                            $thumbnail.on('click.snDocViewer', function () {
                                                if ($(this).attr('data-loaded') === 'true') {
                                                    var thumbnailNum = parseInt($(this).attr('data-page'));
                                                    removeAllContextMenu();

                                                    if (newPage(pageNum)) {
                                                        demandNewPage(pageNum);
                                                        setDataTops(pageNum);
                                                    }
                                                    getDeletableAndLoadableCanvases(thumbnailNum);
                                                    SetPreviewControls(thumbnailNum);
                                                }
                                            });

                                            if (documentDegree !== 0) {
                                                multipleRotation = false;
                                                rotate(documentDegree, page.Index, false);
                                                rotateThumbnail(documentDegree, page.Index, false);
                                            }

                                            getDeletableAndLoadableCanvases(ind);
                                        }
                                    });
                                }
                            }

                            function pageIsRotated(p) {
                                var ind = -1;
                                for (var i = 0; i < pageAttributesObj.length; i++) {
                                    if (parseInt(pageAttributesObj[i].pageNum) === p) ind = i;
                                }
                                return ind;
                            }

                            function getTopOfThePage(ind) {
                                var $prev = $('.sn-docviewer-page[data-page="' + (ind - 1) + '"]').first();
                                return parseInt($prev.attr('data-top')) + $prev.height() + 50;
                            }

                            function scrollToThumbnail(p) {

                                var thumbnailContainerOrientation, position;
                                if ($('.sn-doc-thumbnails').width() > $('.sn-doc-thumbnails').height()) {
                                    thumbnailContainerOrientation = 'landscape';
                                } else {
                                    thumbnailContainerOrientation = 'portrait';
                                }

                                if (thumbnailContainerOrientation === 'portrait') {
                                    var pos = 1;
                                    if (p !== 1) pos = p - 1;

                                    position = $('.sn-thumbnail-page[data-page="' + pos + '"]').position().top - $('.sn-doc-thumbnails ul').position().top;

                                    if (dataObj.isFullscreen()) $('.sn-doc-thumbnails').scrollTop($('.sn-thumbnail-page[data-page="' + pos + '"]').offset().top - $('.sn-doc-thumbnails ul').offset().top + $('.sn-doc-thumbnails ul').scrollTop());else $('.sn-doc-thumbnails').animate({ scrollTop: position });
                                } else {
                                    position = $('.sn-thumbnail-page[data-page="' + p + '"]').position().left - $('.sn-doc-thumbnails ul').position().left;

                                    if (dataObj.isFullscreen()) $('.sn-doc-thumbnails').animate({ scrollLeft: position });else $('.sn-doc-thumbnails').animate({ scrollLeft: position });
                                }
                            }

                            function setPageAccordingToScroll(scrolling) {
                                var pageNum = parseInt(getCurrentPage());
                                if (!isNaN(parseInt(pageNum)) && parseInt(pageNum) <= maxpreview && scrolling) {
                                    if (pageNum + 1 <= maxpreview && pageNum === parseInt($('.sn-docviewer-page').last().attr('data-page')) || $docpreview.scrollTop() + $docpreview.innerHeight() >= $docpreview[0].scrollHeight) {
                                        pageNum = parseInt($('.sn-docviewer-page').last().attr('data-page'));
                                        if (pageNum + 1 <= maxpreview && newPage(pageNum + 1)) {
                                            var pNum = pageNum + 1;
                                            demandNewPage(pNum);
                                            setDataTops(pNum);
                                            SetPreviewControls(pageNum, true);
                                            $('.sn-doc-thumbnails li').removeClass('active');
                                            $('.sn-doc-thumbnails li[data-page="' + pageNum + '"]', $container).addClass('active');
                                            scrollToThumbnail(pageNum);
                                        }
                                    } else if (scrolling) {
                                        getDeletableAndLoadableCanvases(pageNum);
                                        SetPreviewControls(pageNum, true);
                                        $('.sn-doc-thumbnails li').removeClass('active');
                                        $('.sn-doc-thumbnails li[data-page="' + pageNum + '"]', $container).addClass('active');

                                        scrollToThumbnail(pageNum);
                                    }
                                }
                            }

                            function addNewThumbnailPlaceHolder($imageList, orientation, ind, placeholderImgPath, dataLoaded, w, h) {
                                var twidth = 95;
                                var theight = 130;
                                if (w > h) {
                                    var a = twidth;
                                    twidth = theight;
                                    theight = a;
                                }

                                if (ind <= maxpreview) {
                                    var $thumbnail = $('<li class="sn-thumbnail-page" data-page="' + ind + '" data-width="' + twidth + '" data-height="' + theight + '"><img src="' + placeholderImgPath + '" data-loaded="' + dataLoaded + '" /><span>Page ' + ind + '</span></li>');

                                    $thumbnail.insertIndex(ind, $('ul', $('.sn-doc-thumbnails')));

                                    var twidth = '100px';var theight = '150px';
                                    if (w > h) {
                                        twidth = '120px';
                                        theight = '100px';
                                    }

                                    $thumbnail.css({
                                        'margin-right': '20px',
                                        'width': twidth,
                                        'height': theight
                                    });

                                    $('.sn-thumbnail-page').on('click.snDocViewer', function () {
                                        if ($(this).attr('data-loaded') === 'true') {
                                            var thumbnailNum = parseInt($(this).attr('data-page'));
                                            removeAllContextMenu();

                                            if (newPage(pageNum)) {
                                                demandNewPage(pageNum);
                                                setDataTops(pageNum);
                                            }

                                            getDeletableAndLoadableCanvases(thumbnailNum);
                                            SetPreviewControls(thumbnailNum);
                                        }
                                    });
                                }
                            }

                            function getCurrentPage() {
                                var pageNum;

                                $docpreview.find('li').each(function () {
                                    var $that = this;
                                    $that = $($that);
                                    var top = $that.offset().top - $that.height() * scale / 2;

                                    if ($that.attr('data-page') === $docpreview.children().last('li').attr('data-page')) top = $that.offset().top;

                                    var height = $that.height() * scale;
                                    if (top > -height && top < height && $that.attr('data-page') !== NaN) {
                                        pageNum = parseInt($that.attr('data-page'));
                                        if (pageNum === 'NaN') pageNum = currentpreview + 1;
                                        return false;
                                    }
                                });
                                return pageNum;
                            }

                            var showable = [];
                            function getDeletableAndLoadableCanvases(num) {
                                num = parseInt(num);
                                showable = [];
                                var pages = [];
                                var hpages = [];
                                var deletable = [];
                                if (num === 1) {
                                    if (previewNumInTheSameTime > maxpreview) {
                                        previewNumInTheSameTime = maxpreview;
                                    }
                                    for (var i = num; i < num + previewNumInTheSameTime; i++) {
                                        pages.push(i);
                                    }
                                } else if (num === parseInt(maxpreview)) {
                                    for (var j = num; j > num - (previewNumInTheSameTime + 1); j--) {
                                        pages.push(j);
                                    }
                                } else if (num < parseInt(maxpreview)) {
                                    var n = (previewNumInTheSameTime - 1) % 2;
                                    var m, start, end;
                                    if (n === 0) {
                                        m = Math.round((previewNumInTheSameTime - 1) / 2);

                                        start = num - m;
                                        end = num + (m + 1);

                                        if (num - m < 1) {
                                            start = 1;
                                        }

                                        if (num + (m + 1) > maxpreview) {
                                            end = maxpreview;
                                        } else if (lastEixistingPage() - (num + (previewNumInTheSameTime - 1)) <= 0 && num + (m + 1) <= maxpreview) end = lastEixistingPage();

                                        for (i = start; i < end + 1; i++) {
                                            pages.push(i);
                                        }
                                    } else {
                                        m = Math.round((previewNumInTheSameTime - 1) / 2) - 1;

                                        start = num - (m + 1);
                                        end = num + (m + 1);

                                        if (num - m < 1) {
                                            start = 1;
                                        }

                                        if (num + (m + 1) > maxpreview) {
                                            end = maxpreview;
                                        }

                                        if (lastEixistingPage() - (num + (previewNumInTheSameTime - 1)) <= 0 && num + (m + 1) <= maxpreview) end = lastEixistingPage();

                                        for (i = start; i < end + 1; i++) {
                                            pages.push(i);
                                        }
                                    }
                                }

                                $.grep(pages, function (el) {
                                    if ($.inArray(el, hpages) === -1) {
                                        showable.push(el);
                                    }
                                });

                                $.grep(hpages, function (el) {
                                    if ($.inArray(el, pages) === -1) {
                                        deletable.push(el);
                                    }
                                });

                                hpages = pages;

                                deleteUnnecessaryCanvases(deletable);


                                $.each(showable, function (i, item) {

                                    var preview = getPreviewInfoByIndex(item, existingPages);

                                    if (typeof preview !== 'undefined') {
                                        var $current = $('.sn-docviewer-page[data-page="' + item + '"]');
                                        displayCanvases(item, preview.Width, preview.Height);

                                        $currentPage = $('.sn-docviewer-page[data-page="' + item + '"]');

                                        if ($currentPage.hasClass('rotated')) {
                                            rotateCanvases($('.sn-docviewer-page[data-page="' + item + '"]'));
                                        }

                                        if (isShapeOnThisPage(item)) {
                                            setTimeout(function () {
                                                showShapesOnPages(item);
                                            }, 300);
                                        }

                                        var wholeDocRotation = wholeDocumentRotated();
                                        if (wholeDocRotation > 0) documentDegree = wholeDocRotation;
                                    }
                                });
                            }

                            function getPreviewInfoByIndex(ind, data) {
                                var preview;
                                $.each(data, function (i, item) {
                                    if (item.Index === ind) preview = item;
                                });
                                return preview;
                            }

                            function lastEixistingPage() {
                                return parseInt($('.sn-docviewer-page').last().attr('data-page'));
                            }

                            function deleteUnnecessaryCanvases(deletable) {
                                $.each(deletable, function (i, item) {
                                    $('.sn-docviewer-page[data-page="' + item + '"]').children('canvas').remove();
                                });
                            }

                            function deleteUnnecessaryThumbnails(deletable) {
                                $.each(deletable, function (i, item) {
                                    var that = $('.sn-thumbnail-page[data-page="' + item + '"] img');
                                    that.attr('src', placeholderImgPath);
                                    that.attr('data-loaded', false);
                                    that.parent().removeClass('active');
                                });
                            }

                            function appendPreviewPostfix(url, addWatermark, addNoChache, rotation) {
                                if (url.indexOf('?') === -1) {
                                    url += '?';
                                    if (addWatermark) {
                                        url += 'watermark=true';
                                    }
                                } else if (addWatermark && url.indexOf('?') > -1) {
                                    url += '&watermark=true';
                                }
                                if (addNoChache) {
                                    url += '&nochache=' + new Date().getTime();
                                }
                                if (typeof rotation !== 'undefined' && rotation !== "") {
                                    url += rotation;
                                }
                                return url;
                            }

                            function displayCanvases(i, w, h) {

                                var that = $('li[data-page="' + i + '"]', $docpreview);

                                contexts = {};
                                if (that.children('canvas').length === 0) contexts[i] = createCanvases(i, w, h);
                                if (typeof canvasType !== 'undefined' && canvasType !== 'undefined') {
                                    setTimeout(function () {
                                        initializeCanvasFeature(canvasType);
                                    }, 500);
                                }

                                clearInterval(mainDraw);
                                setInterval(mainDraw, redrawInterval);
                            }

                            function displayThumbnail(i, path, w, h, thumbnailPathParam) {
                                var orientation = 'portrait';
                                if (w > h) orientation = 'landscape';
                                var $imageList = $('ul', $('.sn-doc-thumbnails'));

                                if ($('.sn-thumbnail-page[data-page="' + i + '"]').length === 0) addNewThumbnailPlaceHolder($imageList, orientation, i, placeholderImgPath, false, w, h);

                                var thumbnailPath = thumbnailPathParam || path;

                                var that = $('.sn-thumbnail-page[data-page="' + i + '"] img');
                                thumbnailPath = appendPreviewPostfix(thumbnailPath, !noWatermark, addNoChachePostfix);
                                that.attr('data-loaded', true);
                                that.attr('src', thumbnailPath);

                                var twidth;
                                if (w < h) twidth = 95;else twidth = 125;

                                that.attr('width', twidth);
                                if (typeof w !== 'undefined' && typeof h !== 'undefined' && w !== null && h !== null) {
                                    if (w > h) that.addClass('landscape');
                                }

                                if (currentpreview === Number(i)) that.parent().addClass('active');
                            }

                            function isShapeOnThisPage(num) {
                                var shapeExistsOnThisPage = false;
                                $.each(allshapes, function (a, item) {
                                    $.each(item, function (c, d) {
                                        if (d.imageIndex === num) {
                                            shapeExistsOnThisPage = true;
                                        }
                                    });
                                });

                                return shapeExistsOnThisPage;
                            }

                            function fitToWidth(w) {
                                $('.sn-icon-rubberband', $toolbarContainer).removeClass('active');

                                if (typeof w !== 'undefined') imgWidth = w;

                                var rate = containerWidth / imgWidth;
                                setZoomLevel(rate);
                                if (rate < minZoomLevel) minZoomLevel = rate;
                                fitPreviewsToLeftEdge(dataObj.isFullscreen(), true, w);
                            }

                            function fitToHeight() {
                                $('.sn-icon-rubberband', $toolbarContainer).removeClass('active');

                                var rate = containerHeight / $('li.sn-docviewer-page[data-page="' + currentpreview + '"] img', $docpreview).height();
                                setZoomLevel(rate);
                                if (rate < minZoomLevel) minZoomLevel = rate;
                            }

                            function fitToWindow() {
                                $('.sn-icon-rubberband', $toolbarContainer).removeClass('active');

                                var rate1 = containerWidth / $('li.sn-docviewer-page[data-page="' + currentpreview + '"] img', $docpreview).width();
                                var rate2 = containerHeight / $('li.sn-docviewer-page[data-page="' + currentpreview + '"] img', $docpreview).height();
                                if (!touch) {
                                    setZoomLevel(Math.min(rate1, rate2));
                                    if (Math.min(rate1, rate2) < minZoomLevel) minZoomLevel = Math.min(rate1, rate2);
                                } else {
                                    var rate = $('body').width() / imgWidth;
                                    setZoomLevel(rate);
                                    if (rate < minZoomLevel) minZoomLevel = rate;
                                }
                            }

                            function fitPreviewsToLeftEdge(full, fit, w) {
                                var currentDegree = parseInt($('.sn-docviewer-page[data-page="' + currentpreview + '"]').attr('data-degree'));
                                if (currentDegree === 90 || currentDegree === -90) scrollLeft = 0;

                                $docpreview.scrollLeft((ulWidth - w) / 2 * scale);
                            }

                            function resizeListItemContainers() {
                                $('.sn-docviewer-page img[data-loaded="true"]').each(function () {
                                    var that = $(this);
                                    var w = parseInt(that.parent().attr('data-width'));
                                    var h = parseInt(that.parent().attr('data-height'));
                                    if (that.parent().hasClass('rotated') && (that.parent().attr('data-degree') === '90' || that.parent().attr('data-degree') === '-90')) {
                                        if (w > h) {
                                            that.parent('li').css({
                                                'width': h + 240,
                                                'height': w
                                            });
                                        } else {
                                            that.parent('li').css({
                                                'width': h,
                                                'height': w + 240
                                            });
                                        }
                                    } else if (that.parent().hasClass('rotated') && that.parent().attr('data-degree') === '180') {
                                        if (that.width() > that.height()) {
                                            that.parent('li').css({
                                                'width': w + 240,
                                                'height': h
                                            });
                                        } else {
                                            that.parent('li').css({
                                                'width': w + 240,
                                                'height': h
                                            });
                                        }
                                    } else {
                                        that.parent('li').css({
                                            'width': w + 240,
                                            'height': h
                                        });
                                    }
                                });
                            }

                            function createCanvases(page, w, h) {
                                var $redactioncanvas = $('<canvas/>', { 'class': 'redaction-canvas' });
                                var $highlightcanvas = $('<canvas/>', { 'class': 'highlight-canvas' });
                                var $annotationcanvas = $('<canvas/>', { 'class': 'annotation-canvas' });
                                var $technicalcanvas = $('<canvas/>', { 'class': 'technical-canvas' });
                                var $allCanvases = $().add($redactioncanvas).add($highlightcanvas).add($annotationcanvas).add($technicalcanvas);

                                var $li = $($('.sn-docpreview-desktop ul li[data-page="' + page + '"]', $container));
                                var $img = $('img', $li);
                                var canvasWidth = w;
                                var wideCanvasWidth = w + 240;

                                var redactioncanvas = $redactioncanvas[0];
                                redactioncanvas.width = canvasWidth;
                                redactioncanvas.height = h;

                                var highlightcanvas = $highlightcanvas[0];
                                highlightcanvas.width = canvasWidth;
                                highlightcanvas.height = h;

                                var annotationcanvas = $annotationcanvas[0];
                                annotationcanvas.width = wideCanvasWidth;
                                annotationcanvas.height = h;

                                var technicalcanvas = $technicalcanvas[0];
                                technicalcanvas.width = wideCanvasWidth;
                                technicalcanvas.height = h;

                                $allCanvases.on('selectstart.snDocViewer', function () {
                                    return false;
                                });

                                $allCanvases.add($img).css({
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    'user-select': 'none',
                                    '-moz-user-select': 'none',
                                    '-webkit-user-select': 'none'
                                }).on('selectstart.snDocViewer', function (e) {
                                    e.preventDefault();return false;
                                });
                                if (!$li.hasClass('rotated') || $li.attr('data-degree') === 180) {
                                    $img.css('margin-left', 120);
                                }
                                $redactioncanvas.add($highlightcanvas).css('margin-left', 120);
                                $annotationcanvas.add($technicalcanvas).css('margin-left', 0);

                                $('.sn-docpreview-desktop ul li[data-page="' + page + '"]').append($allCanvases);

                                if (!showShapes) {
                                    $allCanvases.hide();
                                } else if (!shapesAreShowing) {
                                    $allCanvases.hide();
                                } else {
                                    editmode = false;
                                    shapesAreShowing = true;
                                }
                                if (!isAdmin) {
                                    $redactioncanvas.hide();
                                }

                                if (agentStr.indexOf("Trident/4.0") > -1) {
                                    $('.sn-additional-tools').hide();
                                    redactioncanvas = G_vmlCanvasManager.initElement(redactioncanvas);
                                    highlightcanvas = G_vmlCanvasManager.initElement(highlightcanvas);
                                    annotationcanvas = G_vmlCanvasManager.initElement(annotationcanvas);
                                    technicalcanvas = G_vmlCanvasManager.initElement(technicalcanvas);
                                }
                                if (redactioncanvas.getContext) {

                                    return {
                                        "redaction": redactioncanvas.getContext('2d'),
                                        "highlight": highlightcanvas.getContext('2d'),
                                        "annotation": annotationcanvas.getContext('2d'),
                                        "technical": technicalcanvas.getContext('2d')
                                    };
                                }
                            }

                            function parseShapesJson(shapes) {
                                if (shapes && shapes.length > 0) {
                                    var shapeObj = shapes;
                                    if (typeof shapes === "string") shapeObj = $.parseJSON(shapes);
                                    if ((typeof shapeObj === "undefined" ? "undefined" : _typeof2(shapeObj)) !== "object") $.error("The shapes option is invalid");
                                    var drawShapes = function drawShapes(shapeObj, i, p, canvasType) {
                                        $.each(shapeObj[i][p], function (index, value) {
                                            addRect(value.x, value.y, value.w, value.h, value.imageIndex, canvasType, value.fontSize, value.fontFamily, value.fontColor, value.fontBold, value.fontItalic, value.text, value.lineHeight);
                                        });
                                    };
                                    drawShapes(shapeObj, 0, "redactions", "redaction");
                                    drawShapes(shapeObj, 1, "highlights", "highlight");
                                    drawShapes(shapeObj, 2, "annotations", "annotation");
                                } else if (shapes.length === 0) {
                                    allshapes = {
                                        redaction: [],
                                        highlight: [],
                                        annotation: []
                                    };
                                }
                            }

                            function parsePageAttributesJson() {
                                if (pageAttributes && pageAttributes.length > 0) {
                                    pageAttributesObj = pageAttributes;
                                    if (typeof pageAttributes === "string") pageAttributesObj = $.parseJSON(pageAttributes);
                                    if ((typeof pageAttributesObj === "undefined" ? "undefined" : _typeof2(pageAttributesObj)) !== "object") $.error("The shapes option is invalid");
                                }
                            }

                            function SetPreviewControls(page, dontScroll, fullScreen) {
                                if (currentpreview === page && !fullScreen) {
                                    if (page === maxpreview) $('.sn-input-jumptopage').val(maxpreview);else {
                                        $('.sn-doc-thumbnails li').removeClass('active');
                                        $('.sn-doc-thumbnails li[data-page="' + currentpreview + '"]').addClass('active');
                                    }
                                }
                                if (maxpreview === 0) {
                                    currentpreview = 0;
                                    return;
                                }
                                if (page < 1 || page > maxpreview) {
                                    return;
                                }

                                if (!dontScroll && currentpreview !== page || !dontScroll && fullScreen) {

                                    currentpreview = Number(page);
                                    currentpreviewWidth = $('#imageContainer' + page).attr('data-width');

                                    var currentimageId = "imageContainer" + currentpreview;
                                    var currentImageObj = $('#' + currentimageId, $container);
                                    var position;
                                    if (iHeight === null) iHeight = currentImageObj.height();
                                    if (!touch) {
                                        position = $('#imageContainer' + currentpreview).aPosition().top + $docpreview.aPosition().top;

                                        $docpreview.animate({ scrollTop: position }, function () {
                                            $('.sn-input-jumptopage', $container).val(currentpreview);
                                            jumpDistance = 1;

                                            if (currentpreview === 1) {
                                                setTimeout(function () {
                                                    showShapesOnPages(currentpreview);
                                                }, 200);
                                            }
                                        });
                                        $('.sn-doc-thumbnails li').removeClass('active');
                                        $('.sn-doc-thumbnails li[data-page="' + currentpreview + '"]').addClass('active');
                                    } else {
                                        var currentItemOffsetTop = $('#docpreview').offset().top - (currentImageObj.aPosition().top + 120);
                                        var currentItemOffsetLeft = myScroll.x;
                                        myScroll.scrollTo(currentItemOffsetLeft, currentItemOffsetTop, 100);
                                        $('.sn-input-jumptopage', $container).val(currentpreview);
                                        if (currentpreview === 1) {
                                            setTimeout(function () {
                                                showShapesOnPages(currentpreview);
                                            }, 200);
                                        }
                                    }

                                    scrollToThumbnail(currentpreview);
                                }
                                if (dontScroll) {

                                    currentpreview = Number(page);
                                    currentpreviewWidth = $('#imageContainer' + page).attr('data-width');
                                    $('.sn-input-jumptopage', $container).val(currentpreview);
                                    if (currentpreview === 1) {
                                        setTimeout(function () {
                                            showShapesOnPages(currentpreview);touched = false;
                                        }, 200);
                                    }
                                }

                                if (currentpreview === 1 && currentpreview !== maxpreview) {
                                    $('.sn-icon-prev, .sn-icon-firstpage').addClass('disabled');
                                    $('.sn-icon-next, .sn-icon-lastpage').removeClass('disabled');
                                } else if (currentpreview === maxpreview && currentpreview !== 1) {
                                    $('.sn-icon-next, .sn-icon-lastpage').addClass('disabled');
                                    $('.sn-icon-prev, .sn-icon-firstpage').removeClass('disabled');
                                } else {
                                    $('.sn-icon-next, .sn-icon-lastpage').removeClass('disabled');
                                    $('.sn-icon-prev, .sn-icon-firstpage').removeClass('disabled');
                                }

                                if ($('.sn-docviewer-page[data-page="' + page + '"]').hasClass('rotated')) {
                                    disableEditorButtons();
                                } else if (!$('.sn-docviewer-page[data-page="' + page + '"]').hasClass('rotated')) enableEditorButtons();

                                if ($('.sn-icon-rubberband').hasClass('active')) setTechnicalCanvasForRubberbandZoom(page);

                                callbacks.pageChanged && callbacks.pageChanged(currentpreview);
                            }

                            function setZoomLevel(newLevel, x0, y0, $rel, rb) {
                                var $zoo = $('.zoomer', $docpreview);
                                $ul = $('ul', $docpreview);
                                var $li = $('li', $ul);
                                var $img = $('img', $li);
                                var $rel = $rel || $('.sn-docviewer-page:first').children('technicalcanvas');
                                var $currentLi = $rel.closest('li.sn-docviewer-page');
                                if (!$currentLi.length) $currentLi = $('.sn-docviewer-page[data-page="' + currentpreview + '"]');

                                if (!x0) {
                                    x0 = x0 || $img.width() * 0.25;
                                    y0 = y0 || $docpreview.scrollTop() / scale;
                                }
                                var oldWidth = imgWidth * scale + 240 * scale;
                                var newWidth = imgWidth * newLevel + 240 * scale;

                                var origScale = scale;
                                scale = newLevel;

                                $ul.css({
                                    'transform': 'scale(' + scale + ')',
                                    '-moz-transform': 'scale(' + scale + ')',
                                    '-ms-transform': 'scale(' + scale + ')',
                                    '-webkit-transform': 'scale(' + scale + ')',
                                    '-o-transform': 'scale(' + scale + ')',
                                    'transform-origin': scale > 1 ? '0 0' : '0 0',
                                    '-moz-transform-origin': scale > 1 ? '0 0' : '0 0',
                                    '-ms-transform-origin': scale > 1 ? '0 0' : '0 0',
                                    '-webkit-transform-origin': scale > 1 ? '0 0' : '0 0',
                                    '-o-transform-origin': scale > 1 ? '0 0' : '0 0',
                                    'width': ulWidth,
                                    'text-align': 'center'
                                });

                                $zoo.css({
                                    'width': ulWidth * scale,
                                    'height': $ul.height() * scale,
                                    'margin': '0px auto'
                                });

                                if (rb) {
                                    var diff = $rel ? $li.offset().left - $rel.offset().left - $li.position().left : 0;
                                    $docpreview.scrollLeft(Math.max(0, x0 * scale - diff));
                                    $docpreview.scrollTop(Math.max(0, $currentLi.position().top + y0 * scale));
                                } else {

                                    var relScale = scale / origScale;

                                    var y = containerHeight / 2;

                                    y = y + $('#docpreview').position().top - $docpreview.scrollTop();

                                    y = y - y * relScale + $docpreview.scrollTop();

                                    if ($docpreview.scrollTop() === 0) {
                                        y = 0;
                                    }

                                    $docpreview.scrollTop(y);
                                    $docpreview.scrollLeft($docpreview.scrollLeft() + (newWidth - oldWidth) / 2);
                                }

                                if (newLevel === 1 && $container.parent().hasClass("sn-docpreview-fullscreen-wrapper")) {
                                    fitPreviewsToLeftEdge(true, false, currentpreviewWidth);
                                }

                                setDataTops();
                                setPageAccordingToScroll(false);
                                callbacks.zoomLevelChanged && callbacks.zoomLevelChanged(scale);
                            }

                            function widestPageWidth() {
                                var widestWidth = imgWidth;
                                $('.sn-docviewer-page').each(function () {
                                    $element = $(this);
                                    if ($element.width() > widestWidth) {
                                        widestWidth = $element.width();
                                    }
                                });
                                return widestWidth;
                            }

                            function setDataTops(i) {
                                if (typeof i !== 'undefined' || i !== undefined) {
                                    var $that = $('#imageContainer' + i);
                                    var prev = $that.prev('li');
                                    var prevTop = parseInt(prev.attr('data-top'));
                                    var prevHeight = prev.height();
                                    if ($that.attr('data-page') !== '1') $that.attr('data-top', prevTop + prevHeight + 50);else $that.attr('data-top', 0);
                                } else {
                                    $('.sn-docviewer-page').each(function () {
                                        var prev = $(this).prev('li');
                                        var prevTop = parseInt(prev.attr('data-top'));
                                        var prevHeight = prev.height();
                                        var $that = $(this);
                                        if ($that.attr('data-page') !== '1') $that.attr('data-top', prevTop + prevHeight + 50);else $that.attr('data-top', 0);
                                    });
                                }
                            }

                            function ShowThumbnails() {

                                var $this = $(this);

                                if (!$this.hasClass('active')) {
                                    $this.addClass('active');
                                    $metadatacontainer.addClass('fulscreen-metadata').fadeIn();
                                } else {
                                    $this.removeClass('active');
                                    $metadatacontainer.fadeOut(200, function () {
                                        $metadatacontainer.removeClass('fulscreen-metadata');
                                    });
                                }

                                if (currentpreview > 1) scrollToThumbnail(currentpreview);
                            }

                            function enterFullscreenMode(pnum) {
                                if (dataObj.isFullscreen()) return;
                                var width = $(window).width();
                                var height = $(window).height();
                                var $fullscreenWrapper = $(".sn-docpreview-fullscreen-wrapper");
                                if ($fullscreenWrapper.length) $.error("Another document viewer is already in fullscreen mode, can't switch this one to fullscreen mode too.");

                                var heightDiff = $pluginSubject.height() - containerHeight;

                                $fullscreenWrapper = $('<div class="sn-docpreview-fullscreen-wrapper"></div>').css({
                                    left: 0,
                                    top: 0,
                                    position: "absolute",
                                    width: width,
                                    height: height,
                                    'z-index': 1000
                                }).appendTo($("body"));
                                $(window).off('resize.snDocViewerFullscreen').on('resize.snDocViewerFullscreen', function () {
                                    $fullscreenWrapper.css({
                                        width: width,
                                        height: height
                                    });
                                });

                                $container.appendTo($fullscreenWrapper);

                                $docpreview.height(height - heightDiff);
                                $metadatacontainer.hide();
                                $imagecontainer.width('100%');
                                $(".sn-doc-title").addClass('viewer-fullScreen').removeClass('viewer-normalScreen');
                                $toolbarContainer.find('.sn-icon-fullscreen').addClass('normalscreen').parent().attr('title', SR.toolbarExitFullscreen);
                                $('<div class="seeThumbnails" title="' + SR.showThumbnails + '"><span class="sn-icon sn-icon-thumbnails"></span></div>').on('click.snDocViewer', ShowThumbnails).appendTo($docpreview.parent());

                                hpages = [];

                                var thumbnailListHeight = height;
                                $('.sn-doc-thumbnails').height(thumbnailListHeight);

                                if (touch) {
                                    myScroll.scrollTo(-130 * scale, 0);
                                }

                                $(window).trigger("resize");

                                setTimeout(function () {
                                    SetPreviewControls(pnum, false, true);
                                    fitPreviewsToLeftEdge(true, false, currentpreviewWidth);
                                }, 1000);
                            }

                            function exitFullscreenMode() {
                                if (!dataObj.isFullscreen()) return;

                                $(window).off('resize.snDocViewerFullscreen');
                                var $fullscreenWrapper = $(".sn-docpreview-fullscreen-wrapper");

                                $container.appendTo($pluginSubject);

                                $fullscreenWrapper.remove();

                                $docpreview.height(containerHeight);
                                $metadatacontainer.show();
                                $imagecontainer.width('75%');
                                $toolbarContainer.find('.sn-icon-fullscreen').removeClass('normalscreen').parent().attr('title', 'Fullscreen');
                                $docpreview.find('.seeThumbnails').remove();
                                $docpreview.parent().find('.seeThumbnails').remove();
                                $metadatacontainer.removeClass('fulscreen-metadata');
                                $(".sn-doc-title").removeClass('viewer-fullScreen').addClass('viewer-normalScreen');

                                $(window).trigger("resize");

                                SetPreviewControls(currentpreview, false, true);
                                var left = $('.sn-thumbnail-page[data-page="' + currentpreview + '"]').position().left;
                                if (left === 0) {} else {
                                    if ($('.sn-doc-thumbnails').width() > $('.sn-doc-thumbnails').height()) {
                                        $('.sn-doc-thumbnails').scrollLeft(left);
                                    } else {
                                        $('.sn-doc-thumbnails').animate({ scrollTop: left }, 100);
                                    }
                                }

                                setTimeout(function () {
                                    fitPreviewsToLeftEdge(false, false, currentpreviewWidth);
                                    var thumbnailListHeight = containerHeight;
                                    $('.sn-doc-thumbnails').height(thumbnailListHeight);
                                }, 500);
                            }

                            function Shape() {
                                this.x = 0;
                                this.y = 0;
                                this.w = mySelBoxSize;
                                this.h = mySelBoxSize;
                            };

                            function Redaction() {
                                Shape.call(this);
                            }

                            function Highlight() {
                                Shape.call(this);
                            }

                            function Annotation() {
                                Shape.call(this);
                            }

                            Shape.prototype = {
                                fill: 'rgba(0,0,0,1)',
                                drawSelectionHandles: function drawSelectionHandles(context) {
                                    var half = mySelBoxSize / 2;

                                    selectionHandles[0].x = this.x - half;
                                    selectionHandles[0].y = this.y - half;

                                    selectionHandles[1].x = this.x + this.w / 2 - half;
                                    selectionHandles[1].y = this.y - half;

                                    selectionHandles[2].x = this.x + this.w - half;
                                    selectionHandles[2].y = this.y - half;

                                    selectionHandles[3].x = this.x - half;
                                    selectionHandles[3].y = this.y + this.h / 2 - half;

                                    selectionHandles[4].x = this.x + this.w - half;
                                    selectionHandles[4].y = this.y + this.h / 2 - half;

                                    selectionHandles[6].x = this.x + this.w / 2 - half;
                                    selectionHandles[6].y = this.y + this.h - half;

                                    selectionHandles[5].x = this.x - half;
                                    selectionHandles[5].y = this.y + this.h - half;

                                    selectionHandles[7].x = this.x + this.w - half;
                                    selectionHandles[7].y = this.y + this.h - half;

                                    context.strokeStyle = mySelColor;
                                    context.lineWidth = mySelWidth;
                                    context.strokeRect(this.x, this.y, this.w, this.h);

                                    for (var i = 0; i < 8; i++) {
                                        selectionHandles[i].draw(context);
                                    }
                                },
                                draw: function draw(context, optionalColor) {
                                    var d = 0;
                                    if (typeof $(context.canvas).closest('li').attr('data-degree') !== 'undefined') d = parseInt($(context.canvas).closest('li').attr('data-degree'));

                                    if (!context || !context.canvas) return;
                                    if (this.x > context.canvas.width || this.y > context.canvas.height || this.x + this.w < 0 || this.y + this.h < 0) return;

                                    context.fillStyle = this.fill;
                                    context.fillRect(this.x, this.y, this.w, this.h);

                                    if (mySel === this) this.drawSelectionHandles(context);
                                }
                            };

                            Redaction.prototype = {
                                fill: 'rgba(0,0,0,1)',
                                drawSelectionHandles: Shape.prototype.drawSelectionHandles,
                                draw: Shape.prototype.draw
                            };

                            Highlight.prototype = {
                                fill: 'rgba(255,255,0,0.4)',
                                drawSelectionHandles: Shape.prototype.drawSelectionHandles,
                                draw: Shape.prototype.draw
                            };

                            Annotation.prototype = {
                                minWidth: 120,
                                minHeight: 140,
                                fill: 'rgba(248,236,194,1)',
                                drawSelectionHandles: Redaction.prototype.drawSelectionHandles,
                                draw: function draw(context, optionalColor) {
                                    if (this.x > context.canvas.width || this.y > context.canvas.height || this.x + this.w < 0 || this.y + this.h < 0) return;

                                    context.fillStyle = this.fill;
                                    context.shadowColor = '#999';
                                    context.shadowBlur = 20;
                                    context.shadowOffsetX = 5;
                                    context.shadowOffsetY = 5;
                                    context.fillRect(this.x, this.y, this.w, this.h);

                                    context.shadowColor = 'transparent';
                                    context.font = this.fontBold + ' ' + this.fontItalic + ' ' + this.fontSize + ' ' + this.fontFamily;
                                    context.fillStyle = this.fontColor;

                                    wrapText(context, this.text, this.x + 10, this.y + 30, this.w - 10, this.h, this.lineHeight + 5);

                                    if (mySel === this) this.drawSelectionHandles(context);
                                }
                            };

                            function wrapText(context, text, x, y, maxWidth, maxHeight, lineHeight) {
                                var cars = text.split("\n");
                                var lines = [];
                                var totalHeight = 0;

                                var addLineBreakLongWords = function addLineBreakLongWords(line) {
                                    if (!line || !(line = line.trim())) return;

                                    var line1 = line;
                                    var line2 = "";

                                    var testWidth = context.measureText(line1).width;
                                    while (testWidth > maxWidth) {
                                        line2 = line1.substr(line1.length - 1, 1) + line2;
                                        line1 = line1.substr(0, line1.length - 1);
                                        testWidth = context.measureText(line1).width;
                                    }

                                    if (line1) lines.push(line1);
                                    if (line2) addLineBreakLongWords(line2);
                                };

                                var addLineBreakOnSpaces = function addLineBreakOnSpaces(car) {
                                    var line = "";
                                    var words = car.split(" ");

                                    for (var n = 0; n < words.length; n++) {
                                        var testLine = line + words[n] + " ";
                                        var metrics = context.measureText(testLine);
                                        var testWidth = metrics.width;

                                        if (testWidth > maxWidth) {
                                            addLineBreakLongWords(line);
                                            line = words[n] + " ";
                                        } else {
                                            line = testLine;
                                        }
                                    }

                                    addLineBreakLongWords(line);
                                };

                                for (var ii = 0; ii < cars.length; ii++) {
                                    addLineBreakOnSpaces(cars[ii]);
                                }

                                for (var yy = 0; yy < lines.length; yy++) {
                                    var line = lines[yy];
                                    context.fillText(line, x, y);
                                    y += lineHeight;
                                    totalHeight += lineHeight;

                                    if (totalHeight + lineHeight * 2.3 > maxHeight && yy < lines.length - 2) {
                                        context.fillText("...", x, y);
                                        break;
                                    }
                                }
                            }

                            function addRect(x, y, w, h, imageIndex, type, fontSize, fontFamily, fontColor, fontBold, fontItalic, text, lineHeight) {

                                var degree = 0;
                                if (typeof $('.sn-docviewer-page[data-page="' + currentpreview + '"]').attr('data-degree') !== 'undefined') degree = parseInt($('.sn-docviewer-page[data-page="' + currentpreview + '"]').attr('data-degree'));

                                var rect;
                                if (type === "redaction") {
                                    rect = new Redaction();
                                } else if (type === "highlight") {
                                    rect = new Highlight();
                                } else if (type === "annotation") {
                                    rect = new Annotation();
                                    rect.fontSize = fontSize || '24pt';
                                    rect.fontFamily = fontFamily || 'Arial';
                                    rect.fontColor = fontColor || '#333';
                                    rect.fontBold = fontBold || 'Normal';
                                    rect.fontItalic = fontItalic || 'Normal';
                                    rect.text = text || 'Double click to edit text';
                                    rect.lineHeight = lineHeight || 20;
                                }
                                rect.x = x;
                                rect.y = y;
                                rect.w = w;
                                rect.h = h;
                                rect.imageIndex = parseInt(imageIndex);
                                var rRect = rotateShape(rect, degree, imageIndex, type);

                                allshapes[type].push(rRect);
                                saveableshapes[type].push(rect);
                                invalidate();
                            }

                            function rotateShape(r, d, img, t) {
                                var $context = $('.sn-docviewer-page[data-page="' + img + '"]').find('canvas.' + t + '-canvas');
                                if (d === 0) {
                                    var x = r.x,
                                        y = r.y,
                                        w = r.w,
                                        h = r.h;
                                } else if (d === -90) {
                                    var x = $context.width() - (r.y + r.h) + 120 * scale,
                                        y = r.x,
                                        w = r.h,
                                        h = r.w;
                                } else if (d === 90) {
                                    var x = r.y - 120,
                                        y = $context.height() - (r.x + r.w),
                                        w = r.h,
                                        h = r.w;
                                } else {
                                    var x = $context.width() - (r.x + r.w),
                                        y = $context.height() - (r.y + r.h),
                                        w = r.w,
                                        h = r.h;
                                }

                                r.x = x, r.y = y, r.w = w, r.h = h;

                                return r;
                            }

                            function rotateCoordinates(s, d, page, t) {
                                var $context = page.find('canvas.' + t + '-canvas');
                                if (d === 0) {
                                    var x = s.x,
                                        y = s.y;
                                } else if (d === -90) {
                                    var x = $context.width() - s.y + 120 * scale,
                                        y = s.x;
                                } else if (d === 90) {
                                    var x = s.y - 120,
                                        y = $context.height() - s.x + s.w;
                                } else {
                                    var x = $context.width() - s.x,
                                        y = $context.height() - s.y;
                                }

                                s.x = x, s.y = y;
                                return s;
                            }

                            function removeRect(index) {
                                allshapes[canvasType].splice(index, 1);
                                saveableshapes[canvasType].splice(index, 1);
                                removeAllContextMenu();
                                invalidate();
                            }

                            function initializeCanvasFeature(newType) {
                                setTimeout(function () {
                                    clearShapeSelections();
                                }, 200);
                                canvasType = newType || canvasType;
                                editmode = true;

                                var $canvas = $('.sn-docviewer-page[data-page="' + currentpreview + '"] .' + newType + '-canvas');
                                var $technicalcanvas = $container.find('canvas.technical-canvas');$('.sn-docviewer-page[data-page="' + currentpreview + '"] canvas.technical-canvas');

                                resetCanvasZIndexes();
                                $canvas.css('z-index', 100);

                                $technicalcanvas.off('mousedown.snDocViewer').off('mouseup.snDocViewer').off('mousemove.snDocViewer').off('dblclick.snDocViewer');

                                $technicalcanvas.on('mousedown.snDocViewer', myDown).on('mouseup.snDocViewer', myUp).on('mousemove.snDocViewer', myMove).on('dblclick.snDocViewer', myDblClick).on('click.snDocViewer', myClick);

                                selectionHandles = [];
                                for (var i = 0; i < 8; i++) {
                                    selectionHandles.push(new Shape());
                                }
                            }

                            function destroyCanvasFeature() {
                                if (typeof $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas') !== 'undefined' && $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas').length > 0) {
                                    setTimeout(function () {
                                        clearShapeSelections();
                                    }, 200);
                                }
                                editmode = false;
                                resetCanvasZIndexes();
                                var $technicalcanvas = $('canvas.technical-canvas');
                                $technicalcanvas.off('mousedown.snDocViewer').off('mouseup.snDocViewer').off('mousemove.snDocViewer').off('dblclick.snDocViewer');
                            }

                            function resetCanvasZIndexes() {
                                $container.find("canvas.annotation-canvas").css('z-index', 40);
                                $container.find("canvas.redaction-canvas").css('z-index', 30);
                                $container.find("canvas.highlight-canvas").css('z-index', 20);
                                $container.find("canvas.technical-canvas").css('z-index', 101);
                            }

                            function clear(ctx) {
                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                            }
                            var currentshapes;
                            function mainDraw(ignoreValid) {
                                if (!ignoreValid && canvasValid || !canvasType) return;

                                var p = currentpreview;
                                if (typeof $('.sn-docviewer-page[data-page="' + p + '"] .' + canvasType + '-canvas')[0] !== 'undefined') {
                                    var ctx = $('.sn-docviewer-page[data-page="' + p + '"] .' + canvasType + '-canvas')[0].getContext('2d');
                                    currentshapes = allshapes[canvasType];
                                    clear(ctx);
                                    canvasValid = true;

                                    for (var i = currentshapes.length; i--;) {
                                        if (parseInt(currentshapes[i].imageIndex) === p) {
                                            currentshapes[i].draw(ctx);
                                        }
                                    }
                                }
                            }

                            function myMove(e) {

                                var $currentPage = $('.sn-docviewer-page[data-page="' + currentpreview + '"]');

                                var d = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') d = parseInt($currentPage.attr('data-degree'));

                                var $canvas = $currentPage.find('.' + canvasType + '-canvas');
                                var $technicalcanvas = $currentPage.find('.technical-canvas');
                                var diff = ($canvas.offset().left - $technicalcanvas.offset().left) / scale;
                                var p = calculateMousePos(e, $technicalcanvas, d);

                                var rm = {};
                                rm.x = p.x;
                                rm.y = p.y;

                                if (d !== 0) rm = rotateCoordinates(rm, d, $currentPage, canvasType);

                                rmx = rm.x;
                                rmy = rm.y;

                                if (rmstart === this) {
                                    if (isDrag && mySel) {
                                        started = false;
                                        mySel.x = rmx - x0;
                                        mySel.y = rmy - y0;

                                        $technicalcanvas.css({ 'cursor': 'move' });
                                        invalidate();
                                    } else if (isResizeDrag) {
                                        var oldx = mySel.x;
                                        var oldy = mySel.y;
                                        started = false;

                                        if (expectResize & resizeFlags.fromTop) {
                                            if (!mySel.minHeight || mySel.h + oldy - rmy >= mySel.minHeight) {
                                                mySel.y = rmy;
                                                mySel.h += oldy - rmy;
                                            }
                                        }
                                        if (expectResize & resizeFlags.fromRight) {
                                            mySel.w = mySel.minWidth ? Math.max(rmx - diff - oldx, mySel.minWidth) : rmx - diff - oldx;
                                        }
                                        if (expectResize & resizeFlags.fromBottom) {
                                            mySel.h = mySel.minHeight ? Math.max(rmy - oldy, mySel.minHeight) : rmy - oldy;
                                        }
                                        if (expectResize & resizeFlags.fromLeft) {
                                            if (!mySel.minWidth || mySel.w + oldx - rmx + diff >= mySel.minWidth) {
                                                mySel.x = rmx - diff;
                                                mySel.w += oldx - rmx + diff;
                                            }
                                        }

                                        invalidate();
                                    } else {
                                        drawRectangleMove.call($technicalcanvas, e);
                                    }
                                }

                                if (mySel && !isResizeDrag) {
                                    for (var i = 0; i < 8; i++) {
                                        var cur = selectionHandles[i];
                                        if (rmx - diff >= cur.x && rmx - diff <= cur.x + mySelBoxSize + 15 && rmy >= cur.y && rmy <= cur.y + mySelBoxSize + 15) {
                                            switch (i) {
                                                case 0:
                                                    expectResize = resizeFlags.fromTop | resizeFlags.fromLeft;
                                                    this.style.cursor = 'nw-resize';
                                                    break;
                                                case 1:
                                                    expectResize = resizeFlags.fromTop;
                                                    this.style.cursor = 'n-resize';
                                                    break;
                                                case 2:
                                                    expectResize = resizeFlags.fromTop | resizeFlags.fromRight;
                                                    this.style.cursor = 'ne-resize';
                                                    break;
                                                case 3:
                                                    expectResize = resizeFlags.fromLeft;
                                                    this.style.cursor = 'w-resize';
                                                    break;
                                                case 4:
                                                    expectResize = resizeFlags.fromRight;
                                                    this.style.cursor = 'e-resize';
                                                    break;
                                                case 5:
                                                    expectResize = resizeFlags.fromBottom | resizeFlags.fromLeft;
                                                    this.style.cursor = 'sw-resize';
                                                    break;
                                                case 6:
                                                    expectResize = resizeFlags.fromBottom;
                                                    this.style.cursor = 's-resize';
                                                    break;
                                                case 7:
                                                    expectResize = resizeFlags.fromBottom | resizeFlags.fromRight;
                                                    this.style.cursor = 'se-resize';
                                                    break;
                                            }
                                            invalidate();
                                            return;
                                        } else if (!isDrag) {
                                            $technicalcanvas.css({ 'cursor': 'default' });
                                        }
                                    }
                                    isResizeDrag = false;
                                    expectResize = 0;
                                }
                            }

                            function myDown(e) {
                                if (Number($(e.target).closest('li').attr('data-page')) === Number(currentpreview)) {
                                    var $technicalcanvas = $(this);

                                    rmstart = this;
                                    rmx = undefined;
                                    rmy = undefined;

                                    $technicalcanvas.off('keydown.snDocViewer');
                                    $technicalcanvas.attr('tabindex', '0').on('keydown.snDocViewer', function (e) {
                                        if (mySel && e.which === 46) {
                                            index = mySel.index;
                                            removeRect(index);
                                        }
                                    });

                                    $(window).on("mouseup.snDocViewer_" + docViewerId, function (e) {
                                        $(window).off("mouseup.snDocViewer_" + docViewerId);
                                        isDrag = false;
                                        isResizeDrag = false;
                                        expectResize = 0;
                                        rmstart = null;

                                        if (typeof $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas')[0] !== 'undefined') var technicalctx = $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas')[0].getContext('2d');

                                        clear(technicalctx);
                                        $technicalcanvas.css({ 'cursor': 'auto' });
                                    });

                                    if (expectResize !== 0) {
                                        isResizeDrag = true;
                                        return;
                                    }
                                    if (e.which == 1 || e.which == 3) {
                                        removeAllContextMenu();
                                    }

                                    findSelectedRect.call($technicalcanvas, e);

                                    if (!mySel) {
                                        drawRectangle.call($technicalcanvas, e);
                                        invalidate();
                                    } else if (mySel && e.which == 3) {
                                        showContextMenuForSelectedRect();
                                        e.preventDefault();
                                        return false;
                                    } else if (mySel) {
                                        isDrag = true;
                                    }
                                }
                            }

                            function myUp(e) {

                                var $currentPage = $('.sn-docviewer-page[data-page="' + currentpreview + '"]');

                                var d = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') d = parseInt($currentPage.attr('data-degree'));

                                var $canvas = $currentPage.find('.' + canvasType + '-canvas');
                                var $technicalcanvas = $currentPage.find('.technical-canvas');
                                var diff = ($canvas.offset().left - $technicalcanvas.offset().left) / scale;
                                var p = calculateMousePos(e, $technicalcanvas, d);

                                var rm = {};
                                rm.x = p.x;
                                rm.y = p.y;

                                if (d !== 0) rm = rotateCoordinates(rm, d, $currentPage, canvasType);

                                rmx = rm.x;
                                rmy = rm.y;

                                if (parseInt($(e.target).closest('li').attr('data-page')) === currentpreview) {
                                    isDrag = false;
                                    isResizeDrag = false;
                                    expectResize = 0;
                                    if (started && rmstart === this) {
                                        drawRectangleUp.call(this, x0, y0, rmx, rmy, rmx, rmy, rmx, rmy);
                                        started = false;
                                    }

                                    rmstart = null;
                                } else if (parseInt($(e.target).closest('li').attr('data-page')) !== currentpreview && started) {
                                    callbacks.viewerError && callbacks.viewerError(SR.errorWithDrawingOnSelectedPage);
                                    started = false;
                                } else {
                                    callbacks.viewerInfo && callbacks.viewerInfo(SR.otherPageIsSelected);
                                }
                                started = false;
                            }

                            function myClick(e) {
                                var clickedPageNum = parseInt($(e.currentTarget).closest('li').attr('data-page'));

                                var oldaPageNum = currentpreview;

                                var $admintoolbar = $('.sn-additional-tools');
                                var selectedButton = $admintoolbar.find('.active').attr('data-canvastype');

                                if (clickedPageNum !== currentpreview) {
                                    currentpreview = Number(clickedPageNum);
                                    currentpreviewWidth = $('#imageContainer' + clickedPageNum).attr('data-width');
                                    clearTimeout(setPageAccordingToScroll);

                                    if (!$('.sn-doc-thumbnails li[data-page="' + currentpreview + '"]', $container).hasClass('active')) {
                                        if (typeof selectedButton !== 'undefined') canvasType = selectedButton;
                                        getDeletableAndLoadableCanvases(currentpreview);
                                        SetPreviewControls(currentpreview, true);
                                        $('.sn-doc-thumbnails li').removeClass('active');
                                        $('.sn-doc-thumbnails li[data-page="' + currentpreview + '"]', $container).addClass('active');
                                        scrollToThumbnail(currentpreview);
                                    }
                                }
                            }

                            function myDblClick(e) {
                                var $technicalcanvas = $(this);

                                var $currentPage = $('.sn-docviewer-page[data-page="' + currentpreview + '"]');

                                var d = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') d = parseInt($currentPage.attr('data-degree'));

                                var p = calculateMousePos(e, $technicalcanvas, d);

                                rmx = p.x;
                                rmy = p.y;

                                findSelectedRect.call($technicalcanvas, e);

                                if (mySel) {
                                    showContextMenuForSelectedRect();
                                } else {
                                    var width = 200;
                                    var height = 50;
                                    var $canvas = $('.sn-docviewer-page[data-page="' + currentpreview + '"] .' + canvasType + '-canvas');

                                    rmx -= $canvas.offset().left - $technicalcanvas.offset().left;

                                    if (canvasType === "redaction" || canvasType == "highlight" && $('.sn-additional-tools .active').length > 0) {
                                        addRect(rmx - width / 2, rmy - height / 2, width + 10, height + 10, currentpreview, canvasType);
                                    } else if (canvasType === "annotation" || canvasType == "Annotation") {
                                        addRect(rmx, rmy, 200, 250, currentpreview, canvasType, '14pt', 'Arial', '#333', 'Normal', 'Normal', annotationDefaultText, 20);
                                    }
                                }
                            }

                            function findSelectedRect(e) {
                                var $technicalcanvas = $(this);

                                var $currentPage = $('.sn-docviewer-page[data-page="' + currentpreview + '"]');

                                var d = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') d = parseInt($currentPage.attr('data-degree'));

                                var $canvas = $currentPage.find('.' + canvasType + '-canvas');
                                var technicalctx = $currentPage.find('.technical-canvas')[0].getContext('2d');

                                var p = calculateMousePos(e, $technicalcanvas, d);

                                var degree = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') degree = parseInt($currentPage.attr('data-degree'));

                                if (degree !== 0) p = rotateCoordinates(p, degree, $currentPage, canvasType);

                                clear(technicalctx);
                                mySel = null;

                                for (var i = saveableshapes[canvasType].length; i--;) {
                                    if (parseInt(saveableshapes[canvasType][i].imageIndex) === currentpreview) {
                                        saveableshapes[canvasType][i].draw(technicalctx, 'black');

                                        var diff = ($canvas.offset().left - $technicalcanvas.offset().left) / scale;
                                        var imageData = technicalctx.getImageData(p.x - diff, p.y, 1, 1);
                                        var index = (p.x - diff + p.y * imageData.width) * 4;
                                        clear(technicalctx);

                                        if (imageData.data[3] > 0) {
                                            mySel = saveableshapes[canvasType][i];
                                            x0 = p.x - mySel.x;
                                            y0 = p.y - mySel.y;
                                            mySel.index = i;
                                            invalidate();
                                            break;
                                        }
                                    }
                                }
                            }

                            function showContextMenuForSelectedRect() {
                                shapeIndex = mySel.index;
                                var height = mySel.h;
                                var width = mySel.w;
                                var $canvas = $('.sn-docviewer-page[data-page="' + currentpreview + '"] canvas');
                                var contextMenuX = mySel.x + ($canvas.offset().left - $canvas.parent().offset().left) / scale;
                                var contextMenuY = mySel.y;

                                if (canvasType === "redaction" || canvasType === "highlight") {
                                    contextMenuX += width;
                                    buildContextMenu(canvasType, contextMenuX, contextMenuY, shapeIndex);
                                } else if (canvasType === "annotation") {
                                    contextMenuX -= 130;
                                    contextMenuY -= 10;
                                    buildContextMenu(canvasType, contextMenuX, contextMenuY, shapeIndex, height, width + 20);
                                }
                            }

                            function invalidate() {
                                canvasValid = false;
                                if (saveableshapes.annotation.length > 0 || saveableshapes.redaction.length > 0 || saveableshapes.highlight.length > 0) {
                                    unsaved = true;
                                    callbacks.documentChanged && callbacks.documentChanged();
                                }
                            }

                            function calculateMousePos(e, $this, d) {

                                var x = e.pageX,
                                    y = e.pageY;

                                return {
                                    x: (x - $this.offset().left + $this.scrollLeft()) / scale,
                                    y: (y - $this.offset().top + $this.scrollTop()) / scale
                                };
                            }

                            function calculateRectDimensions(x, y, x0, y0) {
                                return {
                                    x: Math.min(x, x0),
                                    y: Math.min(y, y0),
                                    w: Math.abs(x - x0),
                                    h: Math.abs(y - y0)
                                };
                            }

                            function drawRectangle(e) {
                                started = true;
                                var d = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') d = parseInt($currentPage.attr('data-degree'));

                                var p = calculateMousePos(e, $(this), d);
                                x0 = p.x;
                                y0 = p.y;
                            }

                            function drawRectangleMove(e) {
                                if (!started) return;

                                var $technicalcanvas = $(this);

                                var $currentPage = $('.sn-docviewer-page[data-page="' + currentpreview + '"]');

                                var technicalctx = $currentPage.find('.technical-canvas')[0].getContext('2d');

                                var d = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') d = parseInt($currentPage.attr('data-degree'));

                                var p = calculateMousePos(e, $technicalcanvas, d);
                                var r = calculateRectDimensions(p.x, p.y, x0, y0);

                                if (p.x > x0 && p.y > y0) {
                                    $technicalcanvas.css({ 'cursor': 'nw-resize' });
                                } else if (p.x > x0 && p.y < y0) {
                                    $technicalcanvas.css({ 'cursor': 'ne-resize' });
                                } else if (p.x < x0 && p.y > y0) {
                                    $technicalcanvas.css({ 'cursor': 'sw-resize' });
                                } else if (p.x < x0 && p.y < y0) {
                                    $technicalcanvas.css({ 'cursor': 'se-resize' });
                                }

                                clear(technicalctx);
                                technicalctx.fillStyle = '#76C9F5';
                                technicalctx.strokeStyle = '#007dc6';
                                technicalctx.globalAlpha = 0.5;
                                technicalctx.fillRect(r.x, r.y, r.w, r.h);
                                technicalctx.strokeRect(r.x, r.y, r.w, r.h);
                            }

                            function drawRectangleUp(x0, y0, rmx, rmy) {
                                var $technicalcanvas = $(this);
                                var $canvas = $('.sn-docviewer-page[data-page="' + currentpreview + '"] .' + canvasType + '-canvas');
                                var technicalctx = $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas')[0].getContext('2d');

                                var ctype = getCanvasTypeByToolbar();
                                if (ctype !== undefined) {
                                    var r = calculateRectDimensions(rmx, rmy, x0, y0);

                                    if (r.w >= 10 || r.h >= 10) {
                                        var diff = ($canvas.offset().left - $technicalcanvas.offset().left) / scale;
                                        r.x -= diff;

                                        r.w = canvasType === "annotation" ? Math.max(r.w, 200) : r.w;
                                        r.h = canvasType === "annotation" ? Math.max(r.h, 250) : r.h;

                                        if (canvasType === "annotation") addRect(r.x, r.y, r.w, r.h, currentpreview, canvasType, '14pt', 'Arial', '#333', 'Normal', 'Normal', annotationDefaultText, 20);else addRect(r.x, r.y, r.w, r.h, currentpreview, canvasType);
                                    }
                                }

                                started = false;
                                clear(technicalctx);
                                $technicalcanvas.css({ 'cursor': 'default' });
                            }

                            function getCanvasTypeByToolbar() {
                                return $('.sn-additional-tools').find('span.active').attr('data-canvastype');
                            }

                            function rubberBandZoom(e) {
                                if (!started) return;

                                var $technicalcanvas = $(this);
                                var $currentPage = $('.sn-docviewer-page[data-page="' + currentpreview + '"]');

                                var technicalctx = $currentPage.find('.technical-canvas')[0].getContext('2d');

                                var d = 0;
                                if (typeof $currentPage.attr('data-degree') !== 'undefined') d = parseInt($currentPage.attr('data-degree'));

                                var p = calculateMousePos(e, $technicalcanvas, d);
                                var r = calculateRectDimensions(p.x, p.y, x0, y0);
                                setZoomLevel(Math.min(maxZoomLevel, containerWidth / r.w), r.x, r.y, $technicalcanvas, true);

                                clear(technicalctx);
                                $('.sn-icon-rubberband', $toolbarContainer).removeClass('active');
                                started = false;
                            }

                            function buildContextMenu(type, xScreen, yScreen, shapeIndex, height, width) {

                                var $technicalcanvas = $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas');

                                if (parseInt(height) < 250) height = 250 * scale;
                                if (parseInt(width) < 300) width = 220 * scale;

                                var $contextMenu = $('<div class="sn-contextmenu"></div>').css({
                                    'position': 'absolute',
                                    'top': yScreen,
                                    'left': xScreen,
                                    'z-index': 110,
                                    'height': height || 'auto',
                                    'width': width || 'auto'
                                }).on('click.snDocViewer', '.sn-annotation-delete,.sn-icon-delete', function () {
                                    removeRect(shapeIndex);
                                }).on('click.snDocViewer', '.sn-annotation-save', function () {
                                    saveText(shapeIndex);
                                }).on('click.snDocViewer', '.sn-annotation-cancel,.sn-icon-delete', removeAllContextMenu);

                                if (type === 'redaction' || type === 'highlight') {
                                    $contextMenu.html('<span title="' + SR.deleteText + '" class="sn-icon sn-icon-delete">' + SR.deleteText + '</span>').on('click.snDocViewer', '.sn-icon-delete', removeAllContextMenu);
                                } else {
                                    $contextMenu.addClass('sn-annotation-contextmenu');

                                    var currentText = allshapes.annotation[shapeIndex].text;
                                    var fontFamily = allshapes.annotation[shapeIndex].fontFamily;
                                    var fontSize = allshapes.annotation[shapeIndex].fontSize;
                                    var fontColor = allshapes.annotation[shapeIndex].fontColor;
                                    var fontBold = allshapes.annotation[shapeIndex].fontBold;
                                    var fontItalic = allshapes.annotation[shapeIndex].fontItalic;
                                    var lineHeight = allshapes.annotation[shapeIndex].lineHeight;

                                    $contextMenu.append('\
                                        <div class="sn-edit-annotation-txtcolorcontainer">\
                                            <div data-color="#007dc6" class="sn-edit-annotation-txtcolor sn-edit-annotation-txtcolorblue"></div>\
                                            <div data-color="#ed1c24" class="sn-edit-annotation-txtcolor sn-edit-annotation-txtcolorred"></div>\
                                            <div data-color="#39b54a" class="sn-edit-annotation-txtcolor sn-edit-annotation-txtcolorgreen"></div>\
                                            <div data-color="#f15a24" class="sn-edit-annotation-txtcolor sn-edit-annotation-txtcolororange"></div>\
                                            <div data-color="#333333" class="sn-edit-annotation-txtcolor sn-edit-annotation-txtcolorblack"></div>\
                                        </div>\
                                        <div class="machinator"><select class="sn-edit-annotation-txtfont-select">\
                                            <option value="Arial">Arial</option>\
                                            <option value="Calibri">Calibri</option>\
                                            <option value="Tahoma">Tahoma</option>\
                                        </select></div>\
                                        <div class="machinator"><select class="sn-edit-annotation-txtfontsize-select">\
                                            <option value="8pt">8pt</option>\
                                            <option value="9pt">9pt</option>\
                                            <option value="10pt">10pt</option>\
                                            <option value="12pt">12pt</option>\
                                            <option value="14pt">14pt</option>\
                                            <option value="18pt">18pt</option>\
                                            <option value="24pt">24pt</option>\
                                            <option value="36pt">36pt</option>\
                                        </select></div>\
                                        <div class="sn-edit-annotation-txtfontstylerow">\
                                            <div class="machinator"><input type="checkbox" id="annotation-italic" class="sn-edit-annotation-italic" />\
                                            <label for="annotation-italic"><i>italic</i></label></div>\
                                            <div class="machinator"><input type="checkbox" class="sn-edit-annotation-bold" id="annotation-bold" />\
                                            <label for="annotation-bold"><b>bold</b></label></div>\
                                        </div>');

                                    $('select.sn-edit-annotation-txtfont-select option[value="' + fontFamily + '"]', $contextMenu).attr('selected', 'selected');
                                    $('select.sn-edit-annotation-txtfontsize-select option[value="' + fontSize + '"]', $contextMenu).attr('selected', 'selected');
                                    $('.sn-edit-annotation-txtcolorcontainer div[data-color="' + colorToHex(fontColor) + '"]', $contextMenu).addClass('selected');
                                    $('.sn-edit-annotation-bold', $contextMenu).prop('checked', fontBold > 400 || fontBold == 'bold');
                                    $('.sn-edit-annotation-italic', $contextMenu).prop('checked', fontItalic === 'italic');

                                    var $buttonContainer = $("<div class='buttonContainer'></div>");
                                    var $editTextarea = $('<textarea>' + currentText + '</textarea>').appendTo($buttonContainer).attr('class', 'sn-edit-annotation-txtarea border-box').css({ 'font-family': fontFamily, 'font-size': fontSize, 'color': fontColor, 'font-weight': fontBold, 'font-style': fontItalic, 'line-heigt': lineHeight, 'height': height - 140, 'width': '100%' });
                                    var $deleteButton = $('<span>' + SR.deleteText + '</span>').appendTo($buttonContainer).attr('class', 'okButton sn-annotation-delete');
                                    var $saveButton = $('<span>' + SR.saveText + '</span>').appendTo($buttonContainer).attr('class', 'okButton sn-annotation-save');
                                    var $cancelButton = $('<span>' + SR.cancelText + '</span>').appendTo($buttonContainer).attr('class', 'okButton sn-annotation-cancel');
                                    $buttonContainer.appendTo($contextMenu);

                                    $contextMenu.on('click.snDocViewer', '.sn-edit-annotation-txtcolor', function () {
                                        $('.sn-edit-annotation-txtcolor', $contextMenu).removeClass('selected');
                                        $editTextarea.css('color', $(this).addClass('selected').attr('data-color'));
                                    }).on('change.snDocViewer', 'select.sn-edit-annotation-txtfont-select', function () {
                                        $editTextarea.css('font-family', $(this).val());
                                    }).on('change.snDocViewer', 'select.sn-edit-annotation-txtfontsize-select', function () {
                                        $editTextarea.css('font-size', $(this).val());
                                    }).on('change.snDocViewer', 'input.sn-edit-annotation-italic', function () {
                                        $editTextarea.css('font-style', $(this).prop('checked') ? 'italic' : 'normal');
                                    }).on('change.snDocViewer', 'input.sn-edit-annotation-bold', function () {
                                        $editTextarea.css('font-weight', $(this).prop('checked') ? 'bold' : 'normal');
                                    });
                                }

                                $container.find("li.sn-docviewer-page").css("z-index", 0);
                                $technicalcanvas.parent().css("z-index", 1);
                                $contextMenu.appendTo($technicalcanvas.parent());
                                callbacks.contextMenuShown && callbacks.contextMenuShown($contextMenu);
                                $contextMenu.find("textarea").focus();
                            }

                            function colorToHex(color) {
                                if (color.substr(0, 1) === '#') {
                                    return color;
                                }
                                var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

                                var red = parseInt(digits[2]);
                                var green = parseInt(digits[3]);
                                var blue = parseInt(digits[4]);

                                var rgb = blue || green << 8 || red << 16;
                                return digits[1] + '#' + rgb.toString(16);
                            }

                            function showShapesOnPages() {
                                var savedType = canvasType;
                                $.each(allshapes, function (t) {
                                    canvasType = t;
                                    mainDraw(true);
                                });
                                canvasType = savedType;


                                clearInterval(mainDraw);
                                setInterval(mainDraw, redrawInterval);
                            }

                            function saveText(shapeIndex) {
                                var _fontSizeSelect = $('select.sn-edit-annotation-txtfontsize-select');
                                var _fontSizeSelectVal = _fontSizeSelect.data("kendoDropDownList") && _fontSizeSelect.data("kendoDropDownList").value();

                                var fontSize = _fontSizeSelectVal || '14pt';
                                var fontFamily = $('.sn-edit-annotation-txtarea').css('font-family');
                                var fontColor = $('.sn-edit-annotation-txtarea').css('color');
                                var fontItalic = $('.sn-edit-annotation-txtarea').css('font-style');
                                var fontBold = $('.sn-edit-annotation-txtarea').css('font-weight');
                                var text = $('.sn-edit-annotation-txtarea').val();
                                var lineHeight = parseInt(fontSize);
                                allshapes.annotation[shapeIndex].fontColor = fontColor;
                                allshapes.annotation[shapeIndex].fontSize = fontSize;
                                allshapes.annotation[shapeIndex].fontFamily = fontFamily;
                                allshapes.annotation[shapeIndex].fontItalic = fontItalic;

                                allshapes.annotation[shapeIndex].fontBold = fontBold;
                                allshapes.annotation[shapeIndex].text = text;
                                allshapes.annotation[shapeIndex].lineHeight = lineHeight;

                                removeAllContextMenu();
                                invalidate();
                            }

                            function removeAllContextMenu() {
                                $('.sn-contextmenu', $container).remove();
                            }

                            function clearShapeSelections() {
                                mySel = null;
                                removeAllContextMenu();
                                if (typeof $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas')[0] !== 'undefined') {
                                    var technicalctx = $('.sn-docviewer-page[data-page="' + currentpreview + '"] .technical-canvas')[0].getContext('2d');
                                    clear(technicalctx);
                                    mainDraw(true);
                                }
                            }

                            function clearMenuSelection($setActive) {
                                removeAllContextMenu();
                                $('.sn-docviewer-tools .sn-icon', $container).removeClass('active');
                                if ($setActive) {
                                    $setActive.addClass('active');
                                }
                            }

                            function saveShapes() {
                                var savable = {
                                    "Shapes": [{ 'redactions': saveableshapes.redaction }, { 'highlights': saveableshapes.highlight }, { 'annotations': saveableshapes.annotation }],
                                    "PageAttributes": pageAttributesObj
                                };
                                return savable;
                            }

                            function isLoaded(i) {
                                var that = $('.sn-docviewer-page[data-page="' + i + '"] img');
                                that = $('.sn-thumbnail-page[data-page="' + i + '"] img');
                                return that.attr('data-loaded');
                            }

                            function isCanvasesLoaded(i) {
                                var that = $('.sn-docviewer-page[data-page="' + i + '"]');
                                return that.children('canvas').length > 0;
                            }

                            function checkContainerHeight(w, h) {
                                $('.docpreview ul li').each(function () {
                                    $(this).css({ 'width': w, 'height': h });
                                });
                                $('.docpreview ul,.docpreview .zoomer').height(maxpreview * (h + 50));
                            }

                            function destroyPlugin() {
                                callbacks.documentClosed && callbacks.documentClosed();
                                $docpreview.children().remove();

                                if (dataObj.isFullscreen()) {
                                    $(window).off('resize.snDocViewerFullscreen');

                                    $(".sn-docpreview-fullscreen-wrapper").remove();
                                }
                                $("#sn-docpreview-print-iframe").remove();
                                $pluginSubject.empty();
                                $(window).off(".snDocViewer_" + docViewerId);

                                clearInterval(mainDraw);

                                for (var prop in dataObj) {
                                    delete dataObj[prop];
                                }

                                $pluginSubject.removeData('snDocViewer');
                                $pluginSubject = null;
                            }

                            function refreshViewer(pager, previews, thumbnails) {
                                refreshPageCount(pager, previews, thumbnails);
                            }

                            function refreshPageCount(pager, previews, thumbnails) {
                                var previewCount = 0;
                                if (typeof options.getPC === "function") {
                                    options.getPC(filePath).done(function (data) {
                                        var pc = data.d.PageCount;
                                        if (pc !== maxpreview) maxpreview = pc;
                                        if (pager) refreshPager();
                                        if (previews) refreshPreviews();
                                        if (thumbnails) refreshThumbnails();
                                    });
                                }
                            }

                            function refreshPager() {
                                $('#docpreviewpage').text(' / ' + maxpreview);
                                if (maxpreview < parseInt($('.sn-input-jumptopage').val())) {
                                    removeAllContextMenu();
                                    jumpDistance = Math.abs(maxpreview);
                                    getDeletableAndLoadableCanvases(maxpreview);
                                    SetPreviewControls(maxpreview);
                                }
                            }

                            function refreshPreviews() {

                                var $imageList = $('ul', $docpreview);
                                $imageList.html('');

                                if (typeof options.getExistingPreviewImages === "function") {
                                    options.getExistingPreviewImages().done(function (data) {
                                        thumbnailUrls = data.map(function (m) {
                                            return m.ThumbnailAvailable;
                                        });
                                        existingPages = data;
                                        if (showthumbnails) {
                                            $thumbnailList.html('');
                                            createThumbnailContainersOnInterval(data, $thumbnailList);
                                        }

                                        createImageContainersOnInterval(data, $imageList);
                                        getDeletableAndLoadableCanvases(1, data);
                                        fitToWidth(data[0].Width);
                                        firstLoad = 0;

                                        $(window).on("unload.snDocViewer_" + docViewerId, function () {
                                            callbacks.documentClosed && callbacks.documentClosed();
                                        });

                                        $docpreview.on('touchstart', function () {
                                            touched = true;
                                        });

                                        if (reactToResize) {
                                            var onResized = function onResized() {
                                                var isFullscreen = dataObj.isFullscreen();

                                                setTimeout(function () {
                                                    if (isFullscreen) {
                                                        containerHeight = $(window).height() - $docpreview.offset().top;
                                                        containerWidth = $(window).width();
                                                    } else {
                                                        containerHeight = (typeof options.containerHeight === "function" ? options.containerHeight() : options.containerHeight) || $pluginSubject.height();
                                                        containerWidth = (typeof options.containerWidth === "function" ? options.containerWidth() : options.containerWidth) || $pluginSubject.width();
                                                    }
                                                    $docpreview.width(containerWidth).height(containerHeight);
                                                }, 300);
                                            };
                                            $(window).on("resize.snDocViewer_" + docViewerId, onResized);

                                            $(window).on("orientationchange.snDocViewer_" + docViewerId, onResized);
                                        }

                                        callbacks.documentOpened && callbacks.documentOpened();

                                        if (scale !== 1 && scale <= maxZoomLevel && scale >= minZoomLevel && !touch) {
                                            setZoomLevel(scale);
                                        }

                                        if (touch) {

                                            var rate = containerWidth / imgWidth;
                                            if (!fitContainer) rate = scale;

                                            scale = rate;

                                            $('.docpreview').ready(function () {

                                                var rate = $('body').width() / imgWidth;

                                                var myScroll = new IScroll('#docpreview', {
                                                    zoom: true,
                                                    scrollX: true,
                                                    scrollY: true,
                                                    mouseWheel: true,
                                                    zoomMin: minZoomLevel,
                                                    zoomMax: maxZoomLevel,
                                                    startZoom: rate
                                                });

                                                enterFullscreenMode();

                                                myScroll.on('scrollEnd', updatePosition);

                                                $('.sn-icon-originalsize').on('click', function () {
                                                    myScroll.zoom(1);
                                                });

                                                $('.sn-icon-fittowindow').on('click', function () {
                                                    var containerWidth, fitToWidthScale;
                                                    containerWidth = myScroll.wrapperWidth;
                                                    fitToWidthScale = (containerWidth / imgWidth).toFixed(2);
                                                    myScroll.zoom(fitToWidthScale);
                                                });
                                            });
                                        }

                                        $docpreview.scrollTop(0);

                                        unsaved = false;

                                        $docpreview.scroll($.debounce(500, function () {
                                            if ($('.sn-docpreview-desktop:hover').length !== 0) {
                                                setPageAccordingToScroll(true);
                                            }
                                        }));

                                        $('.sn-doc-thumbnails').scroll($.debounce(250, function () {
                                            scrollThumbnails();
                                        }));

                                        $thumbnailList.on('click.snDocViewer', '.sn-thumbnail-page', function () {
                                            if ($(this).children('img').attr('data-loaded') === "true") {
                                                var thumbnailNum = parseInt($(this).attr('data-page'));
                                                removeAllContextMenu();

                                                if (newPage(pageNum)) {
                                                    demandNewPage(pageNum);
                                                    setDataTops(pageNum);
                                                }

                                                getDeletableAndLoadableCanvases(thumbnailNum);
                                                SetPreviewControls(thumbnailNum);
                                            }
                                        });
                                    });
                                }
                            }

                            function refreshThumbnails() {
                                if (showthumbnails) {
                                    $('.sn-doc-thumbnails').html('');
                                    $('.sn-doc-thumbnails').append('<ul></ul>');
                                    $thumbnailList = $('ul', $('.sn-doc-thumbnails'));
                                    for (var i = 0; i < parseInt(maxpreview); i++) {
                                        $thumbnailList.append('<li class="sn-thumbnail-page" data-page="' + (i + 1) + '" style="max-width: 95px;max-height: 150px;margin-right: 20px;"><img src="' + placeholderImgPath + '" width="32" data-loaded="false" /><span>Page ' + (i + 1) + '</span></li>');
                                    }
                                    deleteUnnecessaryThumbnails(showable);
                                    if (typeof options.getThumbnail === "function") {
                                        $.each(showable, function (i, item) {
                                            options.getThumbnail(item).done(function (data) {
                                                displayThumbnail(item, data.PreviewAvailable);
                                            });
                                        });
                                    }

                                    hthumbnails = thumbnails;
                                }

                                $docpreview.on('click.snDocViewer', '.sn-docviewer-page', function () {
                                    if ($(this).children('img').attr('data-loaded') === 'true') {
                                        var pNum = parseInt($(this).attr('data-page'));
                                        removeAllContextMenu();

                                        getDeletableAndLoadableCanvases(pNum);
                                        SetPreviewControls(pNum);
                                    }
                                });

                                $thumbnailList.on('click.snDocViewer', '.sn-thumbnail-page', function () {
                                    if ($(this).children('img').attr('data-loaded') === "true") {
                                        var thumbnailNum = parseInt($(this).attr('data-page'));
                                        removeAllContextMenu();

                                        if (newPage(pageNum)) {
                                            demandNewPage(pageNum);
                                            setDataTops(pageNum);
                                        }

                                        getDeletableAndLoadableCanvases(thumbnailNum);
                                        SetPreviewControls(thumbnailNum);
                                    }
                                });
                            }

                            function refreshEditorButtons(buttonArray) {
                                var $editortools = $('.sn-additional-tools');
                                $.each(buttonArray, function (i, item) {
                                    $('.sn-additional-tools').find('span.sn-icon').each(function () {
                                        var that = $(this);
                                        if (that.attr('data-canvastype') === item.name) {
                                            $.each(item.additionalProps, function (pi, pitem) {
                                                that.attr(pi, pitem);
                                            });

                                            destroyCanvasFeature();
                                        }
                                    });
                                });
                            }

                            function adminbutton(name, buttonAdditonalProperties) {
                                this.name = name;
                                this.additionalProps = buttonAdditonalProperties;
                            }

                            function disableEditorButtons() {
                                var buttonArray = [];
                                buttonArray[0] = new adminbutton('annotation', { disabled: true });
                                buttonArray[1] = new adminbutton('highlight', { disabled: true });
                                buttonArray[2] = new adminbutton('redaction', { disabled: true });
                                refreshEditorButtons(buttonArray);
                            }

                            function enableEditorButtons() {
                                var buttonArray = [];
                                buttonArray[0] = new adminbutton('annotation', { disabled: false });
                                buttonArray[1] = new adminbutton('highlight', { disabled: false });
                                buttonArray[2] = new adminbutton('redaction', { disabled: false });
                                refreshEditorButtons(buttonArray);
                            }

                            function saveablePage(pageNum, options) {
                                this.pageNum = pageNum;
                                this.options = options;
                            }

                            function rotate(degree, pageNumber, isMultiple, notClicked) {
                                var $currentPage = $('.sn-docviewer-page[data-page=' + pageNumber + ']');
                                var currentDegree = parseInt($currentPage.attr('data-degree'));
                                if (currentDegree === null || typeof $currentPage.attr('data-degree') === 'undefined') currentDegree = 0;

                                if ($currentPage.hasClass('rotated') && pageNumber === currentpreview) {
                                    if (degree !== 0) {
                                        $currentPage.attr('data-degree', degree);
                                        disableEditorButtons();
                                    } else {
                                        $currentPage.removeClass('rotated');
                                        $currentPage.removeAttr('data-degree');
                                        enableEditorButtons();
                                    }
                                } else {
                                    $currentPage.addClass('rotated');
                                    $currentPage.attr('data-degree', degree);
                                    newDegree = degree;
                                    if (degree !== 0 && pageNumber === currentpreview) disableEditorButtons();
                                }
                                rotateImage($currentPage, isMultiple);
                                if (!notClicked) rotateCanvases($currentPage);

                                recalculatePageTops(pageNumber);
                            }

                            function computeDegree(currentDegree, degree) {
                                var rotationDegree = currentDegree + degree;
                                if (rotationDegree > 180) {
                                    rotationDegree -= 360;
                                } else if (rotationDegree < -91) {
                                    rotationDegree += 360;
                                }
                                return rotationDegree;
                            }

                            function rotateImage(p, isMultiple, lastPageNumber) {
                                if (isMultiple || parseInt(p.attr('data-page')) === currentpreview) {
                                    callbacks.loadingStarted && callbacks.loadingStarted();
                                }
                                var d = p.attr('data-degree');
                                if (typeof d === 'undefined' || d === null) d = 0;else d = parseInt(d);

                                var $img = p.find('img');
                                $img.attr('src', modifyPageImgHref($img.attr('src'), d));

                                $img.imageLoad(function () {
                                    if (d === 90 || d === -90 || d === 270) {
                                        $img.css({ 'margin': '120px 0' });
                                    } else {
                                        $img.css({ 'margin': '0 120px' });
                                    }

                                    resizeContainer(p);
                                    if (!isMultiple || isMultiple && numberOfPagesForRotation === 1) callbacks.loadingEnded && callbacks.loadingEnded();else if (numberOfPagesForRotation !== 0) numberOfPagesForRotation -= 1;
                                });
                            }

                            function resizeContainer(p) {
                                var d = p.attr('data-degree');
                                if (typeof d === 'undefined' || d === null) d = 0;else d = parseInt(d);
                                var $img = p.find('img');
                                var width = $img.width();
                                var height = $img.height();
                                var leftMargin;

                                if (d === 90 || d === -90 || d === 270) {
                                    leftMargin = Math.abs(p.closest('ul').width() - height) / 2;
                                    if (height > width) leftMargin = Math.abs(p.closest('ul').width() - width) / 2;
                                    p.removeAttr('style');
                                    p.css({
                                        'margin': '0px auto 50px',
                                        'width': parseInt(p.attr('data-height')),
                                        'height': parseInt(p.attr('data-width')) + 240
                                    });
                                    if (width < height) p.closest('ul').width(height);else p.closest('ul').width(parseInt(p.attr('data-height')) + 240);
                                } else {
                                    leftMargin = (p.closest('ul').width() - p.width()) / 2;
                                    if (height > width) leftMargin = Math.abs(p.closest('ul').width() - height) / 2;
                                    p.removeAttr('style');
                                    if (height < width) {
                                        p.css({
                                            'margin': '0px auto 50px',
                                            'width': height + 240,
                                            'height': width
                                        });
                                    } else {
                                        p.css({
                                            'margin': '0px auto 50px',
                                            'width': width + 240,
                                            'height': height
                                        });
                                    }

                                    if (width < height) p.closest('ul').width(height);else p.closest('ul').width(width + 240);
                                }
                            }

                            function rotateCanvases(p) {
                                var d = p.attr('data-degree');
                                if (typeof d === 'undefined' || d === null) d = 0;else d = parseInt(d);

                                var translation = 'rotate(' + d + 'deg)';

                                var $img = p.find('img');
                                var imgWidth = parseInt(p.attr('data-width'));
                                var imgHeight = parseInt(p.attr('data-height'));
                                var top, left;

                                switch (d) {
                                    case 0:
                                        if (imgHeight < imgWidth) {} else {}
                                        break;
                                    case -90:
                                        if (imgHeight < imgWidth) {
                                            left = -Math.abs(imgHeight - imgWidth) / 2;
                                            top = -Math.abs(imgHeight - imgWidth) / 2;
                                            translation = 'rotate(' + d + 'deg) translate(' + (top - 120) + 'px, ' + (left - 120) + 'px)';
                                        } else {
                                            top = Math.abs(imgHeight - imgWidth) / 2;
                                            left = Math.abs(imgWidth - imgHeight) / 2;
                                            translation = 'rotate(' + d + 'deg) translate(' + (top - 120) + 'px, ' + (left - 120) + 'px)';
                                        }
                                        break;
                                    case 180:
                                        if (imgHeight < imgWidth) {
                                            left = imgHeight - imgWidth / 2 - 35;
                                            translation = 'rotate(' + d + 'deg)';
                                        } else {
                                            left = -(imgHeight - (imgWidth + 200)) / 2 - 120;
                                            translation = 'rotate(' + d + 'deg)';
                                        }
                                        break;
                                    case 90:
                                        if (imgHeight < imgWidth) {
                                            left = Math.abs(imgHeight - imgWidth) / 2;
                                            top = Math.abs(imgHeight - imgWidth) / 2;
                                            translation = 'rotate(' + d + 'deg) translate(' + (top + 120) + 'px, ' + (left + 120) + 'px)';
                                        } else {

                                            top = -Math.abs(imgHeight - imgWidth) / 2;
                                            left = -Math.abs(imgWidth - imgHeight) / 2;
                                            translation = 'rotate(' + d + 'deg) translate(' + (top + 120) + 'px, ' + (left + 120) + 'px)';
                                        }
                                        break;
                                }

                                p.children('canvas:not(".technical-canvas")').css({
                                    '-ms-transform': translation,
                                    '-webkit-transform': translation,
                                    'transform': translation,
                                    '-moz-transform': translation,
                                    '-o-transform': translation
                                });
                                var twidth = p.children('canvas.technical-canvas').width(),
                                    theight = p.children('canvas.technical-canvas').height();
                                p.children('canvas.technical-canvas').css({
                                    width: theight,
                                    height: twidth
                                });
                            }

                            function modifyPageImgHref(href, degree) {
                                var newHref = href;
                                if (href.indexOf('?') > -1) {
                                    if (href.indexOf('rotation') > -1) {
                                        var rotationDegreeIndex = href.indexOf('rotation') + 9;
                                        newHref = newHref.substr(0, rotationDegreeIndex) + degree;
                                    } else {
                                        newHref += '&rotation=' + degree;
                                    }
                                } else {
                                    newHref += '?rotation=' + degree;
                                }

                                return newHref;
                            }

                            function rotateThumbnail(d, p) {
                                var that = $('.sn-thumbnail-page[data-page="' + p + '"]');
                                that.attr('data-degree', d);
                                var height;

                                var $img = that.children('img');

                                var w = $img.width();
                                var h = $img.height();

                                var thumbnailPath = $img.attr('src');

                                var a = w;
                                w = h;
                                h = a;

                                thumbnailPath = appendPreviewPostfix(thumbnailPath, !noWatermark, addNoChachePostfix);
                                thumbnailPath = modifyPageImgHref(thumbnailPath, d);
                                $img.attr('src', thumbnailPath);
                                $img.attr('data-loaded', true);

                                if (d === 90 || d === -90) {
                                    $img.width(parseInt(that.attr('data-height'))).height(parseInt(that.attr('data-width')));
                                    that.width(parseInt(that.attr('data-height')) + 2);
                                    that.height(parseInt(that.attr('data-width')) + 40);
                                } else {
                                    $img.width(parseInt(that.attr('data-width'))).height(parseInt(that.attr('data-height')));
                                    that.width(parseInt(that.attr('data-width')) + 2);
                                    that.height(parseInt(that.attr('data-height')) + 40);
                                }
                            }

                            function setRotation($img, d, l) {
                                $img.css({
                                    '-ms-transform': 'rotate(' + d + 'deg) translate(' + l + ')',
                                    '-webkit-transform': 'rotate(' + d + 'deg) translate(' + l + ')',
                                    'transform': 'rotate(' + d + 'deg) translate(' + l + ')',
                                    '-moz-transform': 'rotate(' + d + 'deg) translate(' + l + ')',
                                    '-o-transform': 'rotate(' + d + 'deg) translate(' + l + ')'
                                });
                            }

                            function saveRotation(p, d) {
                                var savedIndex = checkIfItsSavedAlreeady(p);
                                if (savedIndex > -1) {
                                    pageAttributesObj[savedIndex].options.degree = d;
                                } else {
                                    pageAttributesObj.push(new saveablePage(p, { 'degree': d }));
                                }
                            }

                            function checkIfItsSavedAlreeady(p) {
                                for (var i = 0; i < pageAttributesObj.length; i++) {
                                    if (parseInt(pageAttributesObj[i].pageNum) === parseInt(p)) {
                                        return i;
                                    } else if (parseInt(pageAttributesObj[i].pageNum) === parseInt(p) && i === pageAttributesObj.length - 1) {
                                        return -1;
                                    }
                                }
                            }

                            function recalculatePageTops(p) {
                                for (var i = p; i < $('.sn-docviewer-page').length + 1; i++) {
                                    var $li = $('.sn-docviewer-page').eq(i);
                                    $li.attr('data-top', getTopOfThePage(i + 1));
                                }
                                callbacks.rotationEnded && callbacks.rotationEnded($('.sn-viewer-rotate span.saveActive'));
                            }

                            Array.prototype.allValuesSame = function () {

                                for (var i = 1; i < this.length; i++) {
                                    if (this[i].options.degree !== this[0].options.degree) return false;
                                }

                                return true;
                            };

                            $.fn.imageLoad = function (fn) {
                                this.load(fn);
                                this.each(function () {
                                    if (this.complete && this.naturalWidth !== 0) {
                                        $(this).trigger('load');
                                    }
                                });
                            };

                            $.fn.canvasLoad = function (fn) {
                                this.load(fn);
                                this.each(function () {
                                    if (this.complete && this.width !== 0) {
                                        $(this).trigger('load');
                                    }
                                });
                            };

                            $.fn.insertIndex = function (i, $el) {
                                var $target = $el.children().eq(i);

                                if ($target.length === 0) $el.append(this);else if (this.index() > i) {
                                        $target.before(this);
                                    } else {
                                        $target.after(this);
                                    }

                                return this;
                            };

                            $.fn.aPosition = function () {
                                thisLeft = this.offset().left;
                                thisTop = this.offset().top;
                                thisParent = this.parent();

                                parentLeft = thisParent.offset().left;
                                parentTop = thisParent.offset().top;

                                return {
                                    left: thisLeft - parentLeft,
                                    top: thisTop - parentTop
                                };
                            };

                            var dataObj = {
                                setZoomLevel: setZoomLevel,

                                removeContextMenu: removeAllContextMenu,

                                enterFullscreenMode: enterFullscreenMode,

                                exitFullscreenMode: exitFullscreenMode,

                                destroy: destroyPlugin,

                                getAllShapes: function getAllShapes() {
                                    return allshapes;
                                },

                                scrollViewportLeft: function scrollViewportLeft(val) {
                                    $docpreview.scrollLeft(val);
                                },

                                scrollViewportTop: function scrollViewportTop(val) {
                                    $docpreview.scrollTop(val);
                                },

                                isUnsaved: function isUnsaved() {
                                    return unsaved;
                                },

                                setUnsaved: function setUnsaved(isUnsaved) {
                                    unsaved = isUnsaved;
                                },

                                isFullscreen: function isFullscreen() {
                                    return $container.parent().hasClass("sn-docpreview-fullscreen-wrapper");
                                },

                                isWatermarked: function isWatermarked() {
                                    return $('.sn-icon-nowatermark').length > 0;
                                },

                                zoomLevel: function zoomLevel() {
                                    return scale;
                                },

                                getContainer: function getContainer() {
                                    return $container;
                                },

                                getViewport: function getViewport() {
                                    return $docpreview;
                                },

                                getViewerId: function getViewerId() {
                                    return docViewerId;
                                },

                                scheduleRedraw: function scheduleRedraw() {
                                    invalidate();
                                },

                                changePage: SetPreviewControls,

                                currentPage: function currentPage() {
                                    return currentpreview;
                                },

                                calledPage: function calledPage() {
                                    return pageNum;
                                },

                                pageCount: function pageCount() {
                                    return maxpreview;
                                },

                                loadedImages: function loadedImages() {
                                    return hpages;
                                },

                                pageIsLoaded: isLoaded,

                                canvasesAreLoaded: isCanvasesLoaded,

                                saveShapes: saveShapes,

                                setPageAccordingToScroll: setPageAccordingToScroll,

                                appendPreviewPostfix: appendPreviewPostfix,

                                refreshViewer: refreshViewer,

                                refreshEditorButtons: refreshEditorButtons

                            };

                            $(initializeDocViewerPlugin);

                            $pluginSubject.data('snDocViewer', dataObj);

                            return $pluginSubject;
                        }
                    });
                })(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        69: function _(module, exports, __webpack_require__) {
            (function (jQuery, __webpack_provided_window_dot_jQuery) {

                (function (window, undefined, $) {
                    '$:nomunge';

                    var $ = $ || __webpack_provided_window_dot_jQuery || window.Cowboy || (window.Cowboy = {}),
                        jq_throttle;

                    $.throttle = jq_throttle = function jq_throttle(delay, no_trailing, callback, debounce_mode) {
                        var timeout_id,
                            last_exec = 0;

                        if (typeof no_trailing !== 'boolean') {
                            debounce_mode = callback;
                            callback = no_trailing;
                            no_trailing = undefined;
                        }

                        function wrapper() {
                            var that = this,
                                elapsed = +new Date() - last_exec,
                                args = arguments;

                            function exec() {
                                last_exec = +new Date();
                                callback.apply(that, args);
                            };

                            function clear() {
                                timeout_id = undefined;
                            };

                            if (debounce_mode && !timeout_id) {
                                exec();
                            }

                            timeout_id && clearTimeout(timeout_id);

                            if (debounce_mode === undefined && elapsed > delay) {
                                exec();
                            } else if (no_trailing !== true) {
                                timeout_id = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay);
                            }
                        };

                        if ($.guid) {
                            wrapper.guid = callback.guid = callback.guid || $.guid++;
                        }

                        return wrapper;
                    };

                    $.debounce = function (delay, at_begin, callback) {
                        return callback === undefined ? jq_throttle(delay, at_begin, false) : jq_throttle(delay, callback, at_begin !== false);
                    };
                })(window, undefined, jQuery);
            }).call(exports, __webpack_require__("jquery"), __webpack_require__("jquery"));
        },

        70: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DialogConfiguration = undefined;

            var _renderer = __webpack_require__(46);

            var _dialogRenderer = __webpack_require__(71);

            var _dialogOptions = __webpack_require__(44);

            var _aureliaPal = __webpack_require__(1);

            var defaultRenderer = _dialogRenderer.DialogRenderer;

            var resources = {
                'ai-dialog': './ai-dialog',
                'ai-dialog-header': './ai-dialog-header',
                'ai-dialog-body': './ai-dialog-body',
                'ai-dialog-footer': './ai-dialog-footer',
                'attach-focus': './attach-focus'
            };

            var defaultCSSText = 'ai-dialog-container,ai-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ai-dialog-overlay{opacity:0}ai-dialog-overlay.active{opacity:1}ai-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ai-dialog-container.active{opacity:1}ai-dialog-container>div{padding:30px}ai-dialog-container>div>div{display:block;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto}ai-dialog-container,ai-dialog-container>div,ai-dialog-container>div>div{outline:0}ai-dialog{display:table;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ai-dialog>ai-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ai-dialog>ai-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ai-dialog>ai-dialog-body{display:block;padding:16px}ai-dialog>ai-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ai-dialog>ai-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ai-dialog>ai-dialog-footer button:disabled{cursor:default;opacity:.45}ai-dialog>ai-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ai-dialog-open{overflow:hidden}';

            var DialogConfiguration = exports.DialogConfiguration = function () {
                function DialogConfiguration(aurelia) {

                    this.aurelia = aurelia;
                    this.settings = _dialogOptions.dialogOptions;
                    this.resources = [];
                    this.cssText = defaultCSSText;
                    this.renderer = defaultRenderer;
                }

                DialogConfiguration.prototype.useDefaults = function useDefaults() {
                    return this.useRenderer(defaultRenderer).useCSS(defaultCSSText).useStandardResources();
                };

                DialogConfiguration.prototype.useStandardResources = function useStandardResources() {
                    return this.useResource('ai-dialog').useResource('ai-dialog-header').useResource('ai-dialog-body').useResource('ai-dialog-footer').useResource('attach-focus');
                };

                DialogConfiguration.prototype.useResource = function useResource(resourceName) {
                    this.resources.push(resourceName);
                    return this;
                };

                DialogConfiguration.prototype.useRenderer = function useRenderer(renderer, settings) {
                    this.renderer = renderer;
                    this.settings = Object.assign(this.settings, settings || {});
                    return this;
                };

                DialogConfiguration.prototype.useCSS = function useCSS(cssText) {
                    this.cssText = cssText;
                    return this;
                };

                DialogConfiguration.prototype._apply = function _apply() {
                    var _this = this;

                    this.aurelia.transient(_renderer.Renderer, this.renderer);
                    this.resources.forEach(function (resourceName) {
                        return _this.aurelia.globalResources(resources[resourceName]);
                    });

                    if (this.cssText) {
                        _aureliaPal.DOM.injectStyles(this.cssText);
                    }
                };

                return DialogConfiguration;
            }();
        },

        71: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DialogRenderer = undefined;

            var _dec, _class;

            var _aureliaPal = __webpack_require__(1);

            var _aureliaDependencyInjection = __webpack_require__(2);

            var containerTagName = 'ai-dialog-container';
            var overlayTagName = 'ai-dialog-overlay';
            var transitionEvent = function () {
                var transition = null;

                return function () {
                    if (transition) return transition;

                    var t = void 0;
                    var el = _aureliaPal.DOM.createElement('fakeelement');
                    var transitions = {
                        'transition': 'transitionend',
                        'OTransition': 'oTransitionEnd',
                        'MozTransition': 'transitionend',
                        'WebkitTransition': 'webkitTransitionEnd'
                    };
                    for (t in transitions) {
                        if (el.style[t] !== undefined) {
                            transition = transitions[t];
                            return transition;
                        }
                    }
                };
            }();

            var DialogRenderer = exports.DialogRenderer = (_dec = (0, _aureliaDependencyInjection.transient)(), _dec(_class = function () {
                function DialogRenderer() {
                    var _this = this;

                    this._escapeKeyEventHandler = function (e) {
                        if (e.keyCode === 27) {
                            var top = _this._dialogControllers[_this._dialogControllers.length - 1];
                            if (top && top.settings.lock !== true) {
                                top.cancel();
                            }
                        }
                    };
                }

                DialogRenderer.prototype.getDialogContainer = function getDialogContainer() {
                    return _aureliaPal.DOM.createElement('div');
                };

                DialogRenderer.prototype.showDialog = function showDialog(dialogController) {
                    var _this2 = this;

                    var settings = dialogController.settings;
                    var body = _aureliaPal.DOM.querySelectorAll('body')[0];
                    var wrapper = document.createElement('div');

                    this.modalOverlay = _aureliaPal.DOM.createElement(overlayTagName);
                    this.modalContainer = _aureliaPal.DOM.createElement(containerTagName);
                    this.anchor = dialogController.slot.anchor;
                    wrapper.appendChild(this.anchor);
                    this.modalContainer.appendChild(wrapper);

                    this.stopPropagation = function (e) {
                        e._aureliaDialogHostClicked = true;
                    };
                    this.closeModalClick = function (e) {
                        if (!settings.lock && !e._aureliaDialogHostClicked) {
                            dialogController.cancel();
                        } else {
                            return false;
                        }
                    };

                    dialogController.centerDialog = function () {
                        if (settings.centerHorizontalOnly) return;
                        centerDialog(_this2.modalContainer);
                    };

                    this.modalOverlay.style.zIndex = settings.startingZIndex;
                    this.modalContainer.style.zIndex = settings.startingZIndex;

                    var lastContainer = Array.from(body.querySelectorAll(containerTagName)).pop();

                    if (lastContainer) {
                        lastContainer.parentNode.insertBefore(this.modalContainer, lastContainer.nextSibling);
                        lastContainer.parentNode.insertBefore(this.modalOverlay, lastContainer.nextSibling);
                    } else {
                        body.insertBefore(this.modalContainer, body.firstChild);
                        body.insertBefore(this.modalOverlay, body.firstChild);
                    }

                    if (!this._dialogControllers.length) {
                        _aureliaPal.DOM.addEventListener('keyup', this._escapeKeyEventHandler);
                    }

                    this._dialogControllers.push(dialogController);

                    dialogController.slot.attached();

                    if (typeof settings.position === 'function') {
                        settings.position(this.modalContainer, this.modalOverlay);
                    } else {
                        dialogController.centerDialog();
                    }

                    this.modalContainer.addEventListener('click', this.closeModalClick);
                    this.anchor.addEventListener('click', this.stopPropagation);

                    return new Promise(function (resolve) {
                        var renderer = _this2;
                        if (settings.ignoreTransitions) {
                            resolve();
                        } else {
                            _this2.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
                        }

                        _this2.modalOverlay.classList.add('active');
                        _this2.modalContainer.classList.add('active');
                        body.classList.add('ai-dialog-open');

                        function onTransitionEnd(e) {
                            if (e.target !== renderer.modalContainer) {
                                return;
                            }
                            renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
                            resolve();
                        }
                    });
                };

                DialogRenderer.prototype.hideDialog = function hideDialog(dialogController) {
                    var _this3 = this;

                    var settings = dialogController.settings;
                    var body = _aureliaPal.DOM.querySelectorAll('body')[0];

                    this.modalContainer.removeEventListener('click', this.closeModalClick);
                    this.anchor.removeEventListener('click', this.stopPropagation);

                    var i = this._dialogControllers.indexOf(dialogController);
                    if (i !== -1) {
                        this._dialogControllers.splice(i, 1);
                    }

                    if (!this._dialogControllers.length) {
                        _aureliaPal.DOM.removeEventListener('keyup', this._escapeKeyEventHandler);
                    }

                    return new Promise(function (resolve) {
                        var renderer = _this3;
                        if (settings.ignoreTransitions) {
                            resolve();
                        } else {
                            _this3.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
                        }

                        _this3.modalOverlay.classList.remove('active');
                        _this3.modalContainer.classList.remove('active');

                        function onTransitionEnd() {
                            renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
                            resolve();
                        }
                    }).then(function () {
                        body.removeChild(_this3.modalOverlay);
                        body.removeChild(_this3.modalContainer);
                        dialogController.slot.detached();

                        if (!_this3._dialogControllers.length) {
                            body.classList.remove('ai-dialog-open');
                        }

                        return Promise.resolve();
                    });
                };

                return DialogRenderer;
            }()) || _class);

            DialogRenderer.prototype._dialogControllers = [];

            function centerDialog(modalContainer) {
                var child = modalContainer.children[0];
                var vh = Math.max(_aureliaPal.DOM.querySelectorAll('html')[0].clientHeight, window.innerHeight || 0);

                child.style.marginTop = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
                child.style.marginBottom = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
            }
        },

        72: function _(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DialogService = undefined;

            var _class, _temp;

            var _aureliaMetadata = __webpack_require__(4);

            var _aureliaDependencyInjection = __webpack_require__(2);

            var _aureliaTemplating = __webpack_require__(0);

            var _dialogController = __webpack_require__(12);

            var _renderer = __webpack_require__(46);

            var _lifecycle = __webpack_require__(45);

            var _dialogResult = __webpack_require__(23);

            var _dialogOptions = __webpack_require__(44);

            var DialogService = exports.DialogService = (_temp = _class = function () {
                function DialogService(container, compositionEngine) {

                    this.container = container;
                    this.compositionEngine = compositionEngine;
                    this.controllers = [];
                    this.hasActiveDialog = false;
                }

                DialogService.prototype.open = function open(settings) {
                    return this.openAndYieldController(settings).then(function (controller) {
                        return controller.result;
                    });
                };

                DialogService.prototype.openAndYieldController = function openAndYieldController(settings) {
                    var _this = this;

                    var childContainer = this.container.createChild();
                    var dialogController = void 0;
                    var promise = new Promise(function (resolve, reject) {
                        dialogController = new _dialogController.DialogController(childContainer.get(_renderer.Renderer), _createSettings(settings), resolve, reject);
                    });
                    childContainer.registerInstance(_dialogController.DialogController, dialogController);
                    dialogController.result = promise;
                    dialogController.result.then(function () {
                        _removeController(_this, dialogController);
                    }, function () {
                        _removeController(_this, dialogController);
                    });
                    return _openDialog(this, childContainer, dialogController).then(function () {
                        return dialogController;
                    });
                };

                return DialogService;
            }(), _class.inject = [_aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine], _temp);

            function _createSettings(settings) {
                settings = Object.assign({}, _dialogOptions.dialogOptions, settings);
                settings.startingZIndex = _dialogOptions.dialogOptions.startingZIndex;
                return settings;
            }

            function _openDialog(service, childContainer, dialogController) {
                var host = dialogController.renderer.getDialogContainer();
                var instruction = {
                    container: service.container,
                    childContainer: childContainer,
                    model: dialogController.settings.model,
                    view: dialogController.settings.view,
                    viewModel: dialogController.settings.viewModel,
                    viewSlot: new _aureliaTemplating.ViewSlot(host, true),
                    host: host
                };

                return _getViewModel(instruction, service.compositionEngine).then(function (returnedInstruction) {
                    dialogController.viewModel = returnedInstruction.viewModel;
                    dialogController.slot = returnedInstruction.viewSlot;

                    return (0, _lifecycle.invokeLifecycle)(dialogController.viewModel, 'canActivate', dialogController.settings.model).then(function (canActivate) {
                        if (canActivate) {
                            return service.compositionEngine.compose(returnedInstruction).then(function (controller) {
                                service.controllers.push(dialogController);
                                service.hasActiveDialog = !!service.controllers.length;
                                dialogController.controller = controller;
                                dialogController.view = controller.view;

                                return dialogController.renderer.showDialog(dialogController);
                            });
                        }
                    });
                });
            }

            function _getViewModel(instruction, compositionEngine) {
                if (typeof instruction.viewModel === 'function') {
                    instruction.viewModel = _aureliaMetadata.Origin.get(instruction.viewModel).moduleId;
                }

                if (typeof instruction.viewModel === 'string') {
                    return compositionEngine.ensureViewModel(instruction);
                }

                return Promise.resolve(instruction);
            }

            function _removeController(service, controller) {
                var i = service.controllers.indexOf(controller);
                if (i !== -1) {
                    service.controllers.splice(i, 1);
                    service.hasActiveDialog = !!service.controllers.length;
                }
            }
        },

        77: function _(module, exports, __webpack_require__) {

            "use strict";

            (function (regeneratorRuntime) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.App = undefined;

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
                };

                var _transcendViewer = __webpack_require__(61);

                var _aureliaDialog = __webpack_require__("aurelia-dialog");

                var _aureliaFramework = __webpack_require__("aurelia-framework");

                var _Authorization = __webpack_require__(57);

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                    var c = arguments.length,
                        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                        d;
                    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    }return c > 3 && r && Object.defineProperty(target, key, r), r;
                };
                var __metadata = undefined && undefined.__metadata || function (k, v) {
                    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
                };
                var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            result.done ? resolve(result.value) : new P(function (resolve) {
                                resolve(result.value);
                            }).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments)).next());
                    });
                };
                __webpack_require__(69);
                __webpack_require__(68);
                var $ = __webpack_require__("jquery");
                var App = exports.App = function () {
                    function App(DialogService, authorization) {
                        var _this = this;

                        _classCallCheck(this, App);

                        this.DialogService = DialogService;
                        this.authorization = authorization;
                        this.selectedDocumentId = 1;
                        this.selectedPermissions = [];
                        this.authLevels = ['Read', 'Write'];
                        this.isEditFormOpened = false;
                        this.fontTypes = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Tahoma'];
                        this.fontSizes = [8, 10, 12, 14, 16, 18, 20, 30, 40, 50, 60];
                        this.fontColors = [{ name: 'Red', value: '255,0,0' }, { name: 'Green', value: '0,255,0' }, { name: 'Blue', value: '0,0,255' }];
                        this.fileUploadCallback = function () {
                            _this.getDocuments().then(function (documents) {
                                _this.documents = documents;
                            });
                        };
                        this.authChange = function () {
                            _this.authorization.set(_this.selectedAuthLevel);
                            _this.init();
                        };
                        this.fileChange = function () {
                            return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                                var promises, uploadUrl, i, file, promise;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                promises = [];
                                                uploadUrl = this.config.apiBaseUrl + "/document/upload";

                                                for (i = 0; i < this.selectedFiles.length; i++) {
                                                    file = this.selectedFiles[i];

                                                    if (file.size > 1073741824) {
                                                        alert("Can not upload file: '" + file.name + "'. Maximum file size (1 GB) is exceeded.");
                                                    }
                                                    promise = this.uploadFile(uploadUrl, file);

                                                    promises.push(promise);
                                                }
                                                _context.next = 5;
                                                return Promise.all(promises);

                                            case 5:
                                                $("#fileInput").replaceWith($("#fileInput").val('').clone(true));
                                                _context.next = 8;
                                                return this.getDocuments();

                                            case 8:
                                                this.documents = _context.sent;

                                            case 9:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, this);
                            }));
                        };
                        this.permissionMatcher = function (a, b) {
                            return a.name === b.name;
                        };
                        this.selectedAuthLevel = this.authorization.get();
                        this.init();
                    }

                    App.prototype.init = function init() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            _context2.prev = 0;
                                            _context2.next = 3;
                                            return this.loadConfig();

                                        case 3:
                                            this.config = _context2.sent;

                                            this.$viewer = $('#viewerContainer');
                                            _context2.next = 7;
                                            return this.getDocuments();

                                        case 7:
                                            this.documents = _context2.sent;
                                            _context2.next = 13;
                                            break;

                                        case 10:
                                            _context2.prev = 10;
                                            _context2.t0 = _context2["catch"](0);

                                            this.handleError(_context2.t0);

                                        case 13:
                                        case "end":
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this, [[0, 10]]);
                        }));
                    };

                    App.prototype.uploadFile = function uploadFile(targetUrl, file) {
                        var deferred = $.Deferred();
                        var xhr = new XMLHttpRequest();
                        var fd = new FormData();
                        xhr.open("POST", targetUrl, true);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                deferred.resolve();
                            } else if (xhr.status !== 200) {
                                alert("Upload failed: " + file.name);
                                deferred.reject();
                            }
                        };
                        fd.append("file", file);
                        xhr.send(fd);
                        return deferred.promise();
                    };

                    App.prototype.loadConfig = function loadConfig() {
                        return $.getJSON("config.json");
                    };

                    App.prototype.getDocuments = function getDocuments() {
                        var url = this.config.apiBaseUrl + "/document/list";
                        return this.makeAjaxCall(this.ajaxGetOptions(url));
                    };

                    App.prototype.getAvailableOperations = function getAvailableOperations() {
                        var url = this.config.apiBaseUrl + "/image/" + this.selectedDocumentId + "/getPermissions";
                        return this.makeAjaxCall(this.ajaxGetOptions(url));
                    };

                    App.prototype.initPermissions = function initPermissions() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                            var availableOperations, isOperationEnabled, _iterator, _isArray, _i, _ref, permInf;

                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                    switch (_context3.prev = _context3.next) {
                                        case 0:
                                            _context3.next = 2;
                                            return this.getAvailableOperations();

                                        case 2:
                                            availableOperations = _context3.sent;

                                            isOperationEnabled = function isOperationEnabled(id) {
                                                return availableOperations && availableOperations.includes(id);
                                            };

                                            if (this.selectedPermissions.length > 0) {
                                                this.selectedPermissions = [];
                                            }
                                            this.permissionInfos = [{ name: 'canPrint', value: isOperationEnabled(101), displayName: 'Can print' }, { name: 'toggleWatermark', value: isOperationEnabled(102), displayName: 'Toggle watermark' }, { name: 'canSave', value: isOperationEnabled(103), displayName: 'Can save' }, { name: 'canDownload', value: isOperationEnabled(3), displayName: 'Can download' }];
                                            _iterator = this.permissionInfos, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();

                                        case 7:
                                            if (!_isArray) {
                                                _context3.next = 13;
                                                break;
                                            }

                                            if (!(_i >= _iterator.length)) {
                                                _context3.next = 10;
                                                break;
                                            }

                                            return _context3.abrupt("break", 21);

                                        case 10:
                                            _ref = _iterator[_i++];
                                            _context3.next = 17;
                                            break;

                                        case 13:
                                            _i = _iterator.next();

                                            if (!_i.done) {
                                                _context3.next = 16;
                                                break;
                                            }

                                            return _context3.abrupt("break", 21);

                                        case 16:
                                            _ref = _i.value;

                                        case 17:
                                            permInf = _ref;

                                            permInf.value && this.selectedPermissions.push(permInf);

                                        case 19:
                                            _context3.next = 7;
                                            break;

                                        case 21:
                                        case "end":
                                            return _context3.stop();
                                    }
                                }
                            }, _callee3, this);
                        }));
                    };

                    App.prototype.showDocumentInViewer = function showDocumentInViewer(id) {
                        this.selectedDocumentId = id;
                        this.isEditFormOpened = true;
                        this.recreateViewer();
                    };

                    App.prototype.getTitle = function getTitle() {
                        for (var _iterator2 = this.documents, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                            var _ref2;

                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) break;
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) break;
                                _ref2 = _i2.value;
                            }

                            var document = _ref2;

                            if (document.Id === this.selectedDocumentId) {
                                return document.Name;
                            }
                        }
                        return '';
                    };

                    App.prototype.convertPermissionInfoArrayToObject = function convertPermissionInfoArrayToObject(arr) {
                        return arr.reduce(function (result, item) {
                            result[item.name] = item.value;
                            return result;
                        }, {});
                    };

                    App.prototype.createViewer = function createViewer() {
                        var _this2 = this;

                        var options = {
                            config: this.config,
                            showthumbnails: true,
                            metadata: false,
                            showtoolbar: true,
                            edittoolbar: true,
                            title: this.getTitle(),
                            showTitle: true,
                            containerWidth: function containerWidth() {
                                return _this2.$viewer.width() - 185;
                            },
                            containerHeight: function containerHeight() {
                                var wh = $(window).height();
                                return wh - 250;
                            },
                            reactToResize: true,
                            isAdmin: true,
                            toggleWatermark: true,
                            noWatermark: true,
                            noRedaction: true,
                            placeholderImgPath: './images/ajax-loader.gif',
                            showShapes: true,
                            callbacks: {
                                beforeClose: function beforeClose() {
                                    _this2.isEditFormOpened = false;
                                },
                                selectedDocumentChange: function selectedDocumentChange(newId) {
                                    _this2.selectedDocumentId = newId;
                                    _this2.initPermissions();
                                    _this2.initWatermarkData();
                                }
                            },
                            dataTransmission: {
                                apiBaseUrl: this.config.apiBaseUrl,
                                getExistingPreviewImages: {
                                    url: 'getexistingpreviewimages'
                                },
                                getPageCount: {
                                    url: 'getpagecount'
                                }
                            },
                            selectedDocumentId: this.selectedDocumentId,
                            needCloseButton: true,
                            thumbnailDirection: 'horizontal',
                            addNoChachePostfix: true,
                            permissionInfo: this.convertPermissionInfoArrayToObject(this.permissionInfos),
                            enableDocumentPager: true,
                            documentIdCollection: this.documents.map(function (obj) {
                                return obj.Id;
                            }),
                            firstDocumentClick: {
                                icon: 'sn-icon-firstdoc'
                            },
                            previousDocumentClick: {
                                icon: 'sn-icon-prevdoc'
                            },
                            nextDocumentClick: {
                                icon: 'sn-icon-nextdoc'
                            },
                            lastDocumentClick: {
                                icon: 'sn-icon-lastdoc'
                            }
                        };
                        var transcenViewer = new _transcendViewer.TranscendViewer(this.DialogService);
                        transcenViewer.initializeViewer(this.$viewer, options);
                    };

                    App.prototype.recreateViewer = function recreateViewer() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                    switch (_context4.prev = _context4.next) {
                                        case 0:
                                            if (this.$viewer.data('snDocViewer')) {
                                                this.$viewer.data('snDocViewer').destroy();
                                            }
                                            _context4.next = 3;
                                            return this.initPermissions();

                                        case 3:
                                            this.initWatermarkData();
                                            this.createViewer();
                                            this.$viewer.show();

                                        case 6:
                                        case "end":
                                            return _context4.stop();
                                    }
                                }
                            }, _callee4, this);
                        }));
                    };

                    App.prototype.deleteDocument = function deleteDocument() {
                        var url = this.config.apiBaseUrl + "/document/delete/" + this.selectedDocumentId;
                        this.makeAjaxCall(this.ajaxGetOptions(url));
                        this.isEditFormOpened = false;
                        this.$viewer.hide();
                        for (var i = 0; i < this.documents.length; i++) {
                            this.documents[i].Id === this.selectedDocumentId && this.documents.splice(i, 1);
                        }
                    };

                    App.prototype.submitPermissionInfos = function submitPermissionInfos() {
                        var _this3 = this;

                        var permissionsWithTrueValue = this.selectedPermissions.map(function (item) {
                            return Object.assign({}, item, { value: true });
                        });
                        var permissionsToSave = this.convertPermissionInfoArrayToObject(permissionsWithTrueValue);
                        var url = this.config.apiBaseUrl + "/image/" + this.selectedDocumentId + "/savePermissions";
                        var data = JSON.stringify(permissionsToSave);
                        this.makeAjaxCall(this.ajaxPostOptions(url, data)).always(function () {
                            _this3.recreateViewer();
                        });
                    };

                    App.prototype.getWatermarkData = function getWatermarkData() {
                        var url = this.config.apiBaseUrl + "/image/" + this.selectedDocumentId + "/getWatermarkData";
                        return this.makeAjaxCall(this.ajaxGetOptions(url));
                    };

                    App.prototype.initWatermarkData = function initWatermarkData() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
                            var watermarkData, fontParts;
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                    switch (_context5.prev = _context5.next) {
                                        case 0:
                                            _context5.next = 2;
                                            return this.getWatermarkData();

                                        case 2:
                                            watermarkData = _context5.sent;

                                            if (watermarkData.Font !== null) {
                                                fontParts = watermarkData.Font.split(',');

                                                this.selectedFontType = fontParts[0].trim();
                                                this.selectedFontSize = fontParts[1].trim();
                                                this.selectedFontColor = watermarkData.Color;
                                            } else {
                                                this.selectedFontType = this.fontTypes[0];
                                                this.selectedFontSize = this.fontSizes[0];
                                                this.selectedFontColor = this.fontColors[0].name;
                                            }
                                            this.watermarkText = watermarkData.WatermarkText;

                                        case 5:
                                        case "end":
                                            return _context5.stop();
                                    }
                                }
                            }, _callee5, this);
                        }));
                    };

                    App.prototype.submitWatermarkProperties = function submitWatermarkProperties() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee6() {
                            var watermarkPropertiesToSave, dataToSend;
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                while (1) {
                                    switch (_context6.prev = _context6.next) {
                                        case 0:
                                            watermarkPropertiesToSave = {
                                                WatermarkText: this.watermarkText,
                                                Font: this.selectedFontType + "," + this.selectedFontSize,
                                                Color: this.selectedFontColor
                                            };
                                            dataToSend = JSON.stringify(watermarkPropertiesToSave);

                                            this.postWatermarkData(dataToSend);
                                            this.recreateViewer();

                                        case 4:
                                        case "end":
                                            return _context6.stop();
                                    }
                                }
                            }, _callee6, this);
                        }));
                    };

                    App.prototype.postWatermarkData = function postWatermarkData(data) {
                        var url = this.config.apiBaseUrl + "/image/" + this.selectedDocumentId + "/saveWatermarkdata";
                        this.makeAjaxCall(this.ajaxPostOptions(url, data));
                    };

                    App.prototype.ajaxGetOptions = function ajaxGetOptions(url) {
                        return {
                            method: "GET",
                            url: url,
                            dataType: "json",
                            contentType: "application/json; charset=utf-8"
                        };
                    };

                    App.prototype.ajaxPostOptions = function ajaxPostOptions(url, data) {
                        return {
                            method: "POST",
                            url: url,
                            dataType: "json",
                            data: data,
                            contentType: "application/json; charset=utf-8"
                        };
                    };

                    App.prototype.makeAjaxCall = function makeAjaxCall(options) {
                        try {
                            return $.ajax(options);
                        } catch (e) {
                            this.handleError(e);
                            return null;
                        }
                    };

                    App.prototype.handleError = function handleError(exception) {
                        switch (exception.status) {
                            case 200:
                                break;
                            case 403:
                                alert('Unautherized. Please select an authorization level');
                                break;
                            default:
                                alert('Strange... Something went wrong.');
                        }
                    };

                    return App;
                }();
                exports.App = App = __decorate([_aureliaFramework.autoinject, __metadata('design:paramtypes', [typeof (_a = typeof _aureliaDialog.DialogService !== 'undefined' && _aureliaDialog.DialogService) === 'function' && _a || Object, typeof (_b = typeof _Authorization.Authorization !== 'undefined' && _Authorization.Authorization) === 'function' && _b || Object])], App);
                var _a, _b;
            }).call(exports, __webpack_require__(11));
        },

        78: function _(module, exports, __webpack_require__) {

            "use strict";

            (function (regeneratorRuntime) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.configure = configure;

                __webpack_require__(92);

                __webpack_require__(91);

                __webpack_require__("bootstrap");

                var _bluebird = __webpack_require__("bluebird");

                var Bluebird = _interopRequireWildcard(_bluebird);

                function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                        return obj;
                    } else {
                        var newObj = {};if (obj != null) {
                            for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                            }
                        }newObj.default = obj;return newObj;
                    }
                }

                var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            result.done ? resolve(result.value) : new P(function (resolve) {
                                resolve(result.value);
                            }).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments)).next());
                    });
                };

                Bluebird.config({ warnings: false });
                function configure(aurelia) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-dialog');

                                        _context.next = 3;
                                        return aurelia.start();

                                    case 3:
                                        aurelia.setRoot('app');


                                    case 4:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                }
            }).call(exports, __webpack_require__(11));
        },

        79: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Affix = function Affix(element, options) {
                        this.options = $.extend({}, Affix.DEFAULTS, options);

                        this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

                        this.$element = $(element);
                        this.affixed = null;
                        this.unpin = null;
                        this.pinnedOffset = null;

                        this.checkPosition();
                    };

                    Affix.VERSION = '3.3.7';

                    Affix.RESET = 'affix affix-top affix-bottom';

                    Affix.DEFAULTS = {
                        offset: 0,
                        target: window
                    };

                    Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
                        var scrollTop = this.$target.scrollTop();
                        var position = this.$element.offset();
                        var targetHeight = this.$target.height();

                        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

                        if (this.affixed == 'bottom') {
                            if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
                            return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
                        }

                        var initializing = this.affixed == null;
                        var colliderTop = initializing ? scrollTop : position.top;
                        var colliderHeight = initializing ? targetHeight : height;

                        if (offsetTop != null && scrollTop <= offsetTop) return 'top';
                        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

                        return false;
                    };

                    Affix.prototype.getPinnedOffset = function () {
                        if (this.pinnedOffset) return this.pinnedOffset;
                        this.$element.removeClass(Affix.RESET).addClass('affix');
                        var scrollTop = this.$target.scrollTop();
                        var position = this.$element.offset();
                        return this.pinnedOffset = position.top - scrollTop;
                    };

                    Affix.prototype.checkPositionWithEventLoop = function () {
                        setTimeout($.proxy(this.checkPosition, this), 1);
                    };

                    Affix.prototype.checkPosition = function () {
                        if (!this.$element.is(':visible')) return;

                        var height = this.$element.height();
                        var offset = this.options.offset;
                        var offsetTop = offset.top;
                        var offsetBottom = offset.bottom;
                        var scrollHeight = Math.max($(document).height(), $(document.body).height());

                        if ((typeof offset === "undefined" ? "undefined" : _typeof2(offset)) != 'object') offsetBottom = offsetTop = offset;
                        if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
                        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

                        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

                        if (this.affixed != affix) {
                            if (this.unpin != null) this.$element.css('top', '');

                            var affixType = 'affix' + (affix ? '-' + affix : '');
                            var e = $.Event(affixType + '.bs.affix');

                            this.$element.trigger(e);

                            if (e.isDefaultPrevented()) return;

                            this.affixed = affix;
                            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

                            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
                        }

                        if (affix == 'bottom') {
                            this.$element.offset({
                                top: scrollHeight - height - offsetBottom
                            });
                        }
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.affix');
                            var options = (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option;

                            if (!data) $this.data('bs.affix', data = new Affix(this, options));
                            if (typeof option == 'string') data[option]();
                        });
                    }

                    var old = $.fn.affix;

                    $.fn.affix = Plugin;
                    $.fn.affix.Constructor = Affix;

                    $.fn.affix.noConflict = function () {
                        $.fn.affix = old;
                        return this;
                    };

                    $(window).on('load', function () {
                        $('[data-spy="affix"]').each(function () {
                            var $spy = $(this);
                            var data = $spy.data();

                            data.offset = data.offset || {};

                            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
                            if (data.offsetTop != null) data.offset.top = data.offsetTop;

                            Plugin.call($spy, data);
                        });
                    });
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        80: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var dismiss = '[data-dismiss="alert"]';
                    var Alert = function Alert(el) {
                        $(el).on('click', dismiss, this.close);
                    };

                    Alert.VERSION = '3.3.7';

                    Alert.TRANSITION_DURATION = 150;

                    Alert.prototype.close = function (e) {
                        var $this = $(this);
                        var selector = $this.attr('data-target');

                        if (!selector) {
                            selector = $this.attr('href');
                            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
                        }

                        var $parent = $(selector === '#' ? [] : selector);

                        if (e) e.preventDefault();

                        if (!$parent.length) {
                            $parent = $this.closest('.alert');
                        }

                        $parent.trigger(e = $.Event('close.bs.alert'));

                        if (e.isDefaultPrevented()) return;

                        $parent.removeClass('in');

                        function removeElement() {
                            $parent.detach().trigger('closed.bs.alert').remove();
                        }

                        $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.alert');

                            if (!data) $this.data('bs.alert', data = new Alert(this));
                            if (typeof option == 'string') data[option].call($this);
                        });
                    }

                    var old = $.fn.alert;

                    $.fn.alert = Plugin;
                    $.fn.alert.Constructor = Alert;

                    $.fn.alert.noConflict = function () {
                        $.fn.alert = old;
                        return this;
                    };

                    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        81: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Button = function Button(element, options) {
                        this.$element = $(element);
                        this.options = $.extend({}, Button.DEFAULTS, options);
                        this.isLoading = false;
                    };

                    Button.VERSION = '3.3.7';

                    Button.DEFAULTS = {
                        loadingText: 'loading...'
                    };

                    Button.prototype.setState = function (state) {
                        var d = 'disabled';
                        var $el = this.$element;
                        var val = $el.is('input') ? 'val' : 'html';
                        var data = $el.data();

                        state += 'Text';

                        if (data.resetText == null) $el.data('resetText', $el[val]());

                        setTimeout($.proxy(function () {
                            $el[val](data[state] == null ? this.options[state] : data[state]);

                            if (state == 'loadingText') {
                                this.isLoading = true;
                                $el.addClass(d).attr(d, d).prop(d, true);
                            } else if (this.isLoading) {
                                this.isLoading = false;
                                $el.removeClass(d).removeAttr(d).prop(d, false);
                            }
                        }, this), 0);
                    };

                    Button.prototype.toggle = function () {
                        var changed = true;
                        var $parent = this.$element.closest('[data-toggle="buttons"]');

                        if ($parent.length) {
                            var $input = this.$element.find('input');
                            if ($input.prop('type') == 'radio') {
                                if ($input.prop('checked')) changed = false;
                                $parent.find('.active').removeClass('active');
                                this.$element.addClass('active');
                            } else if ($input.prop('type') == 'checkbox') {
                                if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
                                this.$element.toggleClass('active');
                            }
                            $input.prop('checked', this.$element.hasClass('active'));
                            if (changed) $input.trigger('change');
                        } else {
                            this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
                            this.$element.toggleClass('active');
                        }
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.button');
                            var options = (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option;

                            if (!data) $this.data('bs.button', data = new Button(this, options));

                            if (option == 'toggle') data.toggle();else if (option) data.setState(option);
                        });
                    }

                    var old = $.fn.button;

                    $.fn.button = Plugin;
                    $.fn.button.Constructor = Button;

                    $.fn.button.noConflict = function () {
                        $.fn.button = old;
                        return this;
                    };

                    $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
                        var $btn = $(e.target).closest('.btn');
                        Plugin.call($btn, 'toggle');
                        if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
                            e.preventDefault();

                            if ($btn.is('input,button')) $btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');
                        }
                    }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
                        $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
                    });
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        82: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Carousel = function Carousel(element, options) {
                        this.$element = $(element);
                        this.$indicators = this.$element.find('.carousel-indicators');
                        this.options = options;
                        this.paused = null;
                        this.sliding = null;
                        this.interval = null;
                        this.$active = null;
                        this.$items = null;

                        this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

                        this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
                    };

                    Carousel.VERSION = '3.3.7';

                    Carousel.TRANSITION_DURATION = 600;

                    Carousel.DEFAULTS = {
                        interval: 5000,
                        pause: 'hover',
                        wrap: true,
                        keyboard: true
                    };

                    Carousel.prototype.keydown = function (e) {
                        if (/input|textarea/i.test(e.target.tagName)) return;
                        switch (e.which) {
                            case 37:
                                this.prev();break;
                            case 39:
                                this.next();break;
                            default:
                                return;
                        }

                        e.preventDefault();
                    };

                    Carousel.prototype.cycle = function (e) {
                        e || (this.paused = false);

                        this.interval && clearInterval(this.interval);

                        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

                        return this;
                    };

                    Carousel.prototype.getItemIndex = function (item) {
                        this.$items = item.parent().children('.item');
                        return this.$items.index(item || this.$active);
                    };

                    Carousel.prototype.getItemForDirection = function (direction, active) {
                        var activeIndex = this.getItemIndex(active);
                        var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
                        if (willWrap && !this.options.wrap) return active;
                        var delta = direction == 'prev' ? -1 : 1;
                        var itemIndex = (activeIndex + delta) % this.$items.length;
                        return this.$items.eq(itemIndex);
                    };

                    Carousel.prototype.to = function (pos) {
                        var that = this;
                        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

                        if (pos > this.$items.length - 1 || pos < 0) return;

                        if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
                            that.to(pos);
                        });
                        if (activeIndex == pos) return this.pause().cycle();

                        return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
                    };

                    Carousel.prototype.pause = function (e) {
                        e || (this.paused = true);

                        if (this.$element.find('.next, .prev').length && $.support.transition) {
                            this.$element.trigger($.support.transition.end);
                            this.cycle(true);
                        }

                        this.interval = clearInterval(this.interval);

                        return this;
                    };

                    Carousel.prototype.next = function () {
                        if (this.sliding) return;
                        return this.slide('next');
                    };

                    Carousel.prototype.prev = function () {
                        if (this.sliding) return;
                        return this.slide('prev');
                    };

                    Carousel.prototype.slide = function (type, next) {
                        var $active = this.$element.find('.item.active');
                        var $next = next || this.getItemForDirection(type, $active);
                        var isCycling = this.interval;
                        var direction = type == 'next' ? 'left' : 'right';
                        var that = this;

                        if ($next.hasClass('active')) return this.sliding = false;

                        var relatedTarget = $next[0];
                        var slideEvent = $.Event('slide.bs.carousel', {
                            relatedTarget: relatedTarget,
                            direction: direction
                        });
                        this.$element.trigger(slideEvent);
                        if (slideEvent.isDefaultPrevented()) return;

                        this.sliding = true;

                        isCycling && this.pause();

                        if (this.$indicators.length) {
                            this.$indicators.find('.active').removeClass('active');
                            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
                            $nextIndicator && $nextIndicator.addClass('active');
                        }

                        var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction });
                        if ($.support.transition && this.$element.hasClass('slide')) {
                            $next.addClass(type);
                            $next[0].offsetWidth;
                            $active.addClass(direction);
                            $next.addClass(direction);
                            $active.one('bsTransitionEnd', function () {
                                $next.removeClass([type, direction].join(' ')).addClass('active');
                                $active.removeClass(['active', direction].join(' '));
                                that.sliding = false;
                                setTimeout(function () {
                                    that.$element.trigger(slidEvent);
                                }, 0);
                            }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
                        } else {
                            $active.removeClass('active');
                            $next.addClass('active');
                            this.sliding = false;
                            this.$element.trigger(slidEvent);
                        }

                        isCycling && this.cycle();

                        return this;
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.carousel');
                            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option);
                            var action = typeof option == 'string' ? option : options.slide;

                            if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
                            if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
                        });
                    }

                    var old = $.fn.carousel;

                    $.fn.carousel = Plugin;
                    $.fn.carousel.Constructor = Carousel;

                    $.fn.carousel.noConflict = function () {
                        $.fn.carousel = old;
                        return this;
                    };

                    var clickHandler = function clickHandler(e) {
                        var href;
                        var $this = $(this);
                        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''));
                        if (!$target.hasClass('carousel')) return;
                        var options = $.extend({}, $target.data(), $this.data());
                        var slideIndex = $this.attr('data-slide-to');
                        if (slideIndex) options.interval = false;

                        Plugin.call($target, options);

                        if (slideIndex) {
                            $target.data('bs.carousel').to(slideIndex);
                        }

                        e.preventDefault();
                    };

                    $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

                    $(window).on('load', function () {
                        $('[data-ride="carousel"]').each(function () {
                            var $carousel = $(this);
                            Plugin.call($carousel, $carousel.data());
                        });
                    });
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        83: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Collapse = function Collapse(element, options) {
                        this.$element = $(element);
                        this.options = $.extend({}, Collapse.DEFAULTS, options);
                        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
                        this.transitioning = null;

                        if (this.options.parent) {
                            this.$parent = this.getParent();
                        } else {
                            this.addAriaAndCollapsedClass(this.$element, this.$trigger);
                        }

                        if (this.options.toggle) this.toggle();
                    };

                    Collapse.VERSION = '3.3.7';

                    Collapse.TRANSITION_DURATION = 350;

                    Collapse.DEFAULTS = {
                        toggle: true
                    };

                    Collapse.prototype.dimension = function () {
                        var hasWidth = this.$element.hasClass('width');
                        return hasWidth ? 'width' : 'height';
                    };

                    Collapse.prototype.show = function () {
                        if (this.transitioning || this.$element.hasClass('in')) return;

                        var activesData;
                        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

                        if (actives && actives.length) {
                            activesData = actives.data('bs.collapse');
                            if (activesData && activesData.transitioning) return;
                        }

                        var startEvent = $.Event('show.bs.collapse');
                        this.$element.trigger(startEvent);
                        if (startEvent.isDefaultPrevented()) return;

                        if (actives && actives.length) {
                            Plugin.call(actives, 'hide');
                            activesData || actives.data('bs.collapse', null);
                        }

                        var dimension = this.dimension();

                        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

                        this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

                        this.transitioning = 1;

                        var complete = function complete() {
                            this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
                            this.transitioning = 0;
                            this.$element.trigger('shown.bs.collapse');
                        };

                        if (!$.support.transition) return complete.call(this);

                        var scrollSize = $.camelCase(['scroll', dimension].join('-'));

                        this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
                    };

                    Collapse.prototype.hide = function () {
                        if (this.transitioning || !this.$element.hasClass('in')) return;

                        var startEvent = $.Event('hide.bs.collapse');
                        this.$element.trigger(startEvent);
                        if (startEvent.isDefaultPrevented()) return;

                        var dimension = this.dimension();

                        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

                        this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

                        this.$trigger.addClass('collapsed').attr('aria-expanded', false);

                        this.transitioning = 1;

                        var complete = function complete() {
                            this.transitioning = 0;
                            this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
                        };

                        if (!$.support.transition) return complete.call(this);

                        this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
                    };

                    Collapse.prototype.toggle = function () {
                        this[this.$element.hasClass('in') ? 'hide' : 'show']();
                    };

                    Collapse.prototype.getParent = function () {
                        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
                            var $element = $(element);
                            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
                        }, this)).end();
                    };

                    Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
                        var isOpen = $element.hasClass('in');

                        $element.attr('aria-expanded', isOpen);
                        $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
                    };

                    function getTargetFromTrigger($trigger) {
                        var href;
                        var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

                        return $(target);
                    }

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.collapse');
                            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option);

                            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
                            if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
                            if (typeof option == 'string') data[option]();
                        });
                    }

                    var old = $.fn.collapse;

                    $.fn.collapse = Plugin;
                    $.fn.collapse.Constructor = Collapse;

                    $.fn.collapse.noConflict = function () {
                        $.fn.collapse = old;
                        return this;
                    };

                    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
                        var $this = $(this);

                        if (!$this.attr('data-target')) e.preventDefault();

                        var $target = getTargetFromTrigger($this);
                        var data = $target.data('bs.collapse');
                        var option = data ? 'toggle' : $this.data();

                        Plugin.call($target, option);
                    });
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        84: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var backdrop = '.dropdown-backdrop';
                    var toggle = '[data-toggle="dropdown"]';
                    var Dropdown = function Dropdown(element) {
                        $(element).on('click.bs.dropdown', this.toggle);
                    };

                    Dropdown.VERSION = '3.3.7';

                    function getParent($this) {
                        var selector = $this.attr('data-target');

                        if (!selector) {
                            selector = $this.attr('href');
                            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '');
                        }

                        var $parent = selector && $(selector);

                        return $parent && $parent.length ? $parent : $this.parent();
                    }

                    function clearMenus(e) {
                        if (e && e.which === 3) return;
                        $(backdrop).remove();
                        $(toggle).each(function () {
                            var $this = $(this);
                            var $parent = getParent($this);
                            var relatedTarget = { relatedTarget: this };

                            if (!$parent.hasClass('open')) return;

                            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

                            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

                            if (e.isDefaultPrevented()) return;

                            $this.attr('aria-expanded', 'false');
                            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
                        });
                    }

                    Dropdown.prototype.toggle = function (e) {
                        var $this = $(this);

                        if ($this.is('.disabled, :disabled')) return;

                        var $parent = getParent($this);
                        var isActive = $parent.hasClass('open');

                        clearMenus();

                        if (!isActive) {
                            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                                $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
                            }

                            var relatedTarget = { relatedTarget: this };
                            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

                            if (e.isDefaultPrevented()) return;

                            $this.trigger('focus').attr('aria-expanded', 'true');

                            $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget));
                        }

                        return false;
                    };

                    Dropdown.prototype.keydown = function (e) {
                        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

                        var $this = $(this);

                        e.preventDefault();
                        e.stopPropagation();

                        if ($this.is('.disabled, :disabled')) return;

                        var $parent = getParent($this);
                        var isActive = $parent.hasClass('open');

                        if (!isActive && e.which != 27 || isActive && e.which == 27) {
                            if (e.which == 27) $parent.find(toggle).trigger('focus');
                            return $this.trigger('click');
                        }

                        var desc = ' li:not(.disabled):visible a';
                        var $items = $parent.find('.dropdown-menu' + desc);

                        if (!$items.length) return;

                        var index = $items.index(e.target);

                        if (e.which == 38 && index > 0) index--;
                        if (e.which == 40 && index < $items.length - 1) index++;
                        if (!~index) index = 0;

                        $items.eq(index).trigger('focus');
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.dropdown');

                            if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
                            if (typeof option == 'string') data[option].call($this);
                        });
                    }

                    var old = $.fn.dropdown;

                    $.fn.dropdown = Plugin;
                    $.fn.dropdown.Constructor = Dropdown;

                    $.fn.dropdown.noConflict = function () {
                        $.fn.dropdown = old;
                        return this;
                    };

                    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
                        e.stopPropagation();
                    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        85: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Modal = function Modal(element, options) {
                        this.options = options;
                        this.$body = $(document.body);
                        this.$element = $(element);
                        this.$dialog = this.$element.find('.modal-dialog');
                        this.$backdrop = null;
                        this.isShown = null;
                        this.originalBodyPad = null;
                        this.scrollbarWidth = 0;
                        this.ignoreBackdropClick = false;

                        if (this.options.remote) {
                            this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
                                this.$element.trigger('loaded.bs.modal');
                            }, this));
                        }
                    };

                    Modal.VERSION = '3.3.7';

                    Modal.TRANSITION_DURATION = 300;
                    Modal.BACKDROP_TRANSITION_DURATION = 150;

                    Modal.DEFAULTS = {
                        backdrop: true,
                        keyboard: true,
                        show: true
                    };

                    Modal.prototype.toggle = function (_relatedTarget) {
                        return this.isShown ? this.hide() : this.show(_relatedTarget);
                    };

                    Modal.prototype.show = function (_relatedTarget) {
                        var that = this;
                        var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

                        this.$element.trigger(e);

                        if (this.isShown || e.isDefaultPrevented()) return;

                        this.isShown = true;

                        this.checkScrollbar();
                        this.setScrollbar();
                        this.$body.addClass('modal-open');

                        this.escape();
                        this.resize();

                        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

                        this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                            that.$element.one('mouseup.dismiss.bs.modal', function (e) {
                                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
                            });
                        });

                        this.backdrop(function () {
                            var transition = $.support.transition && that.$element.hasClass('fade');

                            if (!that.$element.parent().length) {
                                that.$element.appendTo(that.$body);
                            }

                            that.$element.show().scrollTop(0);

                            that.adjustDialog();

                            if (transition) {
                                that.$element[0].offsetWidth;
                            }

                            that.$element.addClass('in');

                            that.enforceFocus();

                            var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

                            transition ? that.$dialog.one('bsTransitionEnd', function () {
                                that.$element.trigger('focus').trigger(e);
                            }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
                        });
                    };

                    Modal.prototype.hide = function (e) {
                        if (e) e.preventDefault();

                        e = $.Event('hide.bs.modal');

                        this.$element.trigger(e);

                        if (!this.isShown || e.isDefaultPrevented()) return;

                        this.isShown = false;

                        this.escape();
                        this.resize();

                        $(document).off('focusin.bs.modal');

                        this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

                        this.$dialog.off('mousedown.dismiss.bs.modal');

                        $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
                    };

                    Modal.prototype.enforceFocus = function () {
                        $(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function (e) {
                            if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                                this.$element.trigger('focus');
                            }
                        }, this));
                    };

                    Modal.prototype.escape = function () {
                        if (this.isShown && this.options.keyboard) {
                            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
                                e.which == 27 && this.hide();
                            }, this));
                        } else if (!this.isShown) {
                            this.$element.off('keydown.dismiss.bs.modal');
                        }
                    };

                    Modal.prototype.resize = function () {
                        if (this.isShown) {
                            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
                        } else {
                            $(window).off('resize.bs.modal');
                        }
                    };

                    Modal.prototype.hideModal = function () {
                        var that = this;
                        this.$element.hide();
                        this.backdrop(function () {
                            that.$body.removeClass('modal-open');
                            that.resetAdjustments();
                            that.resetScrollbar();
                            that.$element.trigger('hidden.bs.modal');
                        });
                    };

                    Modal.prototype.removeBackdrop = function () {
                        this.$backdrop && this.$backdrop.remove();
                        this.$backdrop = null;
                    };

                    Modal.prototype.backdrop = function (callback) {
                        var that = this;
                        var animate = this.$element.hasClass('fade') ? 'fade' : '';

                        if (this.isShown && this.options.backdrop) {
                            var doAnimate = $.support.transition && animate;

                            this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

                            this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
                                if (this.ignoreBackdropClick) {
                                    this.ignoreBackdropClick = false;
                                    return;
                                }
                                if (e.target !== e.currentTarget) return;
                                this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
                            }, this));

                            if (doAnimate) this.$backdrop[0].offsetWidth;

                            this.$backdrop.addClass('in');

                            if (!callback) return;

                            doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
                        } else if (!this.isShown && this.$backdrop) {
                            this.$backdrop.removeClass('in');

                            var callbackRemove = function callbackRemove() {
                                that.removeBackdrop();
                                callback && callback();
                            };
                            $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
                        } else if (callback) {
                            callback();
                        }
                    };

                    Modal.prototype.handleUpdate = function () {
                        this.adjustDialog();
                    };

                    Modal.prototype.adjustDialog = function () {
                        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

                        this.$element.css({
                            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
                            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
                        });
                    };

                    Modal.prototype.resetAdjustments = function () {
                        this.$element.css({
                            paddingLeft: '',
                            paddingRight: ''
                        });
                    };

                    Modal.prototype.checkScrollbar = function () {
                        var fullWindowWidth = window.innerWidth;
                        if (!fullWindowWidth) {
                            var documentElementRect = document.documentElement.getBoundingClientRect();
                            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
                        }
                        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
                        this.scrollbarWidth = this.measureScrollbar();
                    };

                    Modal.prototype.setScrollbar = function () {
                        var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
                        this.originalBodyPad = document.body.style.paddingRight || '';
                        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
                    };

                    Modal.prototype.resetScrollbar = function () {
                        this.$body.css('padding-right', this.originalBodyPad);
                    };

                    Modal.prototype.measureScrollbar = function () {
                        var scrollDiv = document.createElement('div');
                        scrollDiv.className = 'modal-scrollbar-measure';
                        this.$body.append(scrollDiv);
                        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                        this.$body[0].removeChild(scrollDiv);
                        return scrollbarWidth;
                    };

                    function Plugin(option, _relatedTarget) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.modal');
                            var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option);

                            if (!data) $this.data('bs.modal', data = new Modal(this, options));
                            if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
                        });
                    }

                    var old = $.fn.modal;

                    $.fn.modal = Plugin;
                    $.fn.modal.Constructor = Modal;

                    $.fn.modal.noConflict = function () {
                        $.fn.modal = old;
                        return this;
                    };

                    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
                        var $this = $(this);
                        var href = $this.attr('href');
                        var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, ''));
                        var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

                        if ($this.is('a')) e.preventDefault();

                        $target.one('show.bs.modal', function (showEvent) {
                            if (showEvent.isDefaultPrevented()) return;
                            $target.one('hidden.bs.modal', function () {
                                $this.is(':visible') && $this.trigger('focus');
                            });
                        });
                        Plugin.call($target, option, this);
                    });
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        86: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Popover = function Popover(element, options) {
                        this.init('popover', element, options);
                    };

                    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

                    Popover.VERSION = '3.3.7';

                    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
                        placement: 'right',
                        trigger: 'click',
                        content: '',
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                    });

                    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

                    Popover.prototype.constructor = Popover;

                    Popover.prototype.getDefaults = function () {
                        return Popover.DEFAULTS;
                    };

                    Popover.prototype.setContent = function () {
                        var $tip = this.tip();
                        var title = this.getTitle();
                        var content = this.getContent();

                        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
                        $tip.find('.popover-content').children().detach().end()[this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

                        $tip.removeClass('fade top bottom left right in');

                        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
                    };

                    Popover.prototype.hasContent = function () {
                        return this.getTitle() || this.getContent();
                    };

                    Popover.prototype.getContent = function () {
                        var $e = this.$element;
                        var o = this.options;

                        return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
                    };

                    Popover.prototype.arrow = function () {
                        return this.$arrow = this.$arrow || this.tip().find('.arrow');
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.popover');
                            var options = (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option;

                            if (!data && /destroy|hide/.test(option)) return;
                            if (!data) $this.data('bs.popover', data = new Popover(this, options));
                            if (typeof option == 'string') data[option]();
                        });
                    }

                    var old = $.fn.popover;

                    $.fn.popover = Plugin;
                    $.fn.popover.Constructor = Popover;

                    $.fn.popover.noConflict = function () {
                        $.fn.popover = old;
                        return this;
                    };
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        87: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    function ScrollSpy(element, options) {
                        this.$body = $(document.body);
                        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
                        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
                        this.selector = (this.options.target || '') + ' .nav li > a';
                        this.offsets = [];
                        this.targets = [];
                        this.activeTarget = null;
                        this.scrollHeight = 0;

                        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
                        this.refresh();
                        this.process();
                    }

                    ScrollSpy.VERSION = '3.3.7';

                    ScrollSpy.DEFAULTS = {
                        offset: 10
                    };

                    ScrollSpy.prototype.getScrollHeight = function () {
                        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
                    };

                    ScrollSpy.prototype.refresh = function () {
                        var that = this;
                        var offsetMethod = 'offset';
                        var offsetBase = 0;

                        this.offsets = [];
                        this.targets = [];
                        this.scrollHeight = this.getScrollHeight();

                        if (!$.isWindow(this.$scrollElement[0])) {
                            offsetMethod = 'position';
                            offsetBase = this.$scrollElement.scrollTop();
                        }

                        this.$body.find(this.selector).map(function () {
                            var $el = $(this);
                            var href = $el.data('target') || $el.attr('href');
                            var $href = /^#./.test(href) && $(href);

                            return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
                        }).sort(function (a, b) {
                            return a[0] - b[0];
                        }).each(function () {
                            that.offsets.push(this[0]);
                            that.targets.push(this[1]);
                        });
                    };

                    ScrollSpy.prototype.process = function () {
                        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
                        var scrollHeight = this.getScrollHeight();
                        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
                        var offsets = this.offsets;
                        var targets = this.targets;
                        var activeTarget = this.activeTarget;
                        var i;

                        if (this.scrollHeight != scrollHeight) {
                            this.refresh();
                        }

                        if (scrollTop >= maxScroll) {
                            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
                        }

                        if (activeTarget && scrollTop < offsets[0]) {
                            this.activeTarget = null;
                            return this.clear();
                        }

                        for (i = offsets.length; i--;) {
                            activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
                        }
                    };

                    ScrollSpy.prototype.activate = function (target) {
                        this.activeTarget = target;

                        this.clear();

                        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

                        var active = $(selector).parents('li').addClass('active');

                        if (active.parent('.dropdown-menu').length) {
                            active = active.closest('li.dropdown').addClass('active');
                        }

                        active.trigger('activate.bs.scrollspy');
                    };

                    ScrollSpy.prototype.clear = function () {
                        $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.scrollspy');
                            var options = (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option;

                            if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
                            if (typeof option == 'string') data[option]();
                        });
                    }

                    var old = $.fn.scrollspy;

                    $.fn.scrollspy = Plugin;
                    $.fn.scrollspy.Constructor = ScrollSpy;

                    $.fn.scrollspy.noConflict = function () {
                        $.fn.scrollspy = old;
                        return this;
                    };

                    $(window).on('load.bs.scrollspy.data-api', function () {
                        $('[data-spy="scroll"]').each(function () {
                            var $spy = $(this);
                            Plugin.call($spy, $spy.data());
                        });
                    });
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        88: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Tab = function Tab(element) {
                        this.element = $(element);
                    };

                    Tab.VERSION = '3.3.7';

                    Tab.TRANSITION_DURATION = 150;

                    Tab.prototype.show = function () {
                        var $this = this.element;
                        var $ul = $this.closest('ul:not(.dropdown-menu)');
                        var selector = $this.data('target');

                        if (!selector) {
                            selector = $this.attr('href');
                            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
                        }

                        if ($this.parent('li').hasClass('active')) return;

                        var $previous = $ul.find('.active:last a');
                        var hideEvent = $.Event('hide.bs.tab', {
                            relatedTarget: $this[0]
                        });
                        var showEvent = $.Event('show.bs.tab', {
                            relatedTarget: $previous[0]
                        });

                        $previous.trigger(hideEvent);
                        $this.trigger(showEvent);

                        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

                        var $target = $(selector);

                        this.activate($this.closest('li'), $ul);
                        this.activate($target, $target.parent(), function () {
                            $previous.trigger({
                                type: 'hidden.bs.tab',
                                relatedTarget: $this[0]
                            });
                            $this.trigger({
                                type: 'shown.bs.tab',
                                relatedTarget: $previous[0]
                            });
                        });
                    };

                    Tab.prototype.activate = function (element, container, callback) {
                        var $active = container.find('> .active');
                        var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

                        function next() {
                            $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

                            element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

                            if (transition) {
                                element[0].offsetWidth;
                                element.addClass('in');
                            } else {
                                element.removeClass('fade');
                            }

                            if (element.parent('.dropdown-menu').length) {
                                element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
                            }

                            callback && callback();
                        }

                        $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

                        $active.removeClass('in');
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.tab');

                            if (!data) $this.data('bs.tab', data = new Tab(this));
                            if (typeof option == 'string') data[option]();
                        });
                    }

                    var old = $.fn.tab;

                    $.fn.tab = Plugin;
                    $.fn.tab.Constructor = Tab;

                    $.fn.tab.noConflict = function () {
                        $.fn.tab = old;
                        return this;
                    };

                    var clickHandler = function clickHandler(e) {
                        e.preventDefault();
                        Plugin.call($(this), 'show');
                    };

                    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        89: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    var Tooltip = function Tooltip(element, options) {
                        this.type = null;
                        this.options = null;
                        this.enabled = null;
                        this.timeout = null;
                        this.hoverState = null;
                        this.$element = null;
                        this.inState = null;

                        this.init('tooltip', element, options);
                    };

                    Tooltip.VERSION = '3.3.7';

                    Tooltip.TRANSITION_DURATION = 150;

                    Tooltip.DEFAULTS = {
                        animation: true,
                        placement: 'top',
                        selector: false,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: 'hover focus',
                        title: '',
                        delay: 0,
                        html: false,
                        container: false,
                        viewport: {
                            selector: 'body',
                            padding: 0
                        }
                    };

                    Tooltip.prototype.init = function (type, element, options) {
                        this.enabled = true;
                        this.type = type;
                        this.$element = $(element);
                        this.options = this.getOptions(options);
                        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
                        this.inState = { click: false, hover: false, focus: false };

                        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
                            throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
                        }

                        var triggers = this.options.trigger.split(' ');

                        for (var i = triggers.length; i--;) {
                            var trigger = triggers[i];

                            if (trigger == 'click') {
                                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
                            } else if (trigger != 'manual') {
                                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
                                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

                                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
                                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
                            }
                        }

                        this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
                    };

                    Tooltip.prototype.getDefaults = function () {
                        return Tooltip.DEFAULTS;
                    };

                    Tooltip.prototype.getOptions = function (options) {
                        options = $.extend({}, this.getDefaults(), this.$element.data(), options);

                        if (options.delay && typeof options.delay == 'number') {
                            options.delay = {
                                show: options.delay,
                                hide: options.delay
                            };
                        }

                        return options;
                    };

                    Tooltip.prototype.getDelegateOptions = function () {
                        var options = {};
                        var defaults = this.getDefaults();

                        this._options && $.each(this._options, function (key, value) {
                            if (defaults[key] != value) options[key] = value;
                        });

                        return options;
                    };

                    Tooltip.prototype.enter = function (obj) {
                        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

                        if (!self) {
                            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
                            $(obj.currentTarget).data('bs.' + this.type, self);
                        }

                        if (obj instanceof $.Event) {
                            self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
                        }

                        if (self.tip().hasClass('in') || self.hoverState == 'in') {
                            self.hoverState = 'in';
                            return;
                        }

                        clearTimeout(self.timeout);

                        self.hoverState = 'in';

                        if (!self.options.delay || !self.options.delay.show) return self.show();

                        self.timeout = setTimeout(function () {
                            if (self.hoverState == 'in') self.show();
                        }, self.options.delay.show);
                    };

                    Tooltip.prototype.isInStateTrue = function () {
                        for (var key in this.inState) {
                            if (this.inState[key]) return true;
                        }

                        return false;
                    };

                    Tooltip.prototype.leave = function (obj) {
                        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

                        if (!self) {
                            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
                            $(obj.currentTarget).data('bs.' + this.type, self);
                        }

                        if (obj instanceof $.Event) {
                            self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
                        }

                        if (self.isInStateTrue()) return;

                        clearTimeout(self.timeout);

                        self.hoverState = 'out';

                        if (!self.options.delay || !self.options.delay.hide) return self.hide();

                        self.timeout = setTimeout(function () {
                            if (self.hoverState == 'out') self.hide();
                        }, self.options.delay.hide);
                    };

                    Tooltip.prototype.show = function () {
                        var e = $.Event('show.bs.' + this.type);

                        if (this.hasContent() && this.enabled) {
                            this.$element.trigger(e);

                            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                            if (e.isDefaultPrevented() || !inDom) return;
                            var that = this;

                            var $tip = this.tip();

                            var tipId = this.getUID(this.type);

                            this.setContent();
                            $tip.attr('id', tipId);
                            this.$element.attr('aria-describedby', tipId);

                            if (this.options.animation) $tip.addClass('fade');

                            var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

                            var autoToken = /\s?auto?\s?/i;
                            var autoPlace = autoToken.test(placement);
                            if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

                            $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

                            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
                            this.$element.trigger('inserted.bs.' + this.type);

                            var pos = this.getPosition();
                            var actualWidth = $tip[0].offsetWidth;
                            var actualHeight = $tip[0].offsetHeight;

                            if (autoPlace) {
                                var orgPlacement = placement;
                                var viewportDim = this.getPosition(this.$viewport);

                                placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

                                $tip.removeClass(orgPlacement).addClass(placement);
                            }

                            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

                            this.applyPlacement(calculatedOffset, placement);

                            var complete = function complete() {
                                var prevHoverState = that.hoverState;
                                that.$element.trigger('shown.bs.' + that.type);
                                that.hoverState = null;

                                if (prevHoverState == 'out') that.leave(that);
                            };

                            $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
                        }
                    };

                    Tooltip.prototype.applyPlacement = function (offset, placement) {
                        var $tip = this.tip();
                        var width = $tip[0].offsetWidth;
                        var height = $tip[0].offsetHeight;

                        var marginTop = parseInt($tip.css('margin-top'), 10);
                        var marginLeft = parseInt($tip.css('margin-left'), 10);

                        if (isNaN(marginTop)) marginTop = 0;
                        if (isNaN(marginLeft)) marginLeft = 0;

                        offset.top += marginTop;
                        offset.left += marginLeft;

                        $.offset.setOffset($tip[0], $.extend({
                            using: function using(props) {
                                $tip.css({
                                    top: Math.round(props.top),
                                    left: Math.round(props.left)
                                });
                            }
                        }, offset), 0);

                        $tip.addClass('in');

                        var actualWidth = $tip[0].offsetWidth;
                        var actualHeight = $tip[0].offsetHeight;

                        if (placement == 'top' && actualHeight != height) {
                            offset.top = offset.top + height - actualHeight;
                        }

                        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

                        if (delta.left) offset.left += delta.left;else offset.top += delta.top;

                        var isVertical = /top|bottom/.test(placement);
                        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
                        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

                        $tip.offset(offset);
                        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
                    };

                    Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
                        this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
                    };

                    Tooltip.prototype.setContent = function () {
                        var $tip = this.tip();
                        var title = this.getTitle();

                        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
                        $tip.removeClass('fade in top bottom left right');
                    };

                    Tooltip.prototype.hide = function (callback) {
                        var that = this;
                        var $tip = $(this.$tip);
                        var e = $.Event('hide.bs.' + this.type);

                        function complete() {
                            if (that.hoverState != 'in') $tip.detach();
                            if (that.$element) {
                                that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
                            }
                            callback && callback();
                        }

                        this.$element.trigger(e);

                        if (e.isDefaultPrevented()) return;

                        $tip.removeClass('in');

                        $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

                        this.hoverState = null;

                        return this;
                    };

                    Tooltip.prototype.fixTitle = function () {
                        var $e = this.$element;
                        if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
                            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
                        }
                    };

                    Tooltip.prototype.hasContent = function () {
                        return this.getTitle();
                    };

                    Tooltip.prototype.getPosition = function ($element) {
                        $element = $element || this.$element;

                        var el = $element[0];
                        var isBody = el.tagName == 'BODY';

                        var elRect = el.getBoundingClientRect();
                        if (elRect.width == null) {
                            elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
                        }
                        var isSvg = window.SVGElement && el instanceof window.SVGElement;

                        var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
                        var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
                        var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

                        return $.extend({}, elRect, scroll, outerDims, elOffset);
                    };

                    Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
                        return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } : { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
                    };

                    Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
                        var delta = { top: 0, left: 0 };
                        if (!this.$viewport) return delta;

                        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
                        var viewportDimensions = this.getPosition(this.$viewport);

                        if (/right|left/.test(placement)) {
                            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
                            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
                            if (topEdgeOffset < viewportDimensions.top) {
                                delta.top = viewportDimensions.top - topEdgeOffset;
                            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
                            }
                        } else {
                            var leftEdgeOffset = pos.left - viewportPadding;
                            var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
                            if (leftEdgeOffset < viewportDimensions.left) {
                                delta.left = viewportDimensions.left - leftEdgeOffset;
                            } else if (rightEdgeOffset > viewportDimensions.right) {
                                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
                            }
                        }

                        return delta;
                    };

                    Tooltip.prototype.getTitle = function () {
                        var title;
                        var $e = this.$element;
                        var o = this.options;

                        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

                        return title;
                    };

                    Tooltip.prototype.getUID = function (prefix) {
                        do {
                            prefix += ~~(Math.random() * 1000000);
                        } while (document.getElementById(prefix));
                        return prefix;
                    };

                    Tooltip.prototype.tip = function () {
                        if (!this.$tip) {
                            this.$tip = $(this.options.template);
                            if (this.$tip.length != 1) {
                                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
                            }
                        }
                        return this.$tip;
                    };

                    Tooltip.prototype.arrow = function () {
                        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
                    };

                    Tooltip.prototype.enable = function () {
                        this.enabled = true;
                    };

                    Tooltip.prototype.disable = function () {
                        this.enabled = false;
                    };

                    Tooltip.prototype.toggleEnabled = function () {
                        this.enabled = !this.enabled;
                    };

                    Tooltip.prototype.toggle = function (e) {
                        var self = this;
                        if (e) {
                            self = $(e.currentTarget).data('bs.' + this.type);
                            if (!self) {
                                self = new this.constructor(e.currentTarget, this.getDelegateOptions());
                                $(e.currentTarget).data('bs.' + this.type, self);
                            }
                        }

                        if (e) {
                            self.inState.click = !self.inState.click;
                            if (self.isInStateTrue()) self.enter(self);else self.leave(self);
                        } else {
                            self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
                        }
                    };

                    Tooltip.prototype.destroy = function () {
                        var that = this;
                        clearTimeout(this.timeout);
                        this.hide(function () {
                            that.$element.off('.' + that.type).removeData('bs.' + that.type);
                            if (that.$tip) {
                                that.$tip.detach();
                            }
                            that.$tip = null;
                            that.$arrow = null;
                            that.$viewport = null;
                            that.$element = null;
                        });
                    };

                    function Plugin(option) {
                        return this.each(function () {
                            var $this = $(this);
                            var data = $this.data('bs.tooltip');
                            var options = (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option;

                            if (!data && /destroy|hide/.test(option)) return;
                            if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
                            if (typeof option == 'string') data[option]();
                        });
                    }

                    var old = $.fn.tooltip;

                    $.fn.tooltip = Plugin;
                    $.fn.tooltip.Constructor = Tooltip;

                    $.fn.tooltip.noConflict = function () {
                        $.fn.tooltip = old;
                        return this;
                    };
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        90: function _(module, exports, __webpack_require__) {
            (function (jQuery) {

                +function ($) {
                    'use strict';

                    function transitionEnd() {
                        var el = document.createElement('bootstrap');

                        var transEndEventNames = {
                            WebkitTransition: 'webkitTransitionEnd',
                            MozTransition: 'transitionend',
                            OTransition: 'oTransitionEnd otransitionend',
                            transition: 'transitionend'
                        };

                        for (var name in transEndEventNames) {
                            if (el.style[name] !== undefined) {
                                return { end: transEndEventNames[name] };
                            }
                        }

                        return false;
                    }

                    $.fn.emulateTransitionEnd = function (duration) {
                        var called = false;
                        var $el = this;
                        $(this).one('bsTransitionEnd', function () {
                            called = true;
                        });
                        var callback = function callback() {
                            if (!called) $($el).trigger($.support.transition.end);
                        };
                        setTimeout(callback, duration);
                        return this;
                    };

                    $(function () {
                        $.support.transition = transitionEnd();

                        if (!$.support.transition) return;

                        $.event.special.bsTransitionEnd = {
                            bindType: $.support.transition.end,
                            delegateType: $.support.transition.end,
                            handle: function handle(e) {
                                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                            }
                        };
                    });
                }(jQuery);
            }).call(exports, __webpack_require__("jquery"));
        },

        91: function _(module, exports) {},

        92: function _(module, exports) {},

        93: function _(module, exports) {

            module.exports = "<template>\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"left-side four columns\" style=\"margin-top: 10%\">\r\n\t\t\t\t<h1>Standalone Document Viewer</h1>\r\n\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h2>Set authorization level</h2>\r\n\t\t\t\t\t<select value.bind=\"selectedAuthLevel\" change.delegate=\"authChange()\">\r\n\t\t\t\t\t    <option value=\"\">None</option>\r\n                        <option repeat.for=\"authLevel of authLevels\" value.bind=\"authLevel\">${authLevel}</option>\r\n                    </select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h2>Upload</h2>\r\n\t\t\t\t\t<input id=\"fileInput\" type=\"file\" multiple=\"multiple\" accept=\"*\" change.delegate=\"fileChange()\" files.two-way=\"selectedFiles\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h2>Document list</h2>\r\n\t\t\t\t    <ul id=\"docList\">\r\n\t\t\t\t        <li repeat.for=\"document of documents\">\r\n\t\t\t\t            <a href=\"#\" class=\"docViewerLink\" data.bind=\"documents\" data-id=\"${document.Id}\" click.delegate=\"showDocumentInViewer(document.Id)\">${document.Name}</a>\r\n\t\t\t\t        </li>\r\n\t\t\t\t    </ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"editForm\" show.bind=\"isEditFormOpened\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<h2>Delete</h2>\r\n\t\t\t\t\t\t<button id=\"deleteContent\" click.delegate=\"deleteDocument()\">Delete content</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<form id=\"permissionsForm\">\r\n\t\t\t\t\t\t<h2>Set permissions</h2>\r\n\t\t\t\t\t    <label repeat.for=\"permissionInfo of permissionInfos\">\r\n\t\t\t\t\t        <input id=\"$index\" type=\"checkbox\" model.bind=\"permissionInfo\" matcher.bind=\"permissionMatcher\" checked.bind=\"selectedPermissions\" name=\"permissions\">\r\n\t\t\t\t\t        <span>${permissionInfo.displayName}</span>\r\n\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t<input type=\"button\" id=\"submitPermissions\" click.delegate=\"submitPermissionInfos()\" value=\"Save\" />\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t<form id=\"watermarkForm\">\r\n\t\t\t\t\t\t<h2>Set watermark properties</h2>\r\n\r\n\t\t\t\t\t\t<label>\r\n                            <span>Text:</span>\r\n                            <input value.bind=\"watermarkText\" type=\"text\"/>\r\n                        </label>\r\n\t\t\t\t\t\t<br/>\r\n\r\n\t\t\t\t\t\t<label>\r\n                            <span>Font name:</span>\r\n                            <br/>\r\n                            <select value.bind=\"selectedFontType\">\r\n                                <option repeat.for=\"fontType of fontTypes\" value.bind=\"fontType\">${fontType}</option>\r\n                            </select>\r\n                        </label>\r\n\r\n\t\t\t\t\t\t<label>\r\n                            <span>Font size:</span>\r\n                            <br/>\r\n                            <select value.bind=\"selectedFontSize\">\r\n                                <option repeat.for=\"fontSize of fontSizes\" value.bind=\"fontSize\">${fontSize}</option>\r\n                            </select>\r\n                        </label>\r\n\r\n\t\t\t\t\t\t<label>\r\n                            <span>Font color:</span>\r\n                            <br/>\r\n                            <select value.bind=\"selectedFontColor\">\r\n                                <option repeat.for=\"fontColor of fontColors\" value.bind=\"fontColor.value\">${fontColor.name}</option>\r\n                            </select>\r\n                        </label>\r\n\r\n\t\t\t\t\t\t<input type=\"submit\" click.delegate=\"submitWatermarkProperties()\" id=\"submitWatermarkProperties\" value=\"Save\" />\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"eight columns\" style=\"margin-top: 10%\">\r\n\t\t\t\t<div id=\"preview-overlay\">\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"viewerContainer\" style=\"width: 100%; height: 800px\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>";
        },

        94: function _(module, exports) {

            module.exports = "<template>\r\n    <ai-dialog>\r\n        <ai-dialog-header>\r\n            <h1>${sr.title}</h1>\r\n            <i class=\"fa fa-close\" click.trigger=\"Close()\"></i>\r\n        </ai-dialog-header>\r\n        <div class=\"container\">\r\n            <form class=\"form-group\" submit.delegate=\"Submit()\">\r\n                <ai-dialog-body>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"radio\">\r\n                            <h4>${sr.pagesTitle}</h4>\r\n                            <label repeat.for=\"page of pages\">\r\n                                <input type=\"radio\" model.bind=\"page\" name=\"pages\" checked.bind=\"$parent.selectedPages\" change.delegate=\"selectedPageChanged()\">${page.name}\r\n                            </label>\r\n                            <div if.bind=\"isPagerangeSelected\">\r\n                                <div class=\"six columns\">\r\n                                    <label>\r\n                                        ${sr.from} <input type=\"number\" value.bind=\"pageFrom\" min=\"1\" max=\"${pageCount}\"/>\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"six columns\">\r\n                                    <label>\r\n                                        ${sr.to} <input type=\"number\" value.bind=\"pageTo\" min=\"1\" max=\"${pageCount}\"/>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"radio\">\r\n                            <h4>${sr.formatTitle}</h4>\r\n                            <label repeat.for=\"format of formats\">\r\n                                <input type=\"radio\" model.bind=\"format\" name=\"pageFormats\" checked.bind=\"$parent.selectedFormat\">${format.name}\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"checkbox\">\r\n                            <h4>${sr.watermarkTitle}</h4>\r\n                            <label><input type=\"checkbox\" checked.bind=\"showWatermark\" checked.one-time=\"showWatermarkDisabled\" disabled.bind=\"showWatermarkDisabled\"}/>${sr.showWatermark}</label>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"checkbox\" id=\"vvExportOptionsRedactionsCheckbox\">\r\n                            <h4 data-localize=\"commonDialog.redactionsSet\">${sr.redactionTitle}</h4>\r\n                            <label><input type=\"checkbox\" checked.bind=\"showRedactions\" checked.one-time=\"showRedactionsDisabled\" disabled.bind=\"showRedactionsDisabled\"/>${sr.showRedactions}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <ul>\r\n                            <li repeat.for=\"error of errors\">${error}</li>\r\n                        </ul>\r\n                    </div>\r\n                </ai-dialog-body>\r\n                <ai-dialog-footer>\r\n                    <div class=\"row\">\r\n                        <div class=\"six columns\">\r\n                            <button click.trigger=\"dialogController.cancel()\">${sr.cancelBtn}</button>\r\n                        </div>\r\n                        <div class=\"six columns\">\r\n                            <button class=\"attention\" type=\"submit\">${sr.submitBtn}</button>\r\n                        </div>\r\n                    </div>\r\n                </ai-dialog-footer>\r\n            </form>\r\n        </div>\r\n    </ai-dialog>\r\n</template>";
        },

        95: function _(module, exports) {

            module.exports = "<template>\r\n    <ai-dialog>\r\n        <ai-dialog-header>\r\n            <h1>${sr.title}</h1>\r\n            <i class=\"fa fa-close\" click.trigger=\"Close()\"></i>\r\n        </ai-dialog-header>\r\n            <ai-dialog-body>\r\n                <div>${sr.doYouWantToSave}</div>\r\n            </ai-dialog-body>\r\n            <ai-dialog-footer>\r\n                <button class=\"save-and-close okButton attention\" click.trigger=\"submit(true)\">${sr.saveBtn}</button>\r\n                <button class=\"discard-and-close attention\" click.trigger=\"submit(false)\">${sr.dontSaveBtn}</button>\r\n                <button class=\"dont-close cancel attention\" click.trigger=\"dialogController.cancel()\">${sr.cancelBtn}</button>\r\n            </ai-dialog-footer>\r\n    </ai-dialog>\r\n</template>";
        },

        97: function _(module, exports) {

            (function (self) {
                'use strict';

                if (self.fetch) {
                    return;
                }

                var support = {
                    searchParams: 'URLSearchParams' in self,
                    iterable: 'Symbol' in self && 'iterator' in Symbol,
                    blob: 'FileReader' in self && 'Blob' in self && function () {
                        try {
                            new Blob();
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }(),
                    formData: 'FormData' in self,
                    arrayBuffer: 'ArrayBuffer' in self
                };

                if (support.arrayBuffer) {
                    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

                    var isDataView = function isDataView(obj) {
                        return obj && DataView.prototype.isPrototypeOf(obj);
                    };

                    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
                        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                    };
                }

                function normalizeName(name) {
                    if (typeof name !== 'string') {
                        name = String(name);
                    }
                    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
                        throw new TypeError('Invalid character in header field name');
                    }
                    return name.toLowerCase();
                }

                function normalizeValue(value) {
                    if (typeof value !== 'string') {
                        value = String(value);
                    }
                    return value;
                }

                function iteratorFor(items) {
                    var iterator = {
                        next: function next() {
                            var value = items.shift();
                            return { done: value === undefined, value: value };
                        }
                    };

                    if (support.iterable) {
                        iterator[Symbol.iterator] = function () {
                            return iterator;
                        };
                    }

                    return iterator;
                }

                function Headers(headers) {
                    this.map = {};

                    if (headers instanceof Headers) {
                        headers.forEach(function (value, name) {
                            this.append(name, value);
                        }, this);
                    } else if (headers) {
                        Object.getOwnPropertyNames(headers).forEach(function (name) {
                            this.append(name, headers[name]);
                        }, this);
                    }
                }

                Headers.prototype.append = function (name, value) {
                    name = normalizeName(name);
                    value = normalizeValue(value);
                    var oldValue = this.map[name];
                    this.map[name] = oldValue ? oldValue + ',' + value : value;
                };

                Headers.prototype['delete'] = function (name) {
                    delete this.map[normalizeName(name)];
                };

                Headers.prototype.get = function (name) {
                    name = normalizeName(name);
                    return this.has(name) ? this.map[name] : null;
                };

                Headers.prototype.has = function (name) {
                    return this.map.hasOwnProperty(normalizeName(name));
                };

                Headers.prototype.set = function (name, value) {
                    this.map[normalizeName(name)] = normalizeValue(value);
                };

                Headers.prototype.forEach = function (callback, thisArg) {
                    for (var name in this.map) {
                        if (this.map.hasOwnProperty(name)) {
                            callback.call(thisArg, this.map[name], name, this);
                        }
                    }
                };

                Headers.prototype.keys = function () {
                    var items = [];
                    this.forEach(function (value, name) {
                        items.push(name);
                    });
                    return iteratorFor(items);
                };

                Headers.prototype.values = function () {
                    var items = [];
                    this.forEach(function (value) {
                        items.push(value);
                    });
                    return iteratorFor(items);
                };

                Headers.prototype.entries = function () {
                    var items = [];
                    this.forEach(function (value, name) {
                        items.push([name, value]);
                    });
                    return iteratorFor(items);
                };

                if (support.iterable) {
                    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
                }

                function consumed(body) {
                    if (body.bodyUsed) {
                        return Promise.reject(new TypeError('Already read'));
                    }
                    body.bodyUsed = true;
                }

                function fileReaderReady(reader) {
                    return new Promise(function (resolve, reject) {
                        reader.onload = function () {
                            resolve(reader.result);
                        };
                        reader.onerror = function () {
                            reject(reader.error);
                        };
                    });
                }

                function readBlobAsArrayBuffer(blob) {
                    var reader = new FileReader();
                    var promise = fileReaderReady(reader);
                    reader.readAsArrayBuffer(blob);
                    return promise;
                }

                function readBlobAsText(blob) {
                    var reader = new FileReader();
                    var promise = fileReaderReady(reader);
                    reader.readAsText(blob);
                    return promise;
                }

                function readArrayBufferAsText(buf) {
                    var view = new Uint8Array(buf);
                    var chars = new Array(view.length);

                    for (var i = 0; i < view.length; i++) {
                        chars[i] = String.fromCharCode(view[i]);
                    }
                    return chars.join('');
                }

                function bufferClone(buf) {
                    if (buf.slice) {
                        return buf.slice(0);
                    } else {
                        var view = new Uint8Array(buf.byteLength);
                        view.set(new Uint8Array(buf));
                        return view.buffer;
                    }
                }

                function Body() {
                    this.bodyUsed = false;

                    this._initBody = function (body) {
                        this._bodyInit = body;
                        if (!body) {
                            this._bodyText = '';
                        } else if (typeof body === 'string') {
                            this._bodyText = body;
                        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                            this._bodyBlob = body;
                        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                            this._bodyFormData = body;
                        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                            this._bodyText = body.toString();
                        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                            this._bodyArrayBuffer = bufferClone(body.buffer);

                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                            this._bodyArrayBuffer = bufferClone(body);
                        } else {
                            throw new Error('unsupported BodyInit type');
                        }

                        if (!this.headers.get('content-type')) {
                            if (typeof body === 'string') {
                                this.headers.set('content-type', 'text/plain;charset=UTF-8');
                            } else if (this._bodyBlob && this._bodyBlob.type) {
                                this.headers.set('content-type', this._bodyBlob.type);
                            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                            }
                        }
                    };

                    if (support.blob) {
                        this.blob = function () {
                            var rejected = consumed(this);
                            if (rejected) {
                                return rejected;
                            }

                            if (this._bodyBlob) {
                                return Promise.resolve(this._bodyBlob);
                            } else if (this._bodyArrayBuffer) {
                                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            } else if (this._bodyFormData) {
                                throw new Error('could not read FormData body as blob');
                            } else {
                                return Promise.resolve(new Blob([this._bodyText]));
                            }
                        };

                        this.arrayBuffer = function () {
                            if (this._bodyArrayBuffer) {
                                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                            } else {
                                return this.blob().then(readBlobAsArrayBuffer);
                            }
                        };
                    }

                    this.text = function () {
                        var rejected = consumed(this);
                        if (rejected) {
                            return rejected;
                        }

                        if (this._bodyBlob) {
                            return readBlobAsText(this._bodyBlob);
                        } else if (this._bodyArrayBuffer) {
                            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                        } else if (this._bodyFormData) {
                            throw new Error('could not read FormData body as text');
                        } else {
                            return Promise.resolve(this._bodyText);
                        }
                    };

                    if (support.formData) {
                        this.formData = function () {
                            return this.text().then(decode);
                        };
                    }

                    this.json = function () {
                        return this.text().then(JSON.parse);
                    };

                    return this;
                }

                var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

                function normalizeMethod(method) {
                    var upcased = method.toUpperCase();
                    return methods.indexOf(upcased) > -1 ? upcased : method;
                }

                function Request(input, options) {
                    options = options || {};
                    var body = options.body;

                    if (typeof input === 'string') {
                        this.url = input;
                    } else {
                        if (input.bodyUsed) {
                            throw new TypeError('Already read');
                        }
                        this.url = input.url;
                        this.credentials = input.credentials;
                        if (!options.headers) {
                            this.headers = new Headers(input.headers);
                        }
                        this.method = input.method;
                        this.mode = input.mode;
                        if (!body && input._bodyInit != null) {
                            body = input._bodyInit;
                            input.bodyUsed = true;
                        }
                    }

                    this.credentials = options.credentials || this.credentials || 'omit';
                    if (options.headers || !this.headers) {
                        this.headers = new Headers(options.headers);
                    }
                    this.method = normalizeMethod(options.method || this.method || 'GET');
                    this.mode = options.mode || this.mode || null;
                    this.referrer = null;

                    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                        throw new TypeError('Body not allowed for GET or HEAD requests');
                    }
                    this._initBody(body);
                }

                Request.prototype.clone = function () {
                    return new Request(this, { body: this._bodyInit });
                };

                function decode(body) {
                    var form = new FormData();
                    body.trim().split('&').forEach(function (bytes) {
                        if (bytes) {
                            var split = bytes.split('=');
                            var name = split.shift().replace(/\+/g, ' ');
                            var value = split.join('=').replace(/\+/g, ' ');
                            form.append(decodeURIComponent(name), decodeURIComponent(value));
                        }
                    });
                    return form;
                }

                function parseHeaders(rawHeaders) {
                    var headers = new Headers();
                    rawHeaders.split('\r\n').forEach(function (line) {
                        var parts = line.split(':');
                        var key = parts.shift().trim();
                        if (key) {
                            var value = parts.join(':').trim();
                            headers.append(key, value);
                        }
                    });
                    return headers;
                }

                Body.call(Request.prototype);

                function Response(bodyInit, options) {
                    if (!options) {
                        options = {};
                    }

                    this.type = 'default';
                    this.status = 'status' in options ? options.status : 200;
                    this.ok = this.status >= 200 && this.status < 300;
                    this.statusText = 'statusText' in options ? options.statusText : 'OK';
                    this.headers = new Headers(options.headers);
                    this.url = options.url || '';
                    this._initBody(bodyInit);
                }

                Body.call(Response.prototype);

                Response.prototype.clone = function () {
                    return new Response(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new Headers(this.headers),
                        url: this.url
                    });
                };

                Response.error = function () {
                    var response = new Response(null, { status: 0, statusText: '' });
                    response.type = 'error';
                    return response;
                };

                var redirectStatuses = [301, 302, 303, 307, 308];

                Response.redirect = function (url, status) {
                    if (redirectStatuses.indexOf(status) === -1) {
                        throw new RangeError('Invalid status code');
                    }

                    return new Response(null, { status: status, headers: { location: url } });
                };

                self.Headers = Headers;
                self.Request = Request;
                self.Response = Response;

                self.fetch = function (input, init) {
                    return new Promise(function (resolve, reject) {
                        var request = new Request(input, init);
                        var xhr = new XMLHttpRequest();

                        xhr.onload = function () {
                            var options = {
                                status: xhr.status,
                                statusText: xhr.statusText,
                                headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                            };
                            options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                            var body = 'response' in xhr ? xhr.response : xhr.responseText;
                            resolve(new Response(body, options));
                        };

                        xhr.onerror = function () {
                            reject(new TypeError('Network request failed'));
                        };

                        xhr.ontimeout = function () {
                            reject(new TypeError('Network request failed'));
                        };

                        xhr.open(request.method, request.url, true);

                        if (request.credentials === 'include') {
                            xhr.withCredentials = true;
                        }

                        if ('responseType' in xhr && support.blob) {
                            xhr.responseType = 'blob';
                        }

                        request.headers.forEach(function (value, name) {
                            xhr.setRequestHeader(name, value);
                        });

                        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
                    });
                };
                self.fetch.polyfill = true;
            })(typeof self !== 'undefined' ? self : this);
        },

        98: function _(module, exports, __webpack_require__) {

            var map = {
                "./app": 77,
                "./app.html": 93,
                "./aurelia-bootstrapper-webpack": "aurelia-bootstrapper-webpack",
                "./aurelia-dialog": "aurelia-dialog",
                "./aurelia-dialog/ai-dialog": 21,
                "./aurelia-dialog/ai-dialog-body": 18,
                "./aurelia-dialog/ai-dialog-body.js": 18,
                "./aurelia-dialog/ai-dialog-footer": 19,
                "./aurelia-dialog/ai-dialog-footer.js": 19,
                "./aurelia-dialog/ai-dialog-header": 20,
                "./aurelia-dialog/ai-dialog-header.js": 20,
                "./aurelia-dialog/ai-dialog.js": 21,
                "./aurelia-dialog/attach-focus": 22,
                "./aurelia-dialog/attach-focus.js": 22,
                "./aurelia-event-aggregator": "aurelia-event-aggregator",
                "./aurelia-fetch-client": "aurelia-fetch-client",
                "./aurelia-framework": "aurelia-framework",
                "./aurelia-history-browser": "aurelia-history-browser",
                "./aurelia-loader-webpack": "aurelia-loader-webpack",
                "./aurelia-logging-console": "aurelia-logging-console",
                "./aurelia-pal-browser": "aurelia-pal-browser",
                "./aurelia-polyfills": "aurelia-polyfills",
                "./aurelia-route-recognizer": "aurelia-route-recognizer",
                "./aurelia-router": "aurelia-router",
                "./aurelia-templating-binding": "aurelia-templating-binding",
                "./aurelia-templating-resources": "aurelia-templating-resources",
                "./aurelia-templating-resources/attr-binding-behavior": 24,
                "./aurelia-templating-resources/attr-binding-behavior.js": 24,
                "./aurelia-templating-resources/binding-mode-behaviors": 26,
                "./aurelia-templating-resources/binding-mode-behaviors.js": 26,
                "./aurelia-templating-resources/compose": 27,
                "./aurelia-templating-resources/compose.js": 27,
                "./aurelia-templating-resources/debounce-binding-behavior": 28,
                "./aurelia-templating-resources/debounce-binding-behavior.js": 28,
                "./aurelia-templating-resources/focus": 29,
                "./aurelia-templating-resources/focus.js": 29,
                "./aurelia-templating-resources/hide": 30,
                "./aurelia-templating-resources/hide.js": 30,
                "./aurelia-templating-resources/if": 31,
                "./aurelia-templating-resources/if.js": 31,
                "./aurelia-templating-resources/repeat": 32,
                "./aurelia-templating-resources/repeat.js": 32,
                "./aurelia-templating-resources/replaceable": 33,
                "./aurelia-templating-resources/replaceable.js": 33,
                "./aurelia-templating-resources/sanitize-html": 34,
                "./aurelia-templating-resources/sanitize-html.js": 34,
                "./aurelia-templating-resources/show": 35,
                "./aurelia-templating-resources/show.js": 35,
                "./aurelia-templating-resources/signal-binding-behavior": 36,
                "./aurelia-templating-resources/signal-binding-behavior.js": 36,
                "./aurelia-templating-resources/throttle-binding-behavior": 37,
                "./aurelia-templating-resources/throttle-binding-behavior.js": 37,
                "./aurelia-templating-resources/update-trigger-binding-behavior": 38,
                "./aurelia-templating-resources/update-trigger-binding-behavior.js": 38,
                "./aurelia-templating-resources/with": 39,
                "./aurelia-templating-resources/with.js": 39,
                "./aurelia-templating-router": "aurelia-templating-router",
                "./aurelia-templating-router/route-href": 40,
                "./aurelia-templating-router/route-href.js": 40,
                "./aurelia-templating-router/router-view": 41,
                "./aurelia-templating-router/router-view.js": 41,
                "./bluebird": "bluebird",
                "./bootstrap": "bootstrap",
                "./core/components/_base": 15,
                "./core/components/_util": 10,
                "./core/components/dropdown/Dropdown": 65,
                "./core/components/dropdown/Dropdown.tpl.html": 62,
                "./core/components/modal/Modal": 66,
                "./core/components/modal/Modal.tpl.html": 63,
                "./core/components/toolbar/Toolbar": 67,
                "./core/components/toolbar/Toolbar.tpl.html": 64,
                "./core/docviewer": 68,
                "./core/jquery.throttle": 69,
                "./core/microtemplating": 16,
                "./demofiles/Authorization": 57,
                "./isomorphic-fetch": "isomorphic-fetch",
                "./jquery": "jquery",
                "./main": 78,
                "./transcend/components/modal/exportModal": 58,
                "./transcend/components/modal/exportModal.html": 94,
                "./transcend/components/modal/saveModal": 59,
                "./transcend/components/modal/saveModal.html": 95,
                "./transcend/transcend-endpoints": 42,
                "./transcend/transcend-printer": 60,
                "./transcend/transcend-viewer": 61
            };
            function webpackContext(req) {
                return __webpack_require__(webpackContextResolve(req));
            };
            function webpackContextResolve(req) {
                var id = map[req];
                if (!(id + 1)) throw new Error("Cannot find module '" + req + "'.");
                return id;
            };
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = 98;
        },

        99: function _(module, exports) {},

        "aurelia-dialog": function aureliaDialog(module, exports, __webpack_require__) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DialogResult = exports.DialogController = exports.DialogService = exports.DialogConfiguration = exports.AttachFocus = exports.AiDialogFooter = exports.AiDialogBody = exports.AiDialogHeader = exports.AiDialog = undefined;

            var _aiDialog = __webpack_require__(21);

            Object.defineProperty(exports, 'AiDialog', {
                enumerable: true,
                get: function get() {
                    return _aiDialog.AiDialog;
                }
            });

            var _aiDialogHeader = __webpack_require__(20);

            Object.defineProperty(exports, 'AiDialogHeader', {
                enumerable: true,
                get: function get() {
                    return _aiDialogHeader.AiDialogHeader;
                }
            });

            var _aiDialogBody = __webpack_require__(18);

            Object.defineProperty(exports, 'AiDialogBody', {
                enumerable: true,
                get: function get() {
                    return _aiDialogBody.AiDialogBody;
                }
            });

            var _aiDialogFooter = __webpack_require__(19);

            Object.defineProperty(exports, 'AiDialogFooter', {
                enumerable: true,
                get: function get() {
                    return _aiDialogFooter.AiDialogFooter;
                }
            });

            var _attachFocus = __webpack_require__(22);

            Object.defineProperty(exports, 'AttachFocus', {
                enumerable: true,
                get: function get() {
                    return _attachFocus.AttachFocus;
                }
            });
            exports.configure = configure;

            var _dialogConfiguration = __webpack_require__(70);

            Object.defineProperty(exports, 'DialogConfiguration', {
                enumerable: true,
                get: function get() {
                    return _dialogConfiguration.DialogConfiguration;
                }
            });

            var _dialogService = __webpack_require__(72);

            Object.defineProperty(exports, 'DialogService', {
                enumerable: true,
                get: function get() {
                    return _dialogService.DialogService;
                }
            });

            var _dialogController = __webpack_require__(12);

            Object.defineProperty(exports, 'DialogController', {
                enumerable: true,
                get: function get() {
                    return _dialogController.DialogController;
                }
            });

            var _dialogResult = __webpack_require__(23);

            Object.defineProperty(exports, 'DialogResult', {
                enumerable: true,
                get: function get() {
                    return _dialogResult.DialogResult;
                }
            });
            function configure(aurelia, callback) {
                var config = new _dialogConfiguration.DialogConfiguration(aurelia);

                if (typeof callback === 'function') {
                    callback(config);
                } else {
                    config.useDefaults();
                }

                config._apply();
            }
        },

        "aurelia-fetch-client": function aureliaFetchClient(module, exports) {

            "use strict";
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            exports.json = json;

            function json(body) {
                return new Blob([JSON.stringify(body)], { type: 'application/json' });
            }

            var HttpClientConfiguration = exports.HttpClientConfiguration = function () {
                function HttpClientConfiguration() {

                    this.baseUrl = '';
                    this.defaults = {};
                    this.interceptors = [];
                }

                HttpClientConfiguration.prototype.withBaseUrl = function withBaseUrl(baseUrl) {
                    this.baseUrl = baseUrl;
                    return this;
                };

                HttpClientConfiguration.prototype.withDefaults = function withDefaults(defaults) {
                    this.defaults = defaults;
                    return this;
                };

                HttpClientConfiguration.prototype.withInterceptor = function withInterceptor(interceptor) {
                    this.interceptors.push(interceptor);
                    return this;
                };

                HttpClientConfiguration.prototype.useStandardConfiguration = function useStandardConfiguration() {
                    var standardConfig = { credentials: 'same-origin' };
                    Object.assign(this.defaults, standardConfig, this.defaults);
                    return this.rejectErrorResponses();
                };

                HttpClientConfiguration.prototype.rejectErrorResponses = function rejectErrorResponses() {
                    return this.withInterceptor({ response: rejectOnError });
                };

                return HttpClientConfiguration;
            }();

            function rejectOnError(response) {
                if (!response.ok) {
                    throw response;
                }

                return response;
            }

            var HttpClient = exports.HttpClient = function () {
                function HttpClient() {

                    this.activeRequestCount = 0;
                    this.isRequesting = false;
                    this.isConfigured = false;
                    this.baseUrl = '';
                    this.defaults = null;
                    this.interceptors = [];

                    if (typeof fetch === 'undefined') {
                        throw new Error('HttpClient requires a Fetch API implementation, but the current environment doesn\'t support it. You may need to load a polyfill such as https://github.com/github/fetch.');
                    }
                }

                HttpClient.prototype.configure = function configure(config) {
                    var normalizedConfig = void 0;

                    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
                        normalizedConfig = { defaults: config };
                    } else if (typeof config === 'function') {
                        normalizedConfig = new HttpClientConfiguration();
                        normalizedConfig.baseUrl = this.baseUrl;
                        normalizedConfig.defaults = Object.assign({}, this.defaults);
                        normalizedConfig.interceptors = this.interceptors;

                        var c = config(normalizedConfig);
                        if (HttpClientConfiguration.prototype.isPrototypeOf(c)) {
                            normalizedConfig = c;
                        }
                    } else {
                        throw new Error('invalid config');
                    }

                    var defaults = normalizedConfig.defaults;
                    if (defaults && Headers.prototype.isPrototypeOf(defaults.headers)) {
                        throw new Error('Default headers must be a plain object.');
                    }

                    this.baseUrl = normalizedConfig.baseUrl;
                    this.defaults = defaults;
                    this.interceptors = normalizedConfig.interceptors || [];
                    this.isConfigured = true;

                    return this;
                };

                HttpClient.prototype.fetch = function (_fetch) {
                    function fetch(_x, _x2) {
                        return _fetch.apply(this, arguments);
                    }

                    fetch.toString = function () {
                        return _fetch.toString();
                    };

                    return fetch;
                }(function (input, init) {
                    var _this = this;

                    trackRequestStart.call(this);

                    var request = Promise.resolve().then(function () {
                        return buildRequest.call(_this, input, init, _this.defaults);
                    });
                    var promise = processRequest(request, this.interceptors).then(function (result) {
                        var response = null;

                        if (Response.prototype.isPrototypeOf(result)) {
                            response = result;
                        } else if (Request.prototype.isPrototypeOf(result)) {
                            request = Promise.resolve(result);
                            response = fetch(result);
                        } else {
                            throw new Error('An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [' + result + ']');
                        }

                        return request.then(function (_request) {
                            return processResponse(response, _this.interceptors, _request);
                        });
                    });

                    return trackRequestEndWith.call(this, promise);
                });

                return HttpClient;
            }();

            var absoluteUrlRegexp = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

            function trackRequestStart() {
                this.isRequesting = !!++this.activeRequestCount;
            }

            function trackRequestEnd() {
                this.isRequesting = !! --this.activeRequestCount;
            }

            function trackRequestEndWith(promise) {
                var handle = trackRequestEnd.bind(this);
                promise.then(handle, handle);
                return promise;
            }

            function parseHeaderValues(headers) {
                var parsedHeaders = {};
                for (var name in headers || {}) {
                    if (headers.hasOwnProperty(name)) {
                        parsedHeaders[name] = typeof headers[name] === 'function' ? headers[name]() : headers[name];
                    }
                }
                return parsedHeaders;
            }

            function buildRequest(input, init) {
                var defaults = this.defaults || {};
                var request = void 0;
                var body = void 0;
                var requestContentType = void 0;

                var parsedDefaultHeaders = parseHeaderValues(defaults.headers);
                if (Request.prototype.isPrototypeOf(input)) {
                    request = input;
                    requestContentType = new Headers(request.headers).get('Content-Type');
                } else {
                    init || (init = {});
                    body = init.body;
                    var bodyObj = body ? { body: body } : null;
                    var requestInit = Object.assign({}, defaults, { headers: {} }, init, bodyObj);
                    requestContentType = new Headers(requestInit.headers).get('Content-Type');
                    request = new Request(getRequestUrl(this.baseUrl, input), requestInit);
                }
                if (!requestContentType && new Headers(parsedDefaultHeaders).has('content-type')) {
                    request.headers.set('Content-Type', new Headers(parsedDefaultHeaders).get('content-type'));
                }
                setDefaultHeaders(request.headers, parsedDefaultHeaders);
                if (body && Blob.prototype.isPrototypeOf(body) && body.type) {
                    request.headers.set('Content-Type', body.type);
                }
                return request;
            }

            function getRequestUrl(baseUrl, url) {
                if (absoluteUrlRegexp.test(url)) {
                    return url;
                }

                return (baseUrl || '') + url;
            }

            function setDefaultHeaders(headers, defaultHeaders) {
                for (var name in defaultHeaders || {}) {
                    if (defaultHeaders.hasOwnProperty(name) && !headers.has(name)) {
                        headers.set(name, defaultHeaders[name]);
                    }
                }
            }

            function processRequest(request, interceptors) {
                return applyInterceptors(request, interceptors, 'request', 'requestError');
            }

            function processResponse(response, interceptors, request) {
                return applyInterceptors(response, interceptors, 'response', 'responseError', request);
            }

            function applyInterceptors(input, interceptors, successName, errorName) {
                for (var _len = arguments.length, interceptorArgs = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
                    interceptorArgs[_key - 4] = arguments[_key];
                }

                return (interceptors || []).reduce(function (chain, interceptor) {
                    var successHandler = interceptor[successName];
                    var errorHandler = interceptor[errorName];

                    return chain.then(successHandler && function (value) {
                        return successHandler.call.apply(successHandler, [interceptor, value].concat(interceptorArgs));
                    } || identity, errorHandler && function (reason) {
                        return errorHandler.call.apply(errorHandler, [interceptor, reason].concat(interceptorArgs));
                    } || thrower);
                }, Promise.resolve(input));
            }

            function identity(x) {
                return x;
            }

            function thrower(x) {
                throw x;
            }
        },

        "bluebird": function bluebird(module, exports, __webpack_require__) {
            (function (process, global, setImmediate) {
                /* @preserve
                * The MIT License (MIT)
                * 
                * Copyright (c) 2013-2015 Petka Antonov
                * 
                * Permission is hereby granted, free of charge, to any person obtaining a copy
                * of this software and associated documentation files (the "Software"), to deal
                * in the Software without restriction, including without limitation the rights
                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                * copies of the Software, and to permit persons to whom the Software is
                * furnished to do so, subject to the following conditions:
                * 
                * The above copyright notice and this permission notice shall be included in
                * all copies or substantial portions of the Software.
                * 
                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                * THE SOFTWARE.
                * 
                */
                !function (e) {
                    if (true) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
                        var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.Promise = e();
                    }
                }(function () {
                    var define, module, exports;return function e(t, n, r) {
                        function s(o, u) {
                            if (!n[o]) {
                                if (!t[o]) {
                                    var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                                    var n = t[o][1][e];return s(n ? n : e);
                                }, l, l.exports, e, t, n, r);
                            }return n[o].exports;
                        }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) {
                            s(r[o]);
                        }return s;
                    }({ 1: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise) {
                                var SomePromiseArray = Promise._SomePromiseArray;
                                function any(promises) {
                                    var ret = new SomePromiseArray(promises);
                                    var promise = ret.promise();
                                    ret.setHowMany(1);
                                    ret.setUnwrap();
                                    ret.init();
                                    return promise;
                                }

                                Promise.any = function (promises) {
                                    return any(promises);
                                };

                                Promise.prototype.any = function () {
                                    return any(this);
                                };
                            };
                        }, {}], 2: [function (_dereq_, module, exports) {
                            "use strict";

                            var firstLineError;
                            try {
                                throw new Error();
                            } catch (e) {
                                firstLineError = e;
                            }
                            var schedule = _dereq_("./schedule");
                            var Queue = _dereq_("./queue");
                            var util = _dereq_("./util");

                            function Async() {
                                this._customScheduler = false;
                                this._isTickUsed = false;
                                this._lateQueue = new Queue(16);
                                this._normalQueue = new Queue(16);
                                this._haveDrainedQueues = false;
                                this._trampolineEnabled = true;
                                var self = this;
                                this.drainQueues = function () {
                                    self._drainQueues();
                                };
                                this._schedule = schedule;
                            }

                            Async.prototype.setScheduler = function (fn) {
                                var prev = this._schedule;
                                this._schedule = fn;
                                this._customScheduler = true;
                                return prev;
                            };

                            Async.prototype.hasCustomScheduler = function () {
                                return this._customScheduler;
                            };

                            Async.prototype.enableTrampoline = function () {
                                this._trampolineEnabled = true;
                            };

                            Async.prototype.disableTrampolineIfNecessary = function () {
                                if (util.hasDevTools) {
                                    this._trampolineEnabled = false;
                                }
                            };

                            Async.prototype.haveItemsQueued = function () {
                                return this._isTickUsed || this._haveDrainedQueues;
                            };

                            Async.prototype.fatalError = function (e, isNode) {
                                if (isNode) {
                                    process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n");
                                    process.exit(2);
                                } else {
                                    this.throwLater(e);
                                }
                            };

                            Async.prototype.throwLater = function (fn, arg) {
                                if (arguments.length === 1) {
                                    arg = fn;
                                    fn = function fn() {
                                        throw arg;
                                    };
                                }
                                if (typeof setTimeout !== "undefined") {
                                    setTimeout(function () {
                                        fn(arg);
                                    }, 0);
                                } else try {
                                    this._schedule(function () {
                                        fn(arg);
                                    });
                                } catch (e) {
                                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
                                }
                            };

                            function AsyncInvokeLater(fn, receiver, arg) {
                                this._lateQueue.push(fn, receiver, arg);
                                this._queueTick();
                            }

                            function AsyncInvoke(fn, receiver, arg) {
                                this._normalQueue.push(fn, receiver, arg);
                                this._queueTick();
                            }

                            function AsyncSettlePromises(promise) {
                                this._normalQueue._pushOne(promise);
                                this._queueTick();
                            }

                            if (!util.hasDevTools) {
                                Async.prototype.invokeLater = AsyncInvokeLater;
                                Async.prototype.invoke = AsyncInvoke;
                                Async.prototype.settlePromises = AsyncSettlePromises;
                            } else {
                                Async.prototype.invokeLater = function (fn, receiver, arg) {
                                    if (this._trampolineEnabled) {
                                        AsyncInvokeLater.call(this, fn, receiver, arg);
                                    } else {
                                        this._schedule(function () {
                                            setTimeout(function () {
                                                fn.call(receiver, arg);
                                            }, 100);
                                        });
                                    }
                                };

                                Async.prototype.invoke = function (fn, receiver, arg) {
                                    if (this._trampolineEnabled) {
                                        AsyncInvoke.call(this, fn, receiver, arg);
                                    } else {
                                        this._schedule(function () {
                                            fn.call(receiver, arg);
                                        });
                                    }
                                };

                                Async.prototype.settlePromises = function (promise) {
                                    if (this._trampolineEnabled) {
                                        AsyncSettlePromises.call(this, promise);
                                    } else {
                                        this._schedule(function () {
                                            promise._settlePromises();
                                        });
                                    }
                                };
                            }

                            Async.prototype.invokeFirst = function (fn, receiver, arg) {
                                this._normalQueue.unshift(fn, receiver, arg);
                                this._queueTick();
                            };

                            Async.prototype._drainQueue = function (queue) {
                                while (queue.length() > 0) {
                                    var fn = queue.shift();
                                    if (typeof fn !== "function") {
                                        fn._settlePromises();
                                        continue;
                                    }
                                    var receiver = queue.shift();
                                    var arg = queue.shift();
                                    fn.call(receiver, arg);
                                }
                            };

                            Async.prototype._drainQueues = function () {
                                this._drainQueue(this._normalQueue);
                                this._reset();
                                this._haveDrainedQueues = true;
                                this._drainQueue(this._lateQueue);
                            };

                            Async.prototype._queueTick = function () {
                                if (!this._isTickUsed) {
                                    this._isTickUsed = true;
                                    this._schedule(this.drainQueues);
                                }
                            };

                            Async.prototype._reset = function () {
                                this._isTickUsed = false;
                            };

                            module.exports = Async;
                            module.exports.firstLineError = firstLineError;
                        }, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL, tryConvertToPromise, debug) {
                                var calledBind = false;
                                var rejectThis = function rejectThis(_, e) {
                                    this._reject(e);
                                };

                                var targetRejected = function targetRejected(e, context) {
                                    context.promiseRejectionQueued = true;
                                    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
                                };

                                var bindingResolved = function bindingResolved(thisArg, context) {
                                    if ((this._bitField & 50397184) === 0) {
                                        this._resolveCallback(context.target);
                                    }
                                };

                                var bindingRejected = function bindingRejected(e, context) {
                                    if (!context.promiseRejectionQueued) this._reject(e);
                                };

                                Promise.prototype.bind = function (thisArg) {
                                    if (!calledBind) {
                                        calledBind = true;
                                        Promise.prototype._propagateFrom = debug.propagateFromFunction();
                                        Promise.prototype._boundValue = debug.boundValueFunction();
                                    }
                                    var maybePromise = tryConvertToPromise(thisArg);
                                    var ret = new Promise(INTERNAL);
                                    ret._propagateFrom(this, 1);
                                    var target = this._target();
                                    ret._setBoundTo(maybePromise);
                                    if (maybePromise instanceof Promise) {
                                        var context = {
                                            promiseRejectionQueued: false,
                                            promise: ret,
                                            target: target,
                                            bindingPromise: maybePromise
                                        };
                                        target._then(INTERNAL, targetRejected, undefined, ret, context);
                                        maybePromise._then(bindingResolved, bindingRejected, undefined, ret, context);
                                        ret._setOnCancel(maybePromise);
                                    } else {
                                        ret._resolveCallback(target);
                                    }
                                    return ret;
                                };

                                Promise.prototype._setBoundTo = function (obj) {
                                    if (obj !== undefined) {
                                        this._bitField = this._bitField | 2097152;
                                        this._boundTo = obj;
                                    } else {
                                        this._bitField = this._bitField & ~2097152;
                                    }
                                };

                                Promise.prototype._isBound = function () {
                                    return (this._bitField & 2097152) === 2097152;
                                };

                                Promise.bind = function (thisArg, value) {
                                    return Promise.resolve(value).bind(thisArg);
                                };
                            };
                        }, {}], 4: [function (_dereq_, module, exports) {
                            "use strict";

                            var old;
                            if (typeof Promise !== "undefined") old = Promise;
                            function noConflict() {
                                try {
                                    if (Promise === bluebird) Promise = old;
                                } catch (e) {}
                                return bluebird;
                            }
                            var bluebird = _dereq_("./promise")();
                            bluebird.noConflict = noConflict;
                            module.exports = bluebird;
                        }, { "./promise": 22 }], 5: [function (_dereq_, module, exports) {
                            "use strict";

                            var cr = Object.create;
                            if (cr) {
                                var callerCache = cr(null);
                                var getterCache = cr(null);
                                callerCache[" size"] = getterCache[" size"] = 0;
                            }

                            module.exports = function (Promise) {
                                var util = _dereq_("./util");
                                var canEvaluate = util.canEvaluate;
                                var isIdentifier = util.isIdentifier;

                                var getMethodCaller;
                                var getGetter;
                                if (false) {
                                    var makeMethodCaller = function makeMethodCaller(methodName) {
                                        return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
                                    };

                                    var makeGetter = function makeGetter(propertyName) {
                                        return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
                                    };

                                    var getCompiled = function getCompiled(name, compiler, cache) {
                                        var ret = cache[name];
                                        if (typeof ret !== "function") {
                                            if (!isIdentifier(name)) {
                                                return null;
                                            }
                                            ret = compiler(name);
                                            cache[name] = ret;
                                            cache[" size"]++;
                                            if (cache[" size"] > 512) {
                                                var keys = Object.keys(cache);
                                                for (var i = 0; i < 256; ++i) {
                                                    delete cache[keys[i]];
                                                }cache[" size"] = keys.length - 256;
                                            }
                                        }
                                        return ret;
                                    };

                                    getMethodCaller = function getMethodCaller(name) {
                                        return getCompiled(name, makeMethodCaller, callerCache);
                                    };

                                    getGetter = function getGetter(name) {
                                        return getCompiled(name, makeGetter, getterCache);
                                    };
                                }

                                function ensureMethod(obj, methodName) {
                                    var fn;
                                    if (obj != null) fn = obj[methodName];
                                    if (typeof fn !== "function") {
                                        var message = "Object " + util.classString(obj) + " has no method '" + util.toString(methodName) + "'";
                                        throw new Promise.TypeError(message);
                                    }
                                    return fn;
                                }

                                function caller(obj) {
                                    var methodName = this.pop();
                                    var fn = ensureMethod(obj, methodName);
                                    return fn.apply(obj, this);
                                }
                                Promise.prototype.call = function (methodName) {
                                    var args = [].slice.call(arguments, 1);;
                                    if (false) {
                                        if (canEvaluate) {
                                            var maybeCaller = getMethodCaller(methodName);
                                            if (maybeCaller !== null) {
                                                return this._then(maybeCaller, undefined, undefined, args, undefined);
                                            }
                                        }
                                    }
                                    args.push(methodName);
                                    return this._then(caller, undefined, undefined, args, undefined);
                                };

                                function namedGetter(obj) {
                                    return obj[this];
                                }
                                function indexedGetter(obj) {
                                    var index = +this;
                                    if (index < 0) index = Math.max(0, index + obj.length);
                                    return obj[index];
                                }
                                Promise.prototype.get = function (propertyName) {
                                    var isIndex = typeof propertyName === "number";
                                    var getter;
                                    if (!isIndex) {
                                        if (canEvaluate) {
                                            var maybeGetter = getGetter(propertyName);
                                            getter = maybeGetter !== null ? maybeGetter : namedGetter;
                                        } else {
                                            getter = namedGetter;
                                        }
                                    } else {
                                        getter = indexedGetter;
                                    }
                                    return this._then(getter, undefined, undefined, propertyName, undefined);
                                };
                            };
                        }, { "./util": 36 }], 6: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, PromiseArray, apiRejection, debug) {
                                var util = _dereq_("./util");
                                var tryCatch = util.tryCatch;
                                var errorObj = util.errorObj;
                                var async = Promise._async;

                                Promise.prototype["break"] = Promise.prototype.cancel = function () {
                                    if (!debug.cancellation()) return this._warn("cancellation is disabled");

                                    var promise = this;
                                    var child = promise;
                                    while (promise._isCancellable()) {
                                        if (!promise._cancelBy(child)) {
                                            if (child._isFollowing()) {
                                                child._followee().cancel();
                                            } else {
                                                child._cancelBranched();
                                            }
                                            break;
                                        }

                                        var parent = promise._cancellationParent;
                                        if (parent == null || !parent._isCancellable()) {
                                            if (promise._isFollowing()) {
                                                promise._followee().cancel();
                                            } else {
                                                promise._cancelBranched();
                                            }
                                            break;
                                        } else {
                                            if (promise._isFollowing()) promise._followee().cancel();
                                            promise._setWillBeCancelled();
                                            child = promise;
                                            promise = parent;
                                        }
                                    }
                                };

                                Promise.prototype._branchHasCancelled = function () {
                                    this._branchesRemainingToCancel--;
                                };

                                Promise.prototype._enoughBranchesHaveCancelled = function () {
                                    return this._branchesRemainingToCancel === undefined || this._branchesRemainingToCancel <= 0;
                                };

                                Promise.prototype._cancelBy = function (canceller) {
                                    if (canceller === this) {
                                        this._branchesRemainingToCancel = 0;
                                        this._invokeOnCancel();
                                        return true;
                                    } else {
                                        this._branchHasCancelled();
                                        if (this._enoughBranchesHaveCancelled()) {
                                            this._invokeOnCancel();
                                            return true;
                                        }
                                    }
                                    return false;
                                };

                                Promise.prototype._cancelBranched = function () {
                                    if (this._enoughBranchesHaveCancelled()) {
                                        this._cancel();
                                    }
                                };

                                Promise.prototype._cancel = function () {
                                    if (!this._isCancellable()) return;
                                    this._setCancelled();
                                    async.invoke(this._cancelPromises, this, undefined);
                                };

                                Promise.prototype._cancelPromises = function () {
                                    if (this._length() > 0) this._settlePromises();
                                };

                                Promise.prototype._unsetOnCancel = function () {
                                    this._onCancelField = undefined;
                                };

                                Promise.prototype._isCancellable = function () {
                                    return this.isPending() && !this._isCancelled();
                                };

                                Promise.prototype.isCancellable = function () {
                                    return this.isPending() && !this.isCancelled();
                                };

                                Promise.prototype._doInvokeOnCancel = function (onCancelCallback, internalOnly) {
                                    if (util.isArray(onCancelCallback)) {
                                        for (var i = 0; i < onCancelCallback.length; ++i) {
                                            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
                                        }
                                    } else if (onCancelCallback !== undefined) {
                                        if (typeof onCancelCallback === "function") {
                                            if (!internalOnly) {
                                                var e = tryCatch(onCancelCallback).call(this._boundValue());
                                                if (e === errorObj) {
                                                    this._attachExtraTrace(e.e);
                                                    async.throwLater(e.e);
                                                }
                                            }
                                        } else {
                                            onCancelCallback._resultCancelled(this);
                                        }
                                    }
                                };

                                Promise.prototype._invokeOnCancel = function () {
                                    var onCancelCallback = this._onCancel();
                                    this._unsetOnCancel();
                                    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
                                };

                                Promise.prototype._invokeInternalOnCancel = function () {
                                    if (this._isCancellable()) {
                                        this._doInvokeOnCancel(this._onCancel(), true);
                                        this._unsetOnCancel();
                                    }
                                };

                                Promise.prototype._resultCancelled = function () {
                                    this.cancel();
                                };
                            };
                        }, { "./util": 36 }], 7: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (NEXT_FILTER) {
                                var util = _dereq_("./util");
                                var getKeys = _dereq_("./es5").keys;
                                var tryCatch = util.tryCatch;
                                var errorObj = util.errorObj;

                                function catchFilter(instances, cb, promise) {
                                    return function (e) {
                                        var boundTo = promise._boundValue();
                                        predicateLoop: for (var i = 0; i < instances.length; ++i) {
                                            var item = instances[i];

                                            if (item === Error || item != null && item.prototype instanceof Error) {
                                                if (e instanceof item) {
                                                    return tryCatch(cb).call(boundTo, e);
                                                }
                                            } else if (typeof item === "function") {
                                                var matchesPredicate = tryCatch(item).call(boundTo, e);
                                                if (matchesPredicate === errorObj) {
                                                    return matchesPredicate;
                                                } else if (matchesPredicate) {
                                                    return tryCatch(cb).call(boundTo, e);
                                                }
                                            } else if (util.isObject(e)) {
                                                var keys = getKeys(item);
                                                for (var j = 0; j < keys.length; ++j) {
                                                    var key = keys[j];
                                                    if (item[key] != e[key]) {
                                                        continue predicateLoop;
                                                    }
                                                }
                                                return tryCatch(cb).call(boundTo, e);
                                            }
                                        }
                                        return NEXT_FILTER;
                                    };
                                }

                                return catchFilter;
                            };
                        }, { "./es5": 13, "./util": 36 }], 8: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise) {
                                var longStackTraces = false;
                                var contextStack = [];

                                Promise.prototype._promiseCreated = function () {};
                                Promise.prototype._pushContext = function () {};
                                Promise.prototype._popContext = function () {
                                    return null;
                                };
                                Promise._peekContext = Promise.prototype._peekContext = function () {};

                                function Context() {
                                    this._trace = new Context.CapturedTrace(peekContext());
                                }
                                Context.prototype._pushContext = function () {
                                    if (this._trace !== undefined) {
                                        this._trace._promiseCreated = null;
                                        contextStack.push(this._trace);
                                    }
                                };

                                Context.prototype._popContext = function () {
                                    if (this._trace !== undefined) {
                                        var trace = contextStack.pop();
                                        var ret = trace._promiseCreated;
                                        trace._promiseCreated = null;
                                        return ret;
                                    }
                                    return null;
                                };

                                function createContext() {
                                    if (longStackTraces) return new Context();
                                }

                                function peekContext() {
                                    var lastIndex = contextStack.length - 1;
                                    if (lastIndex >= 0) {
                                        return contextStack[lastIndex];
                                    }
                                    return undefined;
                                }
                                Context.CapturedTrace = null;
                                Context.create = createContext;
                                Context.deactivateLongStackTraces = function () {};
                                Context.activateLongStackTraces = function () {
                                    var Promise_pushContext = Promise.prototype._pushContext;
                                    var Promise_popContext = Promise.prototype._popContext;
                                    var Promise_PeekContext = Promise._peekContext;
                                    var Promise_peekContext = Promise.prototype._peekContext;
                                    var Promise_promiseCreated = Promise.prototype._promiseCreated;
                                    Context.deactivateLongStackTraces = function () {
                                        Promise.prototype._pushContext = Promise_pushContext;
                                        Promise.prototype._popContext = Promise_popContext;
                                        Promise._peekContext = Promise_PeekContext;
                                        Promise.prototype._peekContext = Promise_peekContext;
                                        Promise.prototype._promiseCreated = Promise_promiseCreated;
                                        longStackTraces = false;
                                    };
                                    longStackTraces = true;
                                    Promise.prototype._pushContext = Context.prototype._pushContext;
                                    Promise.prototype._popContext = Context.prototype._popContext;
                                    Promise._peekContext = Promise.prototype._peekContext = peekContext;
                                    Promise.prototype._promiseCreated = function () {
                                        var ctx = this._peekContext();
                                        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
                                    };
                                };
                                return Context;
                            };
                        }, {}], 9: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, Context) {
                                var getDomain = Promise._getDomain;
                                var async = Promise._async;
                                var Warning = _dereq_("./errors").Warning;
                                var util = _dereq_("./util");
                                var canAttachTrace = util.canAttachTrace;
                                var unhandledRejectionHandled;
                                var possiblyUnhandledRejection;
                                var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
                                var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
                                var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
                                var stackFramePattern = null;
                                var formatStack = null;
                                var indentStackFrames = false;
                                var printWarning;
                                var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 && (true || util.env("BLUEBIRD_DEBUG") || util.env("NODE_ENV") === "development"));

                                var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 && (debugging || util.env("BLUEBIRD_WARNINGS")));

                                var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

                                var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

                                Promise.prototype.suppressUnhandledRejections = function () {
                                    var target = this._target();
                                    target._bitField = target._bitField & ~1048576 | 524288;
                                };

                                Promise.prototype._ensurePossibleRejectionHandled = function () {
                                    if ((this._bitField & 524288) !== 0) return;
                                    this._setRejectionIsUnhandled();
                                    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
                                };

                                Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
                                    fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, undefined, this);
                                };

                                Promise.prototype._setReturnedNonUndefined = function () {
                                    this._bitField = this._bitField | 268435456;
                                };

                                Promise.prototype._returnedNonUndefined = function () {
                                    return (this._bitField & 268435456) !== 0;
                                };

                                Promise.prototype._notifyUnhandledRejection = function () {
                                    if (this._isRejectionUnhandled()) {
                                        var reason = this._settledValue();
                                        this._setUnhandledRejectionIsNotified();
                                        fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
                                    }
                                };

                                Promise.prototype._setUnhandledRejectionIsNotified = function () {
                                    this._bitField = this._bitField | 262144;
                                };

                                Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
                                    this._bitField = this._bitField & ~262144;
                                };

                                Promise.prototype._isUnhandledRejectionNotified = function () {
                                    return (this._bitField & 262144) > 0;
                                };

                                Promise.prototype._setRejectionIsUnhandled = function () {
                                    this._bitField = this._bitField | 1048576;
                                };

                                Promise.prototype._unsetRejectionIsUnhandled = function () {
                                    this._bitField = this._bitField & ~1048576;
                                    if (this._isUnhandledRejectionNotified()) {
                                        this._unsetUnhandledRejectionIsNotified();
                                        this._notifyUnhandledRejectionIsHandled();
                                    }
                                };

                                Promise.prototype._isRejectionUnhandled = function () {
                                    return (this._bitField & 1048576) > 0;
                                };

                                Promise.prototype._warn = function (message, shouldUseOwnTrace, promise) {
                                    return warn(message, shouldUseOwnTrace, promise || this);
                                };

                                Promise.onPossiblyUnhandledRejection = function (fn) {
                                    var domain = getDomain();
                                    possiblyUnhandledRejection = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                                };

                                Promise.onUnhandledRejectionHandled = function (fn) {
                                    var domain = getDomain();
                                    unhandledRejectionHandled = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                                };

                                var disableLongStackTraces = function disableLongStackTraces() {};
                                Promise.longStackTraces = function () {
                                    if (async.haveItemsQueued() && !config.longStackTraces) {
                                        throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                    if (!config.longStackTraces && longStackTracesIsSupported()) {
                                        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
                                        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
                                        config.longStackTraces = true;
                                        disableLongStackTraces = function disableLongStackTraces() {
                                            if (async.haveItemsQueued() && !config.longStackTraces) {
                                                throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                            }
                                            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
                                            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
                                            Context.deactivateLongStackTraces();
                                            async.enableTrampoline();
                                            config.longStackTraces = false;
                                        };
                                        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
                                        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
                                        Context.activateLongStackTraces();
                                        async.disableTrampolineIfNecessary();
                                    }
                                };

                                Promise.hasLongStackTraces = function () {
                                    return config.longStackTraces && longStackTracesIsSupported();
                                };

                                var fireDomEvent = function () {
                                    try {
                                        if (typeof CustomEvent === "function") {
                                            var event = new CustomEvent("CustomEvent");
                                            util.global.dispatchEvent(event);
                                            return function (name, event) {
                                                var domEvent = new CustomEvent(name.toLowerCase(), {
                                                    detail: event,
                                                    cancelable: true
                                                });
                                                return !util.global.dispatchEvent(domEvent);
                                            };
                                        } else if (typeof Event === "function") {
                                            var event = new Event("CustomEvent");
                                            util.global.dispatchEvent(event);
                                            return function (name, event) {
                                                var domEvent = new Event(name.toLowerCase(), {
                                                    cancelable: true
                                                });
                                                domEvent.detail = event;
                                                return !util.global.dispatchEvent(domEvent);
                                            };
                                        } else {
                                            var event = document.createEvent("CustomEvent");
                                            event.initCustomEvent("testingtheevent", false, true, {});
                                            util.global.dispatchEvent(event);
                                            return function (name, event) {
                                                var domEvent = document.createEvent("CustomEvent");
                                                domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
                                                return !util.global.dispatchEvent(domEvent);
                                            };
                                        }
                                    } catch (e) {}
                                    return function () {
                                        return false;
                                    };
                                }();

                                var fireGlobalEvent = function () {
                                    if (util.isNode) {
                                        return function () {
                                            return process.emit.apply(process, arguments);
                                        };
                                    } else {
                                        if (!util.global) {
                                            return function () {
                                                return false;
                                            };
                                        }
                                        return function (name) {
                                            var methodName = "on" + name.toLowerCase();
                                            var method = util.global[methodName];
                                            if (!method) return false;
                                            method.apply(util.global, [].slice.call(arguments, 1));
                                            return true;
                                        };
                                    }
                                }();

                                function generatePromiseLifecycleEventObject(name, promise) {
                                    return { promise: promise };
                                }

                                var eventToObjectGenerator = {
                                    promiseCreated: generatePromiseLifecycleEventObject,
                                    promiseFulfilled: generatePromiseLifecycleEventObject,
                                    promiseRejected: generatePromiseLifecycleEventObject,
                                    promiseResolved: generatePromiseLifecycleEventObject,
                                    promiseCancelled: generatePromiseLifecycleEventObject,
                                    promiseChained: function promiseChained(name, promise, child) {
                                        return { promise: promise, child: child };
                                    },
                                    warning: function warning(name, _warning) {
                                        return { warning: _warning };
                                    },
                                    unhandledRejection: function unhandledRejection(name, reason, promise) {
                                        return { reason: reason, promise: promise };
                                    },
                                    rejectionHandled: generatePromiseLifecycleEventObject
                                };

                                var activeFireEvent = function activeFireEvent(name) {
                                    var globalEventFired = false;
                                    try {
                                        globalEventFired = fireGlobalEvent.apply(null, arguments);
                                    } catch (e) {
                                        async.throwLater(e);
                                        globalEventFired = true;
                                    }

                                    var domEventFired = false;
                                    try {
                                        domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
                                    } catch (e) {
                                        async.throwLater(e);
                                        domEventFired = true;
                                    }

                                    return domEventFired || globalEventFired;
                                };

                                Promise.config = function (opts) {
                                    opts = Object(opts);
                                    if ("longStackTraces" in opts) {
                                        if (opts.longStackTraces) {
                                            Promise.longStackTraces();
                                        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
                                            disableLongStackTraces();
                                        }
                                    }
                                    if ("warnings" in opts) {
                                        var warningsOption = opts.warnings;
                                        config.warnings = !!warningsOption;
                                        wForgottenReturn = config.warnings;

                                        if (util.isObject(warningsOption)) {
                                            if ("wForgottenReturn" in warningsOption) {
                                                wForgottenReturn = !!warningsOption.wForgottenReturn;
                                            }
                                        }
                                    }
                                    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
                                        if (async.haveItemsQueued()) {
                                            throw new Error("cannot enable cancellation after promises are in use");
                                        }
                                        Promise.prototype._clearCancellationData = cancellationClearCancellationData;
                                        Promise.prototype._propagateFrom = cancellationPropagateFrom;
                                        Promise.prototype._onCancel = cancellationOnCancel;
                                        Promise.prototype._setOnCancel = cancellationSetOnCancel;
                                        Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback;
                                        Promise.prototype._execute = cancellationExecute;
                                        _propagateFromFunction = cancellationPropagateFrom;
                                        config.cancellation = true;
                                    }
                                    if ("monitoring" in opts) {
                                        if (opts.monitoring && !config.monitoring) {
                                            config.monitoring = true;
                                            Promise.prototype._fireEvent = activeFireEvent;
                                        } else if (!opts.monitoring && config.monitoring) {
                                            config.monitoring = false;
                                            Promise.prototype._fireEvent = defaultFireEvent;
                                        }
                                    }
                                };

                                function defaultFireEvent() {
                                    return false;
                                }

                                Promise.prototype._fireEvent = defaultFireEvent;
                                Promise.prototype._execute = function (executor, resolve, reject) {
                                    try {
                                        executor(resolve, reject);
                                    } catch (e) {
                                        return e;
                                    }
                                };
                                Promise.prototype._onCancel = function () {};
                                Promise.prototype._setOnCancel = function (handler) {
                                    ;
                                };
                                Promise.prototype._attachCancellationCallback = function (onCancel) {
                                    ;
                                };
                                Promise.prototype._captureStackTrace = function () {};
                                Promise.prototype._attachExtraTrace = function () {};
                                Promise.prototype._clearCancellationData = function () {};
                                Promise.prototype._propagateFrom = function (parent, flags) {
                                    ;
                                    ;
                                };

                                function cancellationExecute(executor, resolve, reject) {
                                    var promise = this;
                                    try {
                                        executor(resolve, reject, function (onCancel) {
                                            if (typeof onCancel !== "function") {
                                                throw new TypeError("onCancel must be a function, got: " + util.toString(onCancel));
                                            }
                                            promise._attachCancellationCallback(onCancel);
                                        });
                                    } catch (e) {
                                        return e;
                                    }
                                }

                                function cancellationAttachCancellationCallback(onCancel) {
                                    if (!this._isCancellable()) return this;

                                    var previousOnCancel = this._onCancel();
                                    if (previousOnCancel !== undefined) {
                                        if (util.isArray(previousOnCancel)) {
                                            previousOnCancel.push(onCancel);
                                        } else {
                                            this._setOnCancel([previousOnCancel, onCancel]);
                                        }
                                    } else {
                                        this._setOnCancel(onCancel);
                                    }
                                }

                                function cancellationOnCancel() {
                                    return this._onCancelField;
                                }

                                function cancellationSetOnCancel(onCancel) {
                                    this._onCancelField = onCancel;
                                }

                                function cancellationClearCancellationData() {
                                    this._cancellationParent = undefined;
                                    this._onCancelField = undefined;
                                }

                                function cancellationPropagateFrom(parent, flags) {
                                    if ((flags & 1) !== 0) {
                                        this._cancellationParent = parent;
                                        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
                                        if (branchesRemainingToCancel === undefined) {
                                            branchesRemainingToCancel = 0;
                                        }
                                        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
                                    }
                                    if ((flags & 2) !== 0 && parent._isBound()) {
                                        this._setBoundTo(parent._boundTo);
                                    }
                                }

                                function bindingPropagateFrom(parent, flags) {
                                    if ((flags & 2) !== 0 && parent._isBound()) {
                                        this._setBoundTo(parent._boundTo);
                                    }
                                }
                                var _propagateFromFunction = bindingPropagateFrom;

                                function _boundValueFunction() {
                                    var ret = this._boundTo;
                                    if (ret !== undefined) {
                                        if (ret instanceof Promise) {
                                            if (ret.isFulfilled()) {
                                                return ret.value();
                                            } else {
                                                return undefined;
                                            }
                                        }
                                    }
                                    return ret;
                                }

                                function longStackTracesCaptureStackTrace() {
                                    this._trace = new CapturedTrace(this._peekContext());
                                }

                                function longStackTracesAttachExtraTrace(error, ignoreSelf) {
                                    if (canAttachTrace(error)) {
                                        var trace = this._trace;
                                        if (trace !== undefined) {
                                            if (ignoreSelf) trace = trace._parent;
                                        }
                                        if (trace !== undefined) {
                                            trace.attachExtraTrace(error);
                                        } else if (!error.__stackCleaned__) {
                                            var parsed = parseStackAndMessage(error);
                                            util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n"));
                                            util.notEnumerableProp(error, "__stackCleaned__", true);
                                        }
                                    }
                                }

                                function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
                                    if (returnValue === undefined && promiseCreated !== null && wForgottenReturn) {
                                        if (parent !== undefined && parent._returnedNonUndefined()) return;
                                        if ((promise._bitField & 65535) === 0) return;

                                        if (name) name = name + " ";
                                        var handlerLine = "";
                                        var creatorLine = "";
                                        if (promiseCreated._trace) {
                                            var traceLines = promiseCreated._trace.stack.split("\n");
                                            var stack = cleanStack(traceLines);
                                            for (var i = stack.length - 1; i >= 0; --i) {
                                                var line = stack[i];
                                                if (!nodeFramePattern.test(line)) {
                                                    var lineMatches = line.match(parseLinePattern);
                                                    if (lineMatches) {
                                                        handlerLine = "at " + lineMatches[1] + ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                                                    }
                                                    break;
                                                }
                                            }

                                            if (stack.length > 0) {
                                                var firstUserLine = stack[0];
                                                for (var i = 0; i < traceLines.length; ++i) {

                                                    if (traceLines[i] === firstUserLine) {
                                                        if (i > 0) {
                                                            creatorLine = "\n" + traceLines[i - 1];
                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        var msg = "a promise was created in a " + name + "handler " + handlerLine + "but was not returned from it, " + "see http://goo.gl/rRqMUw" + creatorLine;
                                        promise._warn(msg, true, promiseCreated);
                                    }
                                }

                                function deprecated(name, replacement) {
                                    var message = name + " is deprecated and will be removed in a future version.";
                                    if (replacement) message += " Use " + replacement + " instead.";
                                    return warn(message);
                                }

                                function warn(message, shouldUseOwnTrace, promise) {
                                    if (!config.warnings) return;
                                    var warning = new Warning(message);
                                    var ctx;
                                    if (shouldUseOwnTrace) {
                                        promise._attachExtraTrace(warning);
                                    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
                                        ctx.attachExtraTrace(warning);
                                    } else {
                                        var parsed = parseStackAndMessage(warning);
                                        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
                                    }

                                    if (!activeFireEvent("warning", warning)) {
                                        formatAndLogError(warning, "", true);
                                    }
                                }

                                function reconstructStack(message, stacks) {
                                    for (var i = 0; i < stacks.length - 1; ++i) {
                                        stacks[i].push("From previous event:");
                                        stacks[i] = stacks[i].join("\n");
                                    }
                                    if (i < stacks.length) {
                                        stacks[i] = stacks[i].join("\n");
                                    }
                                    return message + "\n" + stacks.join("\n");
                                }

                                function removeDuplicateOrEmptyJumps(stacks) {
                                    for (var i = 0; i < stacks.length; ++i) {
                                        if (stacks[i].length === 0 || i + 1 < stacks.length && stacks[i][0] === stacks[i + 1][0]) {
                                            stacks.splice(i, 1);
                                            i--;
                                        }
                                    }
                                }

                                function removeCommonRoots(stacks) {
                                    var current = stacks[0];
                                    for (var i = 1; i < stacks.length; ++i) {
                                        var prev = stacks[i];
                                        var currentLastIndex = current.length - 1;
                                        var currentLastLine = current[currentLastIndex];
                                        var commonRootMeetPoint = -1;

                                        for (var j = prev.length - 1; j >= 0; --j) {
                                            if (prev[j] === currentLastLine) {
                                                commonRootMeetPoint = j;
                                                break;
                                            }
                                        }

                                        for (var j = commonRootMeetPoint; j >= 0; --j) {
                                            var line = prev[j];
                                            if (current[currentLastIndex] === line) {
                                                current.pop();
                                                currentLastIndex--;
                                            } else {
                                                break;
                                            }
                                        }
                                        current = prev;
                                    }
                                }

                                function cleanStack(stack) {
                                    var ret = [];
                                    for (var i = 0; i < stack.length; ++i) {
                                        var line = stack[i];
                                        var isTraceLine = "    (No stack trace)" === line || stackFramePattern.test(line);
                                        var isInternalFrame = isTraceLine && shouldIgnore(line);
                                        if (isTraceLine && !isInternalFrame) {
                                            if (indentStackFrames && line.charAt(0) !== " ") {
                                                line = "    " + line;
                                            }
                                            ret.push(line);
                                        }
                                    }
                                    return ret;
                                }

                                function stackFramesAsArray(error) {
                                    var stack = error.stack.replace(/\s+$/g, "").split("\n");
                                    for (var i = 0; i < stack.length; ++i) {
                                        var line = stack[i];
                                        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
                                            break;
                                        }
                                    }
                                    if (i > 0) {
                                        stack = stack.slice(i);
                                    }
                                    return stack;
                                }

                                function parseStackAndMessage(error) {
                                    var stack = error.stack;
                                    var message = error.toString();
                                    stack = typeof stack === "string" && stack.length > 0 ? stackFramesAsArray(error) : ["    (No stack trace)"];
                                    return {
                                        message: message,
                                        stack: cleanStack(stack)
                                    };
                                }

                                function formatAndLogError(error, title, isSoft) {
                                    if (typeof console !== "undefined") {
                                        var message;
                                        if (util.isObject(error)) {
                                            var stack = error.stack;
                                            message = title + formatStack(stack, error);
                                        } else {
                                            message = title + String(error);
                                        }
                                        if (typeof printWarning === "function") {
                                            printWarning(message, isSoft);
                                        } else if (typeof console.log === "function" || _typeof2(console.log) === "object") {
                                            console.log(message);
                                        }
                                    }
                                }

                                function fireRejectionEvent(name, localHandler, reason, promise) {
                                    var localEventFired = false;
                                    try {
                                        if (typeof localHandler === "function") {
                                            localEventFired = true;
                                            if (name === "rejectionHandled") {
                                                localHandler(promise);
                                            } else {
                                                localHandler(reason, promise);
                                            }
                                        }
                                    } catch (e) {
                                        async.throwLater(e);
                                    }

                                    if (name === "unhandledRejection") {
                                        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
                                            formatAndLogError(reason, "Unhandled rejection ");
                                        }
                                    } else {
                                        activeFireEvent(name, promise);
                                    }
                                }

                                function formatNonError(obj) {
                                    var str;
                                    if (typeof obj === "function") {
                                        str = "[function " + (obj.name || "anonymous") + "]";
                                    } else {
                                        str = obj && typeof obj.toString === "function" ? obj.toString() : util.toString(obj);
                                        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                                        if (ruselessToString.test(str)) {
                                            try {
                                                var newStr = JSON.stringify(obj);
                                                str = newStr;
                                            } catch (e) {}
                                        }
                                        if (str.length === 0) {
                                            str = "(empty array)";
                                        }
                                    }
                                    return "(<" + snip(str) + ">, no stack trace)";
                                }

                                function snip(str) {
                                    var maxChars = 41;
                                    if (str.length < maxChars) {
                                        return str;
                                    }
                                    return str.substr(0, maxChars - 3) + "...";
                                }

                                function longStackTracesIsSupported() {
                                    return typeof captureStackTrace === "function";
                                }

                                var shouldIgnore = function shouldIgnore() {
                                    return false;
                                };
                                var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                                function parseLineInfo(line) {
                                    var matches = line.match(parseLineInfoRegex);
                                    if (matches) {
                                        return {
                                            fileName: matches[1],
                                            line: parseInt(matches[2], 10)
                                        };
                                    }
                                }

                                function setBounds(firstLineError, lastLineError) {
                                    if (!longStackTracesIsSupported()) return;
                                    var firstStackLines = firstLineError.stack.split("\n");
                                    var lastStackLines = lastLineError.stack.split("\n");
                                    var firstIndex = -1;
                                    var lastIndex = -1;
                                    var firstFileName;
                                    var lastFileName;
                                    for (var i = 0; i < firstStackLines.length; ++i) {
                                        var result = parseLineInfo(firstStackLines[i]);
                                        if (result) {
                                            firstFileName = result.fileName;
                                            firstIndex = result.line;
                                            break;
                                        }
                                    }
                                    for (var i = 0; i < lastStackLines.length; ++i) {
                                        var result = parseLineInfo(lastStackLines[i]);
                                        if (result) {
                                            lastFileName = result.fileName;
                                            lastIndex = result.line;
                                            break;
                                        }
                                    }
                                    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName || firstFileName !== lastFileName || firstIndex >= lastIndex) {
                                        return;
                                    }

                                    shouldIgnore = function shouldIgnore(line) {
                                        if (bluebirdFramePattern.test(line)) return true;
                                        var info = parseLineInfo(line);
                                        if (info) {
                                            if (info.fileName === firstFileName && firstIndex <= info.line && info.line <= lastIndex) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    };
                                }

                                function CapturedTrace(parent) {
                                    this._parent = parent;
                                    this._promisesCreated = 0;
                                    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
                                    captureStackTrace(this, CapturedTrace);
                                    if (length > 32) this.uncycle();
                                }
                                util.inherits(CapturedTrace, Error);
                                Context.CapturedTrace = CapturedTrace;

                                CapturedTrace.prototype.uncycle = function () {
                                    var length = this._length;
                                    if (length < 2) return;
                                    var nodes = [];
                                    var stackToIndex = {};

                                    for (var i = 0, node = this; node !== undefined; ++i) {
                                        nodes.push(node);
                                        node = node._parent;
                                    }
                                    length = this._length = i;
                                    for (var i = length - 1; i >= 0; --i) {
                                        var stack = nodes[i].stack;
                                        if (stackToIndex[stack] === undefined) {
                                            stackToIndex[stack] = i;
                                        }
                                    }
                                    for (var i = 0; i < length; ++i) {
                                        var currentStack = nodes[i].stack;
                                        var index = stackToIndex[currentStack];
                                        if (index !== undefined && index !== i) {
                                            if (index > 0) {
                                                nodes[index - 1]._parent = undefined;
                                                nodes[index - 1]._length = 1;
                                            }
                                            nodes[i]._parent = undefined;
                                            nodes[i]._length = 1;
                                            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

                                            if (index < length - 1) {
                                                cycleEdgeNode._parent = nodes[index + 1];
                                                cycleEdgeNode._parent.uncycle();
                                                cycleEdgeNode._length = cycleEdgeNode._parent._length + 1;
                                            } else {
                                                cycleEdgeNode._parent = undefined;
                                                cycleEdgeNode._length = 1;
                                            }
                                            var currentChildLength = cycleEdgeNode._length + 1;
                                            for (var j = i - 2; j >= 0; --j) {
                                                nodes[j]._length = currentChildLength;
                                                currentChildLength++;
                                            }
                                            return;
                                        }
                                    }
                                };

                                CapturedTrace.prototype.attachExtraTrace = function (error) {
                                    if (error.__stackCleaned__) return;
                                    this.uncycle();
                                    var parsed = parseStackAndMessage(error);
                                    var message = parsed.message;
                                    var stacks = [parsed.stack];

                                    var trace = this;
                                    while (trace !== undefined) {
                                        stacks.push(cleanStack(trace.stack.split("\n")));
                                        trace = trace._parent;
                                    }
                                    removeCommonRoots(stacks);
                                    removeDuplicateOrEmptyJumps(stacks);
                                    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
                                    util.notEnumerableProp(error, "__stackCleaned__", true);
                                };

                                var captureStackTrace = function stackDetection() {
                                    var v8stackFramePattern = /^\s*at\s*/;
                                    var v8stackFormatter = function v8stackFormatter(stack, error) {
                                        if (typeof stack === "string") return stack;

                                        if (error.name !== undefined && error.message !== undefined) {
                                            return error.toString();
                                        }
                                        return formatNonError(error);
                                    };

                                    if (typeof Error.stackTraceLimit === "number" && typeof Error.captureStackTrace === "function") {
                                        Error.stackTraceLimit += 6;
                                        stackFramePattern = v8stackFramePattern;
                                        formatStack = v8stackFormatter;
                                        var captureStackTrace = Error.captureStackTrace;

                                        shouldIgnore = function shouldIgnore(line) {
                                            return bluebirdFramePattern.test(line);
                                        };
                                        return function (receiver, ignoreUntil) {
                                            Error.stackTraceLimit += 6;
                                            captureStackTrace(receiver, ignoreUntil);
                                            Error.stackTraceLimit -= 6;
                                        };
                                    }
                                    var err = new Error();

                                    if (typeof err.stack === "string" && err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
                                        stackFramePattern = /@/;
                                        formatStack = v8stackFormatter;
                                        indentStackFrames = true;
                                        return function captureStackTrace(o) {
                                            o.stack = new Error().stack;
                                        };
                                    }

                                    var hasStackAfterThrow;
                                    try {
                                        throw new Error();
                                    } catch (e) {
                                        hasStackAfterThrow = "stack" in e;
                                    }
                                    if (!("stack" in err) && hasStackAfterThrow && typeof Error.stackTraceLimit === "number") {
                                        stackFramePattern = v8stackFramePattern;
                                        formatStack = v8stackFormatter;
                                        return function captureStackTrace(o) {
                                            Error.stackTraceLimit += 6;
                                            try {
                                                throw new Error();
                                            } catch (e) {
                                                o.stack = e.stack;
                                            }
                                            Error.stackTraceLimit -= 6;
                                        };
                                    }

                                    formatStack = function formatStack(stack, error) {
                                        if (typeof stack === "string") return stack;

                                        if (((typeof error === "undefined" ? "undefined" : _typeof2(error)) === "object" || typeof error === "function") && error.name !== undefined && error.message !== undefined) {
                                            return error.toString();
                                        }
                                        return formatNonError(error);
                                    };

                                    return null;
                                }([]);

                                if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
                                    printWarning = function printWarning(message) {
                                        console.warn(message);
                                    };
                                    if (util.isNode && process.stderr.isTTY) {
                                        printWarning = function printWarning(message, isSoft) {
                                            var color = isSoft ? "\x1B[33m" : "\x1B[31m";
                                            console.warn(color + message + "\x1B[0m\n");
                                        };
                                    } else if (!util.isNode && typeof new Error().stack === "string") {
                                        printWarning = function printWarning(message, isSoft) {
                                            console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
                                        };
                                    }
                                }

                                var config = {
                                    warnings: warnings,
                                    longStackTraces: false,
                                    cancellation: false,
                                    monitoring: false
                                };

                                if (longStackTraces) Promise.longStackTraces();

                                return {
                                    longStackTraces: function longStackTraces() {
                                        return config.longStackTraces;
                                    },
                                    warnings: function warnings() {
                                        return config.warnings;
                                    },
                                    cancellation: function cancellation() {
                                        return config.cancellation;
                                    },
                                    monitoring: function monitoring() {
                                        return config.monitoring;
                                    },
                                    propagateFromFunction: function propagateFromFunction() {
                                        return _propagateFromFunction;
                                    },
                                    boundValueFunction: function boundValueFunction() {
                                        return _boundValueFunction;
                                    },
                                    checkForgottenReturns: checkForgottenReturns,
                                    setBounds: setBounds,
                                    warn: warn,
                                    deprecated: deprecated,
                                    CapturedTrace: CapturedTrace,
                                    fireDomEvent: fireDomEvent,
                                    fireGlobalEvent: fireGlobalEvent
                                };
                            };
                        }, { "./errors": 12, "./util": 36 }], 10: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise) {
                                function returner() {
                                    return this.value;
                                }
                                function thrower() {
                                    throw this.reason;
                                }

                                Promise.prototype["return"] = Promise.prototype.thenReturn = function (value) {
                                    if (value instanceof Promise) value.suppressUnhandledRejections();
                                    return this._then(returner, undefined, undefined, { value: value }, undefined);
                                };

                                Promise.prototype["throw"] = Promise.prototype.thenThrow = function (reason) {
                                    return this._then(thrower, undefined, undefined, { reason: reason }, undefined);
                                };

                                Promise.prototype.catchThrow = function (reason) {
                                    if (arguments.length <= 1) {
                                        return this._then(undefined, thrower, undefined, { reason: reason }, undefined);
                                    } else {
                                        var _reason = arguments[1];
                                        var handler = function handler() {
                                            throw _reason;
                                        };
                                        return this.caught(reason, handler);
                                    }
                                };

                                Promise.prototype.catchReturn = function (value) {
                                    if (arguments.length <= 1) {
                                        if (value instanceof Promise) value.suppressUnhandledRejections();
                                        return this._then(undefined, returner, undefined, { value: value }, undefined);
                                    } else {
                                        var _value = arguments[1];
                                        if (_value instanceof Promise) _value.suppressUnhandledRejections();
                                        var handler = function handler() {
                                            return _value;
                                        };
                                        return this.caught(value, handler);
                                    }
                                };
                            };
                        }, {}], 11: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL) {
                                var PromiseReduce = Promise.reduce;
                                var PromiseAll = Promise.all;

                                function promiseAllThis() {
                                    return PromiseAll(this);
                                }

                                function PromiseMapSeries(promises, fn) {
                                    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
                                }

                                Promise.prototype.each = function (fn) {
                                    return PromiseReduce(this, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, this, undefined);
                                };

                                Promise.prototype.mapSeries = function (fn) {
                                    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
                                };

                                Promise.each = function (promises, fn) {
                                    return PromiseReduce(promises, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, promises, undefined);
                                };

                                Promise.mapSeries = PromiseMapSeries;
                            };
                        }, {}], 12: [function (_dereq_, module, exports) {
                            "use strict";

                            var es5 = _dereq_("./es5");
                            var Objectfreeze = es5.freeze;
                            var util = _dereq_("./util");
                            var inherits = util.inherits;
                            var notEnumerableProp = util.notEnumerableProp;

                            function subError(nameProperty, defaultMessage) {
                                function SubError(message) {
                                    if (!(this instanceof SubError)) return new SubError(message);
                                    notEnumerableProp(this, "message", typeof message === "string" ? message : defaultMessage);
                                    notEnumerableProp(this, "name", nameProperty);
                                    if (Error.captureStackTrace) {
                                        Error.captureStackTrace(this, this.constructor);
                                    } else {
                                        Error.call(this);
                                    }
                                }
                                inherits(SubError, Error);
                                return SubError;
                            }

                            var _TypeError, _RangeError;
                            var Warning = subError("Warning", "warning");
                            var CancellationError = subError("CancellationError", "cancellation error");
                            var TimeoutError = subError("TimeoutError", "timeout error");
                            var AggregateError = subError("AggregateError", "aggregate error");
                            try {
                                _TypeError = TypeError;
                                _RangeError = RangeError;
                            } catch (e) {
                                _TypeError = subError("TypeError", "type error");
                                _RangeError = subError("RangeError", "range error");
                            }

                            var methods = ("join pop push shift unshift slice filter forEach some " + "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

                            for (var i = 0; i < methods.length; ++i) {
                                if (typeof Array.prototype[methods[i]] === "function") {
                                    AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
                                }
                            }

                            es5.defineProperty(AggregateError.prototype, "length", {
                                value: 0,
                                configurable: false,
                                writable: true,
                                enumerable: true
                            });
                            AggregateError.prototype["isOperational"] = true;
                            var level = 0;
                            AggregateError.prototype.toString = function () {
                                var indent = Array(level * 4 + 1).join(" ");
                                var ret = "\n" + indent + "AggregateError of:" + "\n";
                                level++;
                                indent = Array(level * 4 + 1).join(" ");
                                for (var i = 0; i < this.length; ++i) {
                                    var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
                                    var lines = str.split("\n");
                                    for (var j = 0; j < lines.length; ++j) {
                                        lines[j] = indent + lines[j];
                                    }
                                    str = lines.join("\n");
                                    ret += str + "\n";
                                }
                                level--;
                                return ret;
                            };

                            function OperationalError(message) {
                                if (!(this instanceof OperationalError)) return new OperationalError(message);
                                notEnumerableProp(this, "name", "OperationalError");
                                notEnumerableProp(this, "message", message);
                                this.cause = message;
                                this["isOperational"] = true;

                                if (message instanceof Error) {
                                    notEnumerableProp(this, "message", message.message);
                                    notEnumerableProp(this, "stack", message.stack);
                                } else if (Error.captureStackTrace) {
                                    Error.captureStackTrace(this, this.constructor);
                                }
                            }
                            inherits(OperationalError, Error);

                            var errorTypes = Error["__BluebirdErrorTypes__"];
                            if (!errorTypes) {
                                errorTypes = Objectfreeze({
                                    CancellationError: CancellationError,
                                    TimeoutError: TimeoutError,
                                    OperationalError: OperationalError,
                                    RejectionError: OperationalError,
                                    AggregateError: AggregateError
                                });
                                es5.defineProperty(Error, "__BluebirdErrorTypes__", {
                                    value: errorTypes,
                                    writable: false,
                                    enumerable: false,
                                    configurable: false
                                });
                            }

                            module.exports = {
                                Error: Error,
                                TypeError: _TypeError,
                                RangeError: _RangeError,
                                CancellationError: errorTypes.CancellationError,
                                OperationalError: errorTypes.OperationalError,
                                TimeoutError: errorTypes.TimeoutError,
                                AggregateError: errorTypes.AggregateError,
                                Warning: Warning
                            };
                        }, { "./es5": 13, "./util": 36 }], 13: [function (_dereq_, module, exports) {
                            var isES5 = function () {
                                "use strict";

                                return this === undefined;
                            }();

                            if (isES5) {
                                module.exports = {
                                    freeze: Object.freeze,
                                    defineProperty: Object.defineProperty,
                                    getDescriptor: Object.getOwnPropertyDescriptor,
                                    keys: Object.keys,
                                    names: Object.getOwnPropertyNames,
                                    getPrototypeOf: Object.getPrototypeOf,
                                    isArray: Array.isArray,
                                    isES5: isES5,
                                    propertyIsWritable: function propertyIsWritable(obj, prop) {
                                        var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
                                        return !!(!descriptor || descriptor.writable || descriptor.set);
                                    }
                                };
                            } else {
                                var has = {}.hasOwnProperty;
                                var str = {}.toString;
                                var proto = {}.constructor.prototype;

                                var ObjectKeys = function ObjectKeys(o) {
                                    var ret = [];
                                    for (var key in o) {
                                        if (has.call(o, key)) {
                                            ret.push(key);
                                        }
                                    }
                                    return ret;
                                };

                                var ObjectGetDescriptor = function ObjectGetDescriptor(o, key) {
                                    return { value: o[key] };
                                };

                                var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
                                    o[key] = desc.value;
                                    return o;
                                };

                                var ObjectFreeze = function ObjectFreeze(obj) {
                                    return obj;
                                };

                                var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
                                    try {
                                        return Object(obj).constructor.prototype;
                                    } catch (e) {
                                        return proto;
                                    }
                                };

                                var ArrayIsArray = function ArrayIsArray(obj) {
                                    try {
                                        return str.call(obj) === "[object Array]";
                                    } catch (e) {
                                        return false;
                                    }
                                };

                                module.exports = {
                                    isArray: ArrayIsArray,
                                    keys: ObjectKeys,
                                    names: ObjectKeys,
                                    defineProperty: ObjectDefineProperty,
                                    getDescriptor: ObjectGetDescriptor,
                                    freeze: ObjectFreeze,
                                    getPrototypeOf: ObjectGetPrototypeOf,
                                    isES5: isES5,
                                    propertyIsWritable: function propertyIsWritable() {
                                        return true;
                                    }
                                };
                            }
                        }, {}], 14: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL) {
                                var PromiseMap = Promise.map;

                                Promise.prototype.filter = function (fn, options) {
                                    return PromiseMap(this, fn, options, INTERNAL);
                                };

                                Promise.filter = function (promises, fn, options) {
                                    return PromiseMap(promises, fn, options, INTERNAL);
                                };
                            };
                        }, {}], 15: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, tryConvertToPromise) {
                                var util = _dereq_("./util");
                                var CancellationError = Promise.CancellationError;
                                var errorObj = util.errorObj;

                                function PassThroughHandlerContext(promise, type, handler) {
                                    this.promise = promise;
                                    this.type = type;
                                    this.handler = handler;
                                    this.called = false;
                                    this.cancelPromise = null;
                                }

                                PassThroughHandlerContext.prototype.isFinallyHandler = function () {
                                    return this.type === 0;
                                };

                                function FinallyHandlerCancelReaction(finallyHandler) {
                                    this.finallyHandler = finallyHandler;
                                }

                                FinallyHandlerCancelReaction.prototype._resultCancelled = function () {
                                    checkCancel(this.finallyHandler);
                                };

                                function checkCancel(ctx, reason) {
                                    if (ctx.cancelPromise != null) {
                                        if (arguments.length > 1) {
                                            ctx.cancelPromise._reject(reason);
                                        } else {
                                            ctx.cancelPromise._cancel();
                                        }
                                        ctx.cancelPromise = null;
                                        return true;
                                    }
                                    return false;
                                }

                                function succeed() {
                                    return finallyHandler.call(this, this.promise._target()._settledValue());
                                }
                                function fail(reason) {
                                    if (checkCancel(this, reason)) return;
                                    errorObj.e = reason;
                                    return errorObj;
                                }
                                function finallyHandler(reasonOrValue) {
                                    var promise = this.promise;
                                    var handler = this.handler;

                                    if (!this.called) {
                                        this.called = true;
                                        var ret = this.isFinallyHandler() ? handler.call(promise._boundValue()) : handler.call(promise._boundValue(), reasonOrValue);
                                        if (ret !== undefined) {
                                            promise._setReturnedNonUndefined();
                                            var maybePromise = tryConvertToPromise(ret, promise);
                                            if (maybePromise instanceof Promise) {
                                                if (this.cancelPromise != null) {
                                                    if (maybePromise._isCancelled()) {
                                                        var reason = new CancellationError("late cancellation observer");
                                                        promise._attachExtraTrace(reason);
                                                        errorObj.e = reason;
                                                        return errorObj;
                                                    } else if (maybePromise.isPending()) {
                                                        maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
                                                    }
                                                }
                                                return maybePromise._then(succeed, fail, undefined, this, undefined);
                                            }
                                        }
                                    }

                                    if (promise.isRejected()) {
                                        checkCancel(this);
                                        errorObj.e = reasonOrValue;
                                        return errorObj;
                                    } else {
                                        checkCancel(this);
                                        return reasonOrValue;
                                    }
                                }

                                Promise.prototype._passThrough = function (handler, type, success, fail) {
                                    if (typeof handler !== "function") return this.then();
                                    return this._then(success, fail, undefined, new PassThroughHandlerContext(this, type, handler), undefined);
                                };

                                Promise.prototype.lastly = Promise.prototype["finally"] = function (handler) {
                                    return this._passThrough(handler, 0, finallyHandler, finallyHandler);
                                };

                                Promise.prototype.tap = function (handler) {
                                    return this._passThrough(handler, 1, finallyHandler);
                                };

                                return PassThroughHandlerContext;
                            };
                        }, { "./util": 36 }], 16: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
                                var errors = _dereq_("./errors");
                                var TypeError = errors.TypeError;
                                var util = _dereq_("./util");
                                var errorObj = util.errorObj;
                                var tryCatch = util.tryCatch;
                                var yieldHandlers = [];

                                function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
                                    for (var i = 0; i < yieldHandlers.length; ++i) {
                                        traceParent._pushContext();
                                        var result = tryCatch(yieldHandlers[i])(value);
                                        traceParent._popContext();
                                        if (result === errorObj) {
                                            traceParent._pushContext();
                                            var ret = Promise.reject(errorObj.e);
                                            traceParent._popContext();
                                            return ret;
                                        }
                                        var maybePromise = tryConvertToPromise(result, traceParent);
                                        if (maybePromise instanceof Promise) return maybePromise;
                                    }
                                    return null;
                                }

                                function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
                                    if (debug.cancellation()) {
                                        var internal = new Promise(INTERNAL);
                                        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
                                        this._promise = internal.lastly(function () {
                                            return _finallyPromise;
                                        });
                                        internal._captureStackTrace();
                                        internal._setOnCancel(this);
                                    } else {
                                        var promise = this._promise = new Promise(INTERNAL);
                                        promise._captureStackTrace();
                                    }
                                    this._stack = stack;
                                    this._generatorFunction = generatorFunction;
                                    this._receiver = receiver;
                                    this._generator = undefined;
                                    this._yieldHandlers = typeof yieldHandler === "function" ? [yieldHandler].concat(yieldHandlers) : yieldHandlers;
                                    this._yieldedPromise = null;
                                    this._cancellationPhase = false;
                                }
                                util.inherits(PromiseSpawn, Proxyable);

                                PromiseSpawn.prototype._isResolved = function () {
                                    return this._promise === null;
                                };

                                PromiseSpawn.prototype._cleanup = function () {
                                    this._promise = this._generator = null;
                                    if (debug.cancellation() && this._finallyPromise !== null) {
                                        this._finallyPromise._fulfill();
                                        this._finallyPromise = null;
                                    }
                                };

                                PromiseSpawn.prototype._promiseCancelled = function () {
                                    if (this._isResolved()) return;
                                    var implementsReturn = typeof this._generator["return"] !== "undefined";

                                    var result;
                                    if (!implementsReturn) {
                                        var reason = new Promise.CancellationError("generator .return() sentinel");
                                        Promise.coroutine.returnSentinel = reason;
                                        this._promise._attachExtraTrace(reason);
                                        this._promise._pushContext();
                                        result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                                        this._promise._popContext();
                                    } else {
                                        this._promise._pushContext();
                                        result = tryCatch(this._generator["return"]).call(this._generator, undefined);
                                        this._promise._popContext();
                                    }
                                    this._cancellationPhase = true;
                                    this._yieldedPromise = null;
                                    this._continue(result);
                                };

                                PromiseSpawn.prototype._promiseFulfilled = function (value) {
                                    this._yieldedPromise = null;
                                    this._promise._pushContext();
                                    var result = tryCatch(this._generator.next).call(this._generator, value);
                                    this._promise._popContext();
                                    this._continue(result);
                                };

                                PromiseSpawn.prototype._promiseRejected = function (reason) {
                                    this._yieldedPromise = null;
                                    this._promise._attachExtraTrace(reason);
                                    this._promise._pushContext();
                                    var result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                                    this._promise._popContext();
                                    this._continue(result);
                                };

                                PromiseSpawn.prototype._resultCancelled = function () {
                                    if (this._yieldedPromise instanceof Promise) {
                                        var promise = this._yieldedPromise;
                                        this._yieldedPromise = null;
                                        promise.cancel();
                                    }
                                };

                                PromiseSpawn.prototype.promise = function () {
                                    return this._promise;
                                };

                                PromiseSpawn.prototype._run = function () {
                                    this._generator = this._generatorFunction.call(this._receiver);
                                    this._receiver = this._generatorFunction = undefined;
                                    this._promiseFulfilled(undefined);
                                };

                                PromiseSpawn.prototype._continue = function (result) {
                                    var promise = this._promise;
                                    if (result === errorObj) {
                                        this._cleanup();
                                        if (this._cancellationPhase) {
                                            return promise.cancel();
                                        } else {
                                            return promise._rejectCallback(result.e, false);
                                        }
                                    }

                                    var value = result.value;
                                    if (result.done === true) {
                                        this._cleanup();
                                        if (this._cancellationPhase) {
                                            return promise.cancel();
                                        } else {
                                            return promise._resolveCallback(value);
                                        }
                                    } else {
                                        var maybePromise = tryConvertToPromise(value, this._promise);
                                        if (!(maybePromise instanceof Promise)) {
                                            maybePromise = promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise);
                                            if (maybePromise === null) {
                                                this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", value) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                                                return;
                                            }
                                        }
                                        maybePromise = maybePromise._target();
                                        var bitField = maybePromise._bitField;
                                        ;
                                        if ((bitField & 50397184) === 0) {
                                            this._yieldedPromise = maybePromise;
                                            maybePromise._proxy(this, null);
                                        } else if ((bitField & 33554432) !== 0) {
                                            Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value());
                                        } else if ((bitField & 16777216) !== 0) {
                                            Promise._async.invoke(this._promiseRejected, this, maybePromise._reason());
                                        } else {
                                            this._promiseCancelled();
                                        }
                                    }
                                };

                                Promise.coroutine = function (generatorFunction, options) {
                                    if (typeof generatorFunction !== "function") {
                                        throw new TypeError("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                    var yieldHandler = Object(options).yieldHandler;
                                    var PromiseSpawn$ = PromiseSpawn;
                                    var stack = new Error().stack;
                                    return function () {
                                        var generator = generatorFunction.apply(this, arguments);
                                        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler, stack);
                                        var ret = spawn.promise();
                                        spawn._generator = generator;
                                        spawn._promiseFulfilled(undefined);
                                        return ret;
                                    };
                                };

                                Promise.coroutine.addYieldHandler = function (fn) {
                                    if (typeof fn !== "function") {
                                        throw new TypeError("expecting a function but got " + util.classString(fn));
                                    }
                                    yieldHandlers.push(fn);
                                };

                                Promise.spawn = function (generatorFunction) {
                                    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
                                    if (typeof generatorFunction !== "function") {
                                        return apiRejection("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                    var spawn = new PromiseSpawn(generatorFunction, this);
                                    var ret = spawn.promise();
                                    spawn._run(Promise.spawn);
                                    return ret;
                                };
                            };
                        }, { "./errors": 12, "./util": 36 }], 17: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain) {
                                var util = _dereq_("./util");
                                var canEvaluate = util.canEvaluate;
                                var tryCatch = util.tryCatch;
                                var errorObj = util.errorObj;
                                var reject;

                                if (false) {
                                    if (canEvaluate) {
                                        var thenCallback = function thenCallback(i) {
                                            return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
                                        };

                                        var promiseSetter = function promiseSetter(i) {
                                            return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
                                        };

                                        var generateHolderClass = function generateHolderClass(total) {
                                            var props = new Array(total);
                                            for (var i = 0; i < props.length; ++i) {
                                                props[i] = "this.p" + (i + 1);
                                            }
                                            var assignment = props.join(" = ") + " = null;";
                                            var cancellationCode = "var promise;\n" + props.map(function (prop) {
                                                return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
                                            }).join("\n");
                                            var passedArguments = props.join(", ");
                                            var name = "Holder$" + total;

                                            var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

                                            code = code.replace(/\[TheName\]/g, name).replace(/\[TheTotal\]/g, total).replace(/\[ThePassedArguments\]/g, passedArguments).replace(/\[TheProperties\]/g, assignment).replace(/\[CancellationCode\]/g, cancellationCode);

                                            return new Function("tryCatch", "errorObj", "Promise", "async", code)(tryCatch, errorObj, Promise, async);
                                        };

                                        var holderClasses = [];
                                        var thenCallbacks = [];
                                        var promiseSetters = [];

                                        for (var i = 0; i < 8; ++i) {
                                            holderClasses.push(generateHolderClass(i + 1));
                                            thenCallbacks.push(thenCallback(i + 1));
                                            promiseSetters.push(promiseSetter(i + 1));
                                        }

                                        reject = function reject(reason) {
                                            this._reject(reason);
                                        };
                                    }
                                }

                                Promise.join = function () {
                                    var last = arguments.length - 1;
                                    var fn;
                                    if (last > 0 && typeof arguments[last] === "function") {
                                        fn = arguments[last];
                                        if (false) {
                                            if (last <= 8 && canEvaluate) {
                                                var ret = new Promise(INTERNAL);
                                                ret._captureStackTrace();
                                                var HolderClass = holderClasses[last - 1];
                                                var holder = new HolderClass(fn);
                                                var callbacks = thenCallbacks;

                                                for (var i = 0; i < last; ++i) {
                                                    var maybePromise = tryConvertToPromise(arguments[i], ret);
                                                    if (maybePromise instanceof Promise) {
                                                        maybePromise = maybePromise._target();
                                                        var bitField = maybePromise._bitField;
                                                        ;
                                                        if ((bitField & 50397184) === 0) {
                                                            maybePromise._then(callbacks[i], reject, undefined, ret, holder);
                                                            promiseSetters[i](maybePromise, holder);
                                                            holder.asyncNeeded = false;
                                                        } else if ((bitField & 33554432) !== 0) {
                                                            callbacks[i].call(ret, maybePromise._value(), holder);
                                                        } else if ((bitField & 16777216) !== 0) {
                                                            ret._reject(maybePromise._reason());
                                                        } else {
                                                            ret._cancel();
                                                        }
                                                    } else {
                                                        callbacks[i].call(ret, maybePromise, holder);
                                                    }
                                                }

                                                if (!ret._isFateSealed()) {
                                                    if (holder.asyncNeeded) {
                                                        var domain = getDomain();
                                                        if (domain !== null) {
                                                            holder.fn = util.domainBind(domain, holder.fn);
                                                        }
                                                    }
                                                    ret._setAsyncGuaranteed();
                                                    ret._setOnCancel(holder);
                                                }
                                                return ret;
                                            }
                                        }
                                    }
                                    var args = [].slice.call(arguments);;
                                    if (fn) args.pop();
                                    var ret = new PromiseArray(args).promise();
                                    return fn !== undefined ? ret.spread(fn) : ret;
                                };
                            };
                        }, { "./util": 36 }], 18: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                                var getDomain = Promise._getDomain;
                                var util = _dereq_("./util");
                                var tryCatch = util.tryCatch;
                                var errorObj = util.errorObj;
                                var async = Promise._async;

                                function MappingPromiseArray(promises, fn, limit, _filter) {
                                    this.constructor$(promises);
                                    this._promise._captureStackTrace();
                                    var domain = getDomain();
                                    this._callback = domain === null ? fn : util.domainBind(domain, fn);
                                    this._preservedValues = _filter === INTERNAL ? new Array(this.length()) : null;
                                    this._limit = limit;
                                    this._inFlight = 0;
                                    this._queue = [];
                                    async.invoke(this._asyncInit, this, undefined);
                                }
                                util.inherits(MappingPromiseArray, PromiseArray);

                                MappingPromiseArray.prototype._asyncInit = function () {
                                    this._init$(undefined, -2);
                                };

                                MappingPromiseArray.prototype._init = function () {};

                                MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
                                    var values = this._values;
                                    var length = this.length();
                                    var preservedValues = this._preservedValues;
                                    var limit = this._limit;

                                    if (index < 0) {
                                        index = index * -1 - 1;
                                        values[index] = value;
                                        if (limit >= 1) {
                                            this._inFlight--;
                                            this._drainQueue();
                                            if (this._isResolved()) return true;
                                        }
                                    } else {
                                        if (limit >= 1 && this._inFlight >= limit) {
                                            values[index] = value;
                                            this._queue.push(index);
                                            return false;
                                        }
                                        if (preservedValues !== null) preservedValues[index] = value;

                                        var promise = this._promise;
                                        var callback = this._callback;
                                        var receiver = promise._boundValue();
                                        promise._pushContext();
                                        var ret = tryCatch(callback).call(receiver, value, index, length);
                                        var promiseCreated = promise._popContext();
                                        debug.checkForgottenReturns(ret, promiseCreated, preservedValues !== null ? "Promise.filter" : "Promise.map", promise);
                                        if (ret === errorObj) {
                                            this._reject(ret.e);
                                            return true;
                                        }

                                        var maybePromise = tryConvertToPromise(ret, this._promise);
                                        if (maybePromise instanceof Promise) {
                                            maybePromise = maybePromise._target();
                                            var bitField = maybePromise._bitField;
                                            ;
                                            if ((bitField & 50397184) === 0) {
                                                if (limit >= 1) this._inFlight++;
                                                values[index] = maybePromise;
                                                maybePromise._proxy(this, (index + 1) * -1);
                                                return false;
                                            } else if ((bitField & 33554432) !== 0) {
                                                ret = maybePromise._value();
                                            } else if ((bitField & 16777216) !== 0) {
                                                this._reject(maybePromise._reason());
                                                return true;
                                            } else {
                                                this._cancel();
                                                return true;
                                            }
                                        }
                                        values[index] = ret;
                                    }
                                    var totalResolved = ++this._totalResolved;
                                    if (totalResolved >= length) {
                                        if (preservedValues !== null) {
                                            this._filter(values, preservedValues);
                                        } else {
                                            this._resolve(values);
                                        }
                                        return true;
                                    }
                                    return false;
                                };

                                MappingPromiseArray.prototype._drainQueue = function () {
                                    var queue = this._queue;
                                    var limit = this._limit;
                                    var values = this._values;
                                    while (queue.length > 0 && this._inFlight < limit) {
                                        if (this._isResolved()) return;
                                        var index = queue.pop();
                                        this._promiseFulfilled(values[index], index);
                                    }
                                };

                                MappingPromiseArray.prototype._filter = function (booleans, values) {
                                    var len = values.length;
                                    var ret = new Array(len);
                                    var j = 0;
                                    for (var i = 0; i < len; ++i) {
                                        if (booleans[i]) ret[j++] = values[i];
                                    }
                                    ret.length = j;
                                    this._resolve(ret);
                                };

                                MappingPromiseArray.prototype.preservedValues = function () {
                                    return this._preservedValues;
                                };

                                function map(promises, fn, options, _filter) {
                                    if (typeof fn !== "function") {
                                        return apiRejection("expecting a function but got " + util.classString(fn));
                                    }

                                    var limit = 0;
                                    if (options !== undefined) {
                                        if ((typeof options === "undefined" ? "undefined" : _typeof2(options)) === "object" && options !== null) {
                                            if (typeof options.concurrency !== "number") {
                                                return Promise.reject(new TypeError("'concurrency' must be a number but it is " + util.classString(options.concurrency)));
                                            }
                                            limit = options.concurrency;
                                        } else {
                                            return Promise.reject(new TypeError("options argument must be an object but it is " + util.classString(options)));
                                        }
                                    }
                                    limit = typeof limit === "number" && isFinite(limit) && limit >= 1 ? limit : 0;
                                    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
                                }

                                Promise.prototype.map = function (fn, options) {
                                    return map(this, fn, options, null);
                                };

                                Promise.map = function (promises, fn, options, _filter) {
                                    return map(promises, fn, options, _filter);
                                };
                            };
                        }, { "./util": 36 }], 19: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
                                var util = _dereq_("./util");
                                var tryCatch = util.tryCatch;

                                Promise.method = function (fn) {
                                    if (typeof fn !== "function") {
                                        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
                                    }
                                    return function () {
                                        var ret = new Promise(INTERNAL);
                                        ret._captureStackTrace();
                                        ret._pushContext();
                                        var value = tryCatch(fn).apply(this, arguments);
                                        var promiseCreated = ret._popContext();
                                        debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret);
                                        ret._resolveFromSyncValue(value);
                                        return ret;
                                    };
                                };

                                Promise.attempt = Promise["try"] = function (fn) {
                                    if (typeof fn !== "function") {
                                        return apiRejection("expecting a function but got " + util.classString(fn));
                                    }
                                    var ret = new Promise(INTERNAL);
                                    ret._captureStackTrace();
                                    ret._pushContext();
                                    var value;
                                    if (arguments.length > 1) {
                                        debug.deprecated("calling Promise.try with more than 1 argument");
                                        var arg = arguments[1];
                                        var ctx = arguments[2];
                                        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg) : tryCatch(fn).call(ctx, arg);
                                    } else {
                                        value = tryCatch(fn)();
                                    }
                                    var promiseCreated = ret._popContext();
                                    debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret);
                                    ret._resolveFromSyncValue(value);
                                    return ret;
                                };

                                Promise.prototype._resolveFromSyncValue = function (value) {
                                    if (value === util.errorObj) {
                                        this._rejectCallback(value.e, false);
                                    } else {
                                        this._resolveCallback(value, true);
                                    }
                                };
                            };
                        }, { "./util": 36 }], 20: [function (_dereq_, module, exports) {
                            "use strict";

                            var util = _dereq_("./util");
                            var maybeWrapAsError = util.maybeWrapAsError;
                            var errors = _dereq_("./errors");
                            var OperationalError = errors.OperationalError;
                            var es5 = _dereq_("./es5");

                            function isUntypedError(obj) {
                                return obj instanceof Error && es5.getPrototypeOf(obj) === Error.prototype;
                            }

                            var rErrorKey = /^(?:name|message|stack|cause)$/;
                            function wrapAsOperationalError(obj) {
                                var ret;
                                if (isUntypedError(obj)) {
                                    ret = new OperationalError(obj);
                                    ret.name = obj.name;
                                    ret.message = obj.message;
                                    ret.stack = obj.stack;
                                    var keys = es5.keys(obj);
                                    for (var i = 0; i < keys.length; ++i) {
                                        var key = keys[i];
                                        if (!rErrorKey.test(key)) {
                                            ret[key] = obj[key];
                                        }
                                    }
                                    return ret;
                                }
                                util.markAsOriginatingFromRejection(obj);
                                return obj;
                            }

                            function nodebackForPromise(promise, multiArgs) {
                                return function (err, value) {
                                    if (promise === null) return;
                                    if (err) {
                                        var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
                                        promise._attachExtraTrace(wrapped);
                                        promise._reject(wrapped);
                                    } else if (!multiArgs) {
                                        promise._fulfill(value);
                                    } else {
                                        var args = [].slice.call(arguments, 1);;
                                        promise._fulfill(args);
                                    }
                                    promise = null;
                                };
                            }

                            module.exports = nodebackForPromise;
                        }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise) {
                                var util = _dereq_("./util");
                                var async = Promise._async;
                                var tryCatch = util.tryCatch;
                                var errorObj = util.errorObj;

                                function spreadAdapter(val, nodeback) {
                                    var promise = this;
                                    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
                                    var ret = tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
                                    if (ret === errorObj) {
                                        async.throwLater(ret.e);
                                    }
                                }

                                function successAdapter(val, nodeback) {
                                    var promise = this;
                                    var receiver = promise._boundValue();
                                    var ret = val === undefined ? tryCatch(nodeback).call(receiver, null) : tryCatch(nodeback).call(receiver, null, val);
                                    if (ret === errorObj) {
                                        async.throwLater(ret.e);
                                    }
                                }
                                function errorAdapter(reason, nodeback) {
                                    var promise = this;
                                    if (!reason) {
                                        var newReason = new Error(reason + "");
                                        newReason.cause = reason;
                                        reason = newReason;
                                    }
                                    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
                                    if (ret === errorObj) {
                                        async.throwLater(ret.e);
                                    }
                                }

                                Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback, options) {
                                    if (typeof nodeback == "function") {
                                        var adapter = successAdapter;
                                        if (options !== undefined && Object(options).spread) {
                                            adapter = spreadAdapter;
                                        }
                                        this._then(adapter, errorAdapter, undefined, this, nodeback);
                                    }
                                    return this;
                                };
                            };
                        }, { "./util": 36 }], 22: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function () {
                                var makeSelfResolutionError = function makeSelfResolutionError() {
                                    return new TypeError("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
                                };
                                var reflectHandler = function reflectHandler() {
                                    return new Promise.PromiseInspection(this._target());
                                };
                                var apiRejection = function apiRejection(msg) {
                                    return Promise.reject(new TypeError(msg));
                                };
                                function Proxyable() {}
                                var UNDEFINED_BINDING = {};
                                var util = _dereq_("./util");

                                var getDomain;
                                if (util.isNode) {
                                    getDomain = function getDomain() {
                                        var ret = process.domain;
                                        if (ret === undefined) ret = null;
                                        return ret;
                                    };
                                } else {
                                    getDomain = function getDomain() {
                                        return null;
                                    };
                                }
                                util.notEnumerableProp(Promise, "_getDomain", getDomain);

                                var es5 = _dereq_("./es5");
                                var Async = _dereq_("./async");
                                var async = new Async();
                                es5.defineProperty(Promise, "_async", { value: async });
                                var errors = _dereq_("./errors");
                                var TypeError = Promise.TypeError = errors.TypeError;
                                Promise.RangeError = errors.RangeError;
                                var CancellationError = Promise.CancellationError = errors.CancellationError;
                                Promise.TimeoutError = errors.TimeoutError;
                                Promise.OperationalError = errors.OperationalError;
                                Promise.RejectionError = errors.OperationalError;
                                Promise.AggregateError = errors.AggregateError;
                                var INTERNAL = function INTERNAL() {};
                                var APPLY = {};
                                var NEXT_FILTER = {};
                                var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
                                var PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable);
                                var Context = _dereq_("./context")(Promise);

                                var createContext = Context.create;
                                var debug = _dereq_("./debuggability")(Promise, Context);
                                var CapturedTrace = debug.CapturedTrace;
                                var PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise);
                                var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
                                var nodebackForPromise = _dereq_("./nodeback");
                                var errorObj = util.errorObj;
                                var tryCatch = util.tryCatch;
                                function check(self, executor) {
                                    if (typeof executor !== "function") {
                                        throw new TypeError("expecting a function but got " + util.classString(executor));
                                    }
                                    if (self.constructor !== Promise) {
                                        throw new TypeError("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                }

                                function Promise(executor) {
                                    this._bitField = 0;
                                    this._fulfillmentHandler0 = undefined;
                                    this._rejectionHandler0 = undefined;
                                    this._promise0 = undefined;
                                    this._receiver0 = undefined;
                                    if (executor !== INTERNAL) {
                                        check(this, executor);
                                        this._resolveFromExecutor(executor);
                                    }
                                    this._promiseCreated();
                                    this._fireEvent("promiseCreated", this);
                                }

                                Promise.prototype.toString = function () {
                                    return "[object Promise]";
                                };

                                Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
                                    var len = arguments.length;
                                    if (len > 1) {
                                        var catchInstances = new Array(len - 1),
                                            j = 0,
                                            i;
                                        for (i = 0; i < len - 1; ++i) {
                                            var item = arguments[i];
                                            if (util.isObject(item)) {
                                                catchInstances[j++] = item;
                                            } else {
                                                return apiRejection("expecting an object but got " + "A catch statement predicate " + util.classString(item));
                                            }
                                        }
                                        catchInstances.length = j;
                                        fn = arguments[i];
                                        return this.then(undefined, catchFilter(catchInstances, fn, this));
                                    }
                                    return this.then(undefined, fn);
                                };

                                Promise.prototype.reflect = function () {
                                    return this._then(reflectHandler, reflectHandler, undefined, this, undefined);
                                };

                                Promise.prototype.then = function (didFulfill, didReject) {
                                    if (debug.warnings() && arguments.length > 0 && typeof didFulfill !== "function" && typeof didReject !== "function") {
                                        var msg = ".then() only accepts functions but was passed: " + util.classString(didFulfill);
                                        if (arguments.length > 1) {
                                            msg += ", " + util.classString(didReject);
                                        }
                                        this._warn(msg);
                                    }
                                    return this._then(didFulfill, didReject, undefined, undefined, undefined);
                                };

                                Promise.prototype.done = function (didFulfill, didReject) {
                                    var promise = this._then(didFulfill, didReject, undefined, undefined, undefined);
                                    promise._setIsFinal();
                                };

                                Promise.prototype.spread = function (fn) {
                                    if (typeof fn !== "function") {
                                        return apiRejection("expecting a function but got " + util.classString(fn));
                                    }
                                    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
                                };

                                Promise.prototype.toJSON = function () {
                                    var ret = {
                                        isFulfilled: false,
                                        isRejected: false,
                                        fulfillmentValue: undefined,
                                        rejectionReason: undefined
                                    };
                                    if (this.isFulfilled()) {
                                        ret.fulfillmentValue = this.value();
                                        ret.isFulfilled = true;
                                    } else if (this.isRejected()) {
                                        ret.rejectionReason = this.reason();
                                        ret.isRejected = true;
                                    }
                                    return ret;
                                };

                                Promise.prototype.all = function () {
                                    if (arguments.length > 0) {
                                        this._warn(".all() was passed arguments but it does not take any");
                                    }
                                    return new PromiseArray(this).promise();
                                };

                                Promise.prototype.error = function (fn) {
                                    return this.caught(util.originatesFromRejection, fn);
                                };

                                Promise.getNewLibraryCopy = module.exports;

                                Promise.is = function (val) {
                                    return val instanceof Promise;
                                };

                                Promise.fromNode = Promise.fromCallback = function (fn) {
                                    var ret = new Promise(INTERNAL);
                                    ret._captureStackTrace();
                                    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : false;
                                    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
                                    if (result === errorObj) {
                                        ret._rejectCallback(result.e, true);
                                    }
                                    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
                                    return ret;
                                };

                                Promise.all = function (promises) {
                                    return new PromiseArray(promises).promise();
                                };

                                Promise.cast = function (obj) {
                                    var ret = tryConvertToPromise(obj);
                                    if (!(ret instanceof Promise)) {
                                        ret = new Promise(INTERNAL);
                                        ret._captureStackTrace();
                                        ret._setFulfilled();
                                        ret._rejectionHandler0 = obj;
                                    }
                                    return ret;
                                };

                                Promise.resolve = Promise.fulfilled = Promise.cast;

                                Promise.reject = Promise.rejected = function (reason) {
                                    var ret = new Promise(INTERNAL);
                                    ret._captureStackTrace();
                                    ret._rejectCallback(reason, true);
                                    return ret;
                                };

                                Promise.setScheduler = function (fn) {
                                    if (typeof fn !== "function") {
                                        throw new TypeError("expecting a function but got " + util.classString(fn));
                                    }
                                    return async.setScheduler(fn);
                                };

                                Promise.prototype._then = function (didFulfill, didReject, _, receiver, internalData) {
                                    var haveInternalData = internalData !== undefined;
                                    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
                                    var target = this._target();
                                    var bitField = target._bitField;

                                    if (!haveInternalData) {
                                        promise._propagateFrom(this, 3);
                                        promise._captureStackTrace();
                                        if (receiver === undefined && (this._bitField & 2097152) !== 0) {
                                            if (!((bitField & 50397184) === 0)) {
                                                receiver = this._boundValue();
                                            } else {
                                                receiver = target === this ? undefined : this._boundTo;
                                            }
                                        }
                                        this._fireEvent("promiseChained", this, promise);
                                    }

                                    var domain = getDomain();
                                    if (!((bitField & 50397184) === 0)) {
                                        var handler,
                                            value,
                                            settler = target._settlePromiseCtx;
                                        if ((bitField & 33554432) !== 0) {
                                            value = target._rejectionHandler0;
                                            handler = didFulfill;
                                        } else if ((bitField & 16777216) !== 0) {
                                            value = target._fulfillmentHandler0;
                                            handler = didReject;
                                            target._unsetRejectionIsUnhandled();
                                        } else {
                                            settler = target._settlePromiseLateCancellationObserver;
                                            value = new CancellationError("late cancellation observer");
                                            target._attachExtraTrace(value);
                                            handler = didReject;
                                        }

                                        async.invoke(settler, target, {
                                            handler: domain === null ? handler : typeof handler === "function" && util.domainBind(domain, handler),
                                            promise: promise,
                                            receiver: receiver,
                                            value: value
                                        });
                                    } else {
                                        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
                                    }

                                    return promise;
                                };

                                Promise.prototype._length = function () {
                                    return this._bitField & 65535;
                                };

                                Promise.prototype._isFateSealed = function () {
                                    return (this._bitField & 117506048) !== 0;
                                };

                                Promise.prototype._isFollowing = function () {
                                    return (this._bitField & 67108864) === 67108864;
                                };

                                Promise.prototype._setLength = function (len) {
                                    this._bitField = this._bitField & -65536 | len & 65535;
                                };

                                Promise.prototype._setFulfilled = function () {
                                    this._bitField = this._bitField | 33554432;
                                    this._fireEvent("promiseFulfilled", this);
                                };

                                Promise.prototype._setRejected = function () {
                                    this._bitField = this._bitField | 16777216;
                                    this._fireEvent("promiseRejected", this);
                                };

                                Promise.prototype._setFollowing = function () {
                                    this._bitField = this._bitField | 67108864;
                                    this._fireEvent("promiseResolved", this);
                                };

                                Promise.prototype._setIsFinal = function () {
                                    this._bitField = this._bitField | 4194304;
                                };

                                Promise.prototype._isFinal = function () {
                                    return (this._bitField & 4194304) > 0;
                                };

                                Promise.prototype._unsetCancelled = function () {
                                    this._bitField = this._bitField & ~65536;
                                };

                                Promise.prototype._setCancelled = function () {
                                    this._bitField = this._bitField | 65536;
                                    this._fireEvent("promiseCancelled", this);
                                };

                                Promise.prototype._setWillBeCancelled = function () {
                                    this._bitField = this._bitField | 8388608;
                                };

                                Promise.prototype._setAsyncGuaranteed = function () {
                                    if (async.hasCustomScheduler()) return;
                                    this._bitField = this._bitField | 134217728;
                                };

                                Promise.prototype._receiverAt = function (index) {
                                    var ret = index === 0 ? this._receiver0 : this[index * 4 - 4 + 3];
                                    if (ret === UNDEFINED_BINDING) {
                                        return undefined;
                                    } else if (ret === undefined && this._isBound()) {
                                        return this._boundValue();
                                    }
                                    return ret;
                                };

                                Promise.prototype._promiseAt = function (index) {
                                    return this[index * 4 - 4 + 2];
                                };

                                Promise.prototype._fulfillmentHandlerAt = function (index) {
                                    return this[index * 4 - 4 + 0];
                                };

                                Promise.prototype._rejectionHandlerAt = function (index) {
                                    return this[index * 4 - 4 + 1];
                                };

                                Promise.prototype._boundValue = function () {};

                                Promise.prototype._migrateCallback0 = function (follower) {
                                    var bitField = follower._bitField;
                                    var fulfill = follower._fulfillmentHandler0;
                                    var reject = follower._rejectionHandler0;
                                    var promise = follower._promise0;
                                    var receiver = follower._receiverAt(0);
                                    if (receiver === undefined) receiver = UNDEFINED_BINDING;
                                    this._addCallbacks(fulfill, reject, promise, receiver, null);
                                };

                                Promise.prototype._migrateCallbackAt = function (follower, index) {
                                    var fulfill = follower._fulfillmentHandlerAt(index);
                                    var reject = follower._rejectionHandlerAt(index);
                                    var promise = follower._promiseAt(index);
                                    var receiver = follower._receiverAt(index);
                                    if (receiver === undefined) receiver = UNDEFINED_BINDING;
                                    this._addCallbacks(fulfill, reject, promise, receiver, null);
                                };

                                Promise.prototype._addCallbacks = function (fulfill, reject, promise, receiver, domain) {
                                    var index = this._length();

                                    if (index >= 65535 - 4) {
                                        index = 0;
                                        this._setLength(0);
                                    }

                                    if (index === 0) {
                                        this._promise0 = promise;
                                        this._receiver0 = receiver;
                                        if (typeof fulfill === "function") {
                                            this._fulfillmentHandler0 = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                        }
                                        if (typeof reject === "function") {
                                            this._rejectionHandler0 = domain === null ? reject : util.domainBind(domain, reject);
                                        }
                                    } else {
                                        var base = index * 4 - 4;
                                        this[base + 2] = promise;
                                        this[base + 3] = receiver;
                                        if (typeof fulfill === "function") {
                                            this[base + 0] = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                        }
                                        if (typeof reject === "function") {
                                            this[base + 1] = domain === null ? reject : util.domainBind(domain, reject);
                                        }
                                    }
                                    this._setLength(index + 1);
                                    return index;
                                };

                                Promise.prototype._proxy = function (proxyable, arg) {
                                    this._addCallbacks(undefined, undefined, arg, proxyable, null);
                                };

                                Promise.prototype._resolveCallback = function (value, shouldBind) {
                                    if ((this._bitField & 117506048) !== 0) return;
                                    if (value === this) return this._rejectCallback(makeSelfResolutionError(), false);
                                    var maybePromise = tryConvertToPromise(value, this);
                                    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

                                    if (shouldBind) this._propagateFrom(maybePromise, 2);

                                    var promise = maybePromise._target();

                                    if (promise === this) {
                                        this._reject(makeSelfResolutionError());
                                        return;
                                    }

                                    var bitField = promise._bitField;
                                    if ((bitField & 50397184) === 0) {
                                        var len = this._length();
                                        if (len > 0) promise._migrateCallback0(this);
                                        for (var i = 1; i < len; ++i) {
                                            promise._migrateCallbackAt(this, i);
                                        }
                                        this._setFollowing();
                                        this._setLength(0);
                                        this._setFollowee(promise);
                                    } else if ((bitField & 33554432) !== 0) {
                                        this._fulfill(promise._value());
                                    } else if ((bitField & 16777216) !== 0) {
                                        this._reject(promise._reason());
                                    } else {
                                        var reason = new CancellationError("late cancellation observer");
                                        promise._attachExtraTrace(reason);
                                        this._reject(reason);
                                    }
                                };

                                Promise.prototype._rejectCallback = function (reason, synchronous, ignoreNonErrorWarnings) {
                                    var trace = util.ensureErrorObject(reason);
                                    var hasStack = trace === reason;
                                    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
                                        var message = "a promise was rejected with a non-error: " + util.classString(reason);
                                        this._warn(message, true);
                                    }
                                    this._attachExtraTrace(trace, synchronous ? hasStack : false);
                                    this._reject(reason);
                                };

                                Promise.prototype._resolveFromExecutor = function (executor) {
                                    var promise = this;
                                    this._captureStackTrace();
                                    this._pushContext();
                                    var synchronous = true;
                                    var r = this._execute(executor, function (value) {
                                        promise._resolveCallback(value);
                                    }, function (reason) {
                                        promise._rejectCallback(reason, synchronous);
                                    });
                                    synchronous = false;
                                    this._popContext();

                                    if (r !== undefined) {
                                        promise._rejectCallback(r, true);
                                    }
                                };

                                Promise.prototype._settlePromiseFromHandler = function (handler, receiver, value, promise) {
                                    var bitField = promise._bitField;
                                    if ((bitField & 65536) !== 0) return;
                                    promise._pushContext();
                                    var x;
                                    if (receiver === APPLY) {
                                        if (!value || typeof value.length !== "number") {
                                            x = errorObj;
                                            x.e = new TypeError("cannot .spread() a non-array: " + util.classString(value));
                                        } else {
                                            x = tryCatch(handler).apply(this._boundValue(), value);
                                        }
                                    } else {
                                        x = tryCatch(handler).call(receiver, value);
                                    }
                                    var promiseCreated = promise._popContext();
                                    bitField = promise._bitField;
                                    if ((bitField & 65536) !== 0) return;

                                    if (x === NEXT_FILTER) {
                                        promise._reject(value);
                                    } else if (x === errorObj) {
                                        promise._rejectCallback(x.e, false);
                                    } else {
                                        debug.checkForgottenReturns(x, promiseCreated, "", promise, this);
                                        promise._resolveCallback(x);
                                    }
                                };

                                Promise.prototype._target = function () {
                                    var ret = this;
                                    while (ret._isFollowing()) {
                                        ret = ret._followee();
                                    }return ret;
                                };

                                Promise.prototype._followee = function () {
                                    return this._rejectionHandler0;
                                };

                                Promise.prototype._setFollowee = function (promise) {
                                    this._rejectionHandler0 = promise;
                                };

                                Promise.prototype._settlePromise = function (promise, handler, receiver, value) {
                                    var isPromise = promise instanceof Promise;
                                    var bitField = this._bitField;
                                    var asyncGuaranteed = (bitField & 134217728) !== 0;
                                    if ((bitField & 65536) !== 0) {
                                        if (isPromise) promise._invokeInternalOnCancel();

                                        if (receiver instanceof PassThroughHandlerContext && receiver.isFinallyHandler()) {
                                            receiver.cancelPromise = promise;
                                            if (tryCatch(handler).call(receiver, value) === errorObj) {
                                                promise._reject(errorObj.e);
                                            }
                                        } else if (handler === reflectHandler) {
                                            promise._fulfill(reflectHandler.call(receiver));
                                        } else if (receiver instanceof Proxyable) {
                                            receiver._promiseCancelled(promise);
                                        } else if (isPromise || promise instanceof PromiseArray) {
                                            promise._cancel();
                                        } else {
                                            receiver.cancel();
                                        }
                                    } else if (typeof handler === "function") {
                                        if (!isPromise) {
                                            handler.call(receiver, value, promise);
                                        } else {
                                            if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                            this._settlePromiseFromHandler(handler, receiver, value, promise);
                                        }
                                    } else if (receiver instanceof Proxyable) {
                                        if (!receiver._isResolved()) {
                                            if ((bitField & 33554432) !== 0) {
                                                receiver._promiseFulfilled(value, promise);
                                            } else {
                                                receiver._promiseRejected(value, promise);
                                            }
                                        }
                                    } else if (isPromise) {
                                        if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                        if ((bitField & 33554432) !== 0) {
                                            promise._fulfill(value);
                                        } else {
                                            promise._reject(value);
                                        }
                                    }
                                };

                                Promise.prototype._settlePromiseLateCancellationObserver = function (ctx) {
                                    var handler = ctx.handler;
                                    var promise = ctx.promise;
                                    var receiver = ctx.receiver;
                                    var value = ctx.value;
                                    if (typeof handler === "function") {
                                        if (!(promise instanceof Promise)) {
                                            handler.call(receiver, value, promise);
                                        } else {
                                            this._settlePromiseFromHandler(handler, receiver, value, promise);
                                        }
                                    } else if (promise instanceof Promise) {
                                        promise._reject(value);
                                    }
                                };

                                Promise.prototype._settlePromiseCtx = function (ctx) {
                                    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
                                };

                                Promise.prototype._settlePromise0 = function (handler, value, bitField) {
                                    var promise = this._promise0;
                                    var receiver = this._receiverAt(0);
                                    this._promise0 = undefined;
                                    this._receiver0 = undefined;
                                    this._settlePromise(promise, handler, receiver, value);
                                };

                                Promise.prototype._clearCallbackDataAtIndex = function (index) {
                                    var base = index * 4 - 4;
                                    this[base + 2] = this[base + 3] = this[base + 0] = this[base + 1] = undefined;
                                };

                                Promise.prototype._fulfill = function (value) {
                                    var bitField = this._bitField;
                                    if ((bitField & 117506048) >>> 16) return;
                                    if (value === this) {
                                        var err = makeSelfResolutionError();
                                        this._attachExtraTrace(err);
                                        return this._reject(err);
                                    }
                                    this._setFulfilled();
                                    this._rejectionHandler0 = value;

                                    if ((bitField & 65535) > 0) {
                                        if ((bitField & 134217728) !== 0) {
                                            this._settlePromises();
                                        } else {
                                            async.settlePromises(this);
                                        }
                                    }
                                };

                                Promise.prototype._reject = function (reason) {
                                    var bitField = this._bitField;
                                    if ((bitField & 117506048) >>> 16) return;
                                    this._setRejected();
                                    this._fulfillmentHandler0 = reason;

                                    if (this._isFinal()) {
                                        return async.fatalError(reason, util.isNode);
                                    }

                                    if ((bitField & 65535) > 0) {
                                        async.settlePromises(this);
                                    } else {
                                        this._ensurePossibleRejectionHandled();
                                    }
                                };

                                Promise.prototype._fulfillPromises = function (len, value) {
                                    for (var i = 1; i < len; i++) {
                                        var handler = this._fulfillmentHandlerAt(i);
                                        var promise = this._promiseAt(i);
                                        var receiver = this._receiverAt(i);
                                        this._clearCallbackDataAtIndex(i);
                                        this._settlePromise(promise, handler, receiver, value);
                                    }
                                };

                                Promise.prototype._rejectPromises = function (len, reason) {
                                    for (var i = 1; i < len; i++) {
                                        var handler = this._rejectionHandlerAt(i);
                                        var promise = this._promiseAt(i);
                                        var receiver = this._receiverAt(i);
                                        this._clearCallbackDataAtIndex(i);
                                        this._settlePromise(promise, handler, receiver, reason);
                                    }
                                };

                                Promise.prototype._settlePromises = function () {
                                    var bitField = this._bitField;
                                    var len = bitField & 65535;

                                    if (len > 0) {
                                        if ((bitField & 16842752) !== 0) {
                                            var reason = this._fulfillmentHandler0;
                                            this._settlePromise0(this._rejectionHandler0, reason, bitField);
                                            this._rejectPromises(len, reason);
                                        } else {
                                            var value = this._rejectionHandler0;
                                            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
                                            this._fulfillPromises(len, value);
                                        }
                                        this._setLength(0);
                                    }
                                    this._clearCancellationData();
                                };

                                Promise.prototype._settledValue = function () {
                                    var bitField = this._bitField;
                                    if ((bitField & 33554432) !== 0) {
                                        return this._rejectionHandler0;
                                    } else if ((bitField & 16777216) !== 0) {
                                        return this._fulfillmentHandler0;
                                    }
                                };

                                function deferResolve(v) {
                                    this.promise._resolveCallback(v);
                                }
                                function deferReject(v) {
                                    this.promise._rejectCallback(v, false);
                                }

                                Promise.defer = Promise.pending = function () {
                                    debug.deprecated("Promise.defer", "new Promise");
                                    var promise = new Promise(INTERNAL);
                                    return {
                                        promise: promise,
                                        resolve: deferResolve,
                                        reject: deferReject
                                    };
                                };

                                util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError);

                                _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug);
                                _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
                                _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
                                _dereq_("./direct_resolve")(Promise);
                                _dereq_("./synchronous_inspection")(Promise);
                                _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
                                Promise.Promise = Promise;
                                Promise.version = "3.4.6";
                                _dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                                _dereq_('./call_get.js')(Promise);
                                _dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
                                _dereq_('./timers.js')(Promise, INTERNAL, debug);
                                _dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
                                _dereq_('./nodeify.js')(Promise);
                                _dereq_('./promisify.js')(Promise, INTERNAL);
                                _dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
                                _dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
                                _dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                                _dereq_('./settle.js')(Promise, PromiseArray, debug);
                                _dereq_('./some.js')(Promise, PromiseArray, apiRejection);
                                _dereq_('./filter.js')(Promise, INTERNAL);
                                _dereq_('./each.js')(Promise, INTERNAL);
                                _dereq_('./any.js')(Promise);

                                util.toFastProperties(Promise);
                                util.toFastProperties(Promise.prototype);
                                function fillTypes(value) {
                                    var p = new Promise(INTERNAL);
                                    p._fulfillmentHandler0 = value;
                                    p._rejectionHandler0 = value;
                                    p._promise0 = value;
                                    p._receiver0 = value;
                                }

                                fillTypes({ a: 1 });
                                fillTypes({ b: 2 });
                                fillTypes({ c: 3 });
                                fillTypes(1);
                                fillTypes(function () {});
                                fillTypes(undefined);
                                fillTypes(false);
                                fillTypes(new Promise(INTERNAL));
                                debug.setBounds(Async.firstLineError, util.lastLineError);
                                return Promise;
                            };
                        }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
                                var util = _dereq_("./util");
                                var isArray = util.isArray;

                                function toResolutionValue(val) {
                                    switch (val) {
                                        case -2:
                                            return [];
                                        case -3:
                                            return {};
                                    }
                                }

                                function PromiseArray(values) {
                                    var promise = this._promise = new Promise(INTERNAL);
                                    if (values instanceof Promise) {
                                        promise._propagateFrom(values, 3);
                                    }
                                    promise._setOnCancel(this);
                                    this._values = values;
                                    this._length = 0;
                                    this._totalResolved = 0;
                                    this._init(undefined, -2);
                                }
                                util.inherits(PromiseArray, Proxyable);

                                PromiseArray.prototype.length = function () {
                                    return this._length;
                                };

                                PromiseArray.prototype.promise = function () {
                                    return this._promise;
                                };

                                PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
                                    var values = tryConvertToPromise(this._values, this._promise);
                                    if (values instanceof Promise) {
                                        values = values._target();
                                        var bitField = values._bitField;
                                        ;
                                        this._values = values;

                                        if ((bitField & 50397184) === 0) {
                                            this._promise._setAsyncGuaranteed();
                                            return values._then(init, this._reject, undefined, this, resolveValueIfEmpty);
                                        } else if ((bitField & 33554432) !== 0) {
                                            values = values._value();
                                        } else if ((bitField & 16777216) !== 0) {
                                            return this._reject(values._reason());
                                        } else {
                                            return this._cancel();
                                        }
                                    }
                                    values = util.asArray(values);
                                    if (values === null) {
                                        var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
                                        this._promise._rejectCallback(err, false);
                                        return;
                                    }

                                    if (values.length === 0) {
                                        if (resolveValueIfEmpty === -5) {
                                            this._resolveEmptyArray();
                                        } else {
                                            this._resolve(toResolutionValue(resolveValueIfEmpty));
                                        }
                                        return;
                                    }
                                    this._iterate(values);
                                };

                                PromiseArray.prototype._iterate = function (values) {
                                    var len = this.getActualLength(values.length);
                                    this._length = len;
                                    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
                                    var result = this._promise;
                                    var isResolved = false;
                                    var bitField = null;
                                    for (var i = 0; i < len; ++i) {
                                        var maybePromise = tryConvertToPromise(values[i], result);

                                        if (maybePromise instanceof Promise) {
                                            maybePromise = maybePromise._target();
                                            bitField = maybePromise._bitField;
                                        } else {
                                            bitField = null;
                                        }

                                        if (isResolved) {
                                            if (bitField !== null) {
                                                maybePromise.suppressUnhandledRejections();
                                            }
                                        } else if (bitField !== null) {
                                            if ((bitField & 50397184) === 0) {
                                                maybePromise._proxy(this, i);
                                                this._values[i] = maybePromise;
                                            } else if ((bitField & 33554432) !== 0) {
                                                isResolved = this._promiseFulfilled(maybePromise._value(), i);
                                            } else if ((bitField & 16777216) !== 0) {
                                                isResolved = this._promiseRejected(maybePromise._reason(), i);
                                            } else {
                                                isResolved = this._promiseCancelled(i);
                                            }
                                        } else {
                                            isResolved = this._promiseFulfilled(maybePromise, i);
                                        }
                                    }
                                    if (!isResolved) result._setAsyncGuaranteed();
                                };

                                PromiseArray.prototype._isResolved = function () {
                                    return this._values === null;
                                };

                                PromiseArray.prototype._resolve = function (value) {
                                    this._values = null;
                                    this._promise._fulfill(value);
                                };

                                PromiseArray.prototype._cancel = function () {
                                    if (this._isResolved() || !this._promise._isCancellable()) return;
                                    this._values = null;
                                    this._promise._cancel();
                                };

                                PromiseArray.prototype._reject = function (reason) {
                                    this._values = null;
                                    this._promise._rejectCallback(reason, false);
                                };

                                PromiseArray.prototype._promiseFulfilled = function (value, index) {
                                    this._values[index] = value;
                                    var totalResolved = ++this._totalResolved;
                                    if (totalResolved >= this._length) {
                                        this._resolve(this._values);
                                        return true;
                                    }
                                    return false;
                                };

                                PromiseArray.prototype._promiseCancelled = function () {
                                    this._cancel();
                                    return true;
                                };

                                PromiseArray.prototype._promiseRejected = function (reason) {
                                    this._totalResolved++;
                                    this._reject(reason);
                                    return true;
                                };

                                PromiseArray.prototype._resultCancelled = function () {
                                    if (this._isResolved()) return;
                                    var values = this._values;
                                    this._cancel();
                                    if (values instanceof Promise) {
                                        values.cancel();
                                    } else {
                                        for (var i = 0; i < values.length; ++i) {
                                            if (values[i] instanceof Promise) {
                                                values[i].cancel();
                                            }
                                        }
                                    }
                                };

                                PromiseArray.prototype.shouldCopyValues = function () {
                                    return true;
                                };

                                PromiseArray.prototype.getActualLength = function (len) {
                                    return len;
                                };

                                return PromiseArray;
                            };
                        }, { "./util": 36 }], 24: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL) {
                                var THIS = {};
                                var util = _dereq_("./util");
                                var nodebackForPromise = _dereq_("./nodeback");
                                var withAppended = util.withAppended;
                                var maybeWrapAsError = util.maybeWrapAsError;
                                var canEvaluate = util.canEvaluate;
                                var TypeError = _dereq_("./errors").TypeError;
                                var defaultSuffix = "Async";
                                var defaultPromisified = { __isPromisified__: true };
                                var noCopyProps = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"];
                                var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

                                var defaultFilter = function defaultFilter(name) {
                                    return util.isIdentifier(name) && name.charAt(0) !== "_" && name !== "constructor";
                                };

                                function propsFilter(key) {
                                    return !noCopyPropsPattern.test(key);
                                }

                                function isPromisified(fn) {
                                    try {
                                        return fn.__isPromisified__ === true;
                                    } catch (e) {
                                        return false;
                                    }
                                }

                                function hasPromisified(obj, key, suffix) {
                                    var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
                                    return val ? isPromisified(val) : false;
                                }
                                function checkValid(ret, suffix, suffixRegexp) {
                                    for (var i = 0; i < ret.length; i += 2) {
                                        var key = ret[i];
                                        if (suffixRegexp.test(key)) {
                                            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
                                            for (var j = 0; j < ret.length; j += 2) {
                                                if (ret[j] === keyWithoutAsyncSuffix) {
                                                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", suffix));
                                                }
                                            }
                                        }
                                    }
                                }

                                function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
                                    var keys = util.inheritedDataKeys(obj);
                                    var ret = [];
                                    for (var i = 0; i < keys.length; ++i) {
                                        var key = keys[i];
                                        var value = obj[key];
                                        var passesDefaultFilter = filter === defaultFilter ? true : defaultFilter(key, value, obj);
                                        if (typeof value === "function" && !isPromisified(value) && !hasPromisified(obj, key, suffix) && filter(key, value, obj, passesDefaultFilter)) {
                                            ret.push(key, value);
                                        }
                                    }
                                    checkValid(ret, suffix, suffixRegexp);
                                    return ret;
                                }

                                var escapeIdentRegex = function escapeIdentRegex(str) {
                                    return str.replace(/([$])/, "\\$");
                                };

                                var makeNodePromisifiedEval;
                                if (false) {
                                    var switchCaseArgumentOrder = function switchCaseArgumentOrder(likelyArgumentCount) {
                                        var ret = [likelyArgumentCount];
                                        var min = Math.max(0, likelyArgumentCount - 1 - 3);
                                        for (var i = likelyArgumentCount - 1; i >= min; --i) {
                                            ret.push(i);
                                        }
                                        for (var i = likelyArgumentCount + 1; i <= 3; ++i) {
                                            ret.push(i);
                                        }
                                        return ret;
                                    };

                                    var argumentSequence = function argumentSequence(argumentCount) {
                                        return util.filledRange(argumentCount, "_arg", "");
                                    };

                                    var parameterDeclaration = function parameterDeclaration(parameterCount) {
                                        return util.filledRange(Math.max(parameterCount, 3), "_arg", "");
                                    };

                                    var parameterCount = function parameterCount(fn) {
                                        if (typeof fn.length === "number") {
                                            return Math.max(Math.min(fn.length, 1023 + 1), 0);
                                        }
                                        return 0;
                                    };

                                    makeNodePromisifiedEval = function makeNodePromisifiedEval(callback, receiver, originalName, fn, _, multiArgs) {
                                        var newParameterCount = Math.max(0, parameterCount(fn) - 1);
                                        var argumentOrder = switchCaseArgumentOrder(newParameterCount);
                                        var shouldProxyThis = typeof callback === "string" || receiver === THIS;

                                        function generateCallForArgumentCount(count) {
                                            var args = argumentSequence(count).join(", ");
                                            var comma = count > 0 ? ", " : "";
                                            var ret;
                                            if (shouldProxyThis) {
                                                ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
                                            } else {
                                                ret = receiver === undefined ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
                                            }
                                            return ret.replace("{{args}}", args).replace(", ", comma);
                                        }

                                        function generateArgumentSwitchCase() {
                                            var ret = "";
                                            for (var i = 0; i < argumentOrder.length; ++i) {
                                                ret += "case " + argumentOrder[i] + ":" + generateCallForArgumentCount(argumentOrder[i]);
                                            }

                                            ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", shouldProxyThis ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n");
                                            return ret;
                                        }

                                        var getFunctionCode = typeof callback === "string" ? "this != null ? this['" + callback + "'] : fn" : "fn";
                                        var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase()).replace("[GetFunctionCode]", getFunctionCode);
                                        body = body.replace("Parameters", parameterDeclaration(newParameterCount));
                                        return new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", body)(Promise, fn, receiver, withAppended, maybeWrapAsError, nodebackForPromise, util.tryCatch, util.errorObj, util.notEnumerableProp, INTERNAL);
                                    };
                                }

                                function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
                                    var defaultThis = function () {
                                        return this;
                                    }();
                                    var method = callback;
                                    if (typeof method === "string") {
                                        callback = fn;
                                    }
                                    function promisified() {
                                        var _receiver = receiver;
                                        if (receiver === THIS) _receiver = this;
                                        var promise = new Promise(INTERNAL);
                                        promise._captureStackTrace();
                                        var cb = typeof method === "string" && this !== defaultThis ? this[method] : callback;
                                        var fn = nodebackForPromise(promise, multiArgs);
                                        try {
                                            cb.apply(_receiver, withAppended(arguments, fn));
                                        } catch (e) {
                                            promise._rejectCallback(maybeWrapAsError(e), true, true);
                                        }
                                        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
                                        return promise;
                                    }
                                    util.notEnumerableProp(promisified, "__isPromisified__", true);
                                    return promisified;
                                }

                                var makeNodePromisified = canEvaluate ? makeNodePromisifiedEval : makeNodePromisifiedClosure;

                                function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
                                    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
                                    var methods = promisifiableMethods(obj, suffix, suffixRegexp, filter);

                                    for (var i = 0, len = methods.length; i < len; i += 2) {
                                        var key = methods[i];
                                        var fn = methods[i + 1];
                                        var promisifiedKey = key + suffix;
                                        if (promisifier === makeNodePromisified) {
                                            obj[promisifiedKey] = makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                        } else {
                                            var promisified = promisifier(fn, function () {
                                                return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                            });
                                            util.notEnumerableProp(promisified, "__isPromisified__", true);
                                            obj[promisifiedKey] = promisified;
                                        }
                                    }
                                    util.toFastProperties(obj);
                                    return obj;
                                }

                                function promisify(callback, receiver, multiArgs) {
                                    return makeNodePromisified(callback, receiver, undefined, callback, null, multiArgs);
                                }

                                Promise.promisify = function (fn, options) {
                                    if (typeof fn !== "function") {
                                        throw new TypeError("expecting a function but got " + util.classString(fn));
                                    }
                                    if (isPromisified(fn)) {
                                        return fn;
                                    }
                                    options = Object(options);
                                    var receiver = options.context === undefined ? THIS : options.context;
                                    var multiArgs = !!options.multiArgs;
                                    var ret = promisify(fn, receiver, multiArgs);
                                    util.copyDescriptors(fn, ret, propsFilter);
                                    return ret;
                                };

                                Promise.promisifyAll = function (target, options) {
                                    if (typeof target !== "function" && (typeof target === "undefined" ? "undefined" : _typeof2(target)) !== "object") {
                                        throw new TypeError("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                    options = Object(options);
                                    var multiArgs = !!options.multiArgs;
                                    var suffix = options.suffix;
                                    if (typeof suffix !== "string") suffix = defaultSuffix;
                                    var filter = options.filter;
                                    if (typeof filter !== "function") filter = defaultFilter;
                                    var promisifier = options.promisifier;
                                    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

                                    if (!util.isIdentifier(suffix)) {
                                        throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                                    }

                                    var keys = util.inheritedDataKeys(target);
                                    for (var i = 0; i < keys.length; ++i) {
                                        var value = target[keys[i]];
                                        if (keys[i] !== "constructor" && util.isClass(value)) {
                                            promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs);
                                            promisifyAll(value, suffix, filter, promisifier, multiArgs);
                                        }
                                    }

                                    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
                                };
                            };
                        }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, PromiseArray, tryConvertToPromise, apiRejection) {
                                var util = _dereq_("./util");
                                var isObject = util.isObject;
                                var es5 = _dereq_("./es5");
                                var Es6Map;
                                if (typeof Map === "function") Es6Map = Map;

                                var mapToEntries = function () {
                                    var index = 0;
                                    var size = 0;

                                    function extractEntry(value, key) {
                                        this[index] = value;
                                        this[index + size] = key;
                                        index++;
                                    }

                                    return function mapToEntries(map) {
                                        size = map.size;
                                        index = 0;
                                        var ret = new Array(map.size * 2);
                                        map.forEach(extractEntry, ret);
                                        return ret;
                                    };
                                }();

                                var entriesToMap = function entriesToMap(entries) {
                                    var ret = new Es6Map();
                                    var length = entries.length / 2 | 0;
                                    for (var i = 0; i < length; ++i) {
                                        var key = entries[length + i];
                                        var value = entries[i];
                                        ret.set(key, value);
                                    }
                                    return ret;
                                };

                                function PropertiesPromiseArray(obj) {
                                    var isMap = false;
                                    var entries;
                                    if (Es6Map !== undefined && obj instanceof Es6Map) {
                                        entries = mapToEntries(obj);
                                        isMap = true;
                                    } else {
                                        var keys = es5.keys(obj);
                                        var len = keys.length;
                                        entries = new Array(len * 2);
                                        for (var i = 0; i < len; ++i) {
                                            var key = keys[i];
                                            entries[i] = obj[key];
                                            entries[i + len] = key;
                                        }
                                    }
                                    this.constructor$(entries);
                                    this._isMap = isMap;
                                    this._init$(undefined, -3);
                                }
                                util.inherits(PropertiesPromiseArray, PromiseArray);

                                PropertiesPromiseArray.prototype._init = function () {};

                                PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
                                    this._values[index] = value;
                                    var totalResolved = ++this._totalResolved;
                                    if (totalResolved >= this._length) {
                                        var val;
                                        if (this._isMap) {
                                            val = entriesToMap(this._values);
                                        } else {
                                            val = {};
                                            var keyOffset = this.length();
                                            for (var i = 0, len = this.length(); i < len; ++i) {
                                                val[this._values[i + keyOffset]] = this._values[i];
                                            }
                                        }
                                        this._resolve(val);
                                        return true;
                                    }
                                    return false;
                                };

                                PropertiesPromiseArray.prototype.shouldCopyValues = function () {
                                    return false;
                                };

                                PropertiesPromiseArray.prototype.getActualLength = function (len) {
                                    return len >> 1;
                                };

                                function props(promises) {
                                    var ret;
                                    var castValue = tryConvertToPromise(promises);

                                    if (!isObject(castValue)) {
                                        return apiRejection("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
                                    } else if (castValue instanceof Promise) {
                                        ret = castValue._then(Promise.props, undefined, undefined, undefined, undefined);
                                    } else {
                                        ret = new PropertiesPromiseArray(castValue).promise();
                                    }

                                    if (castValue instanceof Promise) {
                                        ret._propagateFrom(castValue, 2);
                                    }
                                    return ret;
                                }

                                Promise.prototype.props = function () {
                                    return props(this);
                                };

                                Promise.props = function (promises) {
                                    return props(promises);
                                };
                            };
                        }, { "./es5": 13, "./util": 36 }], 26: [function (_dereq_, module, exports) {
                            "use strict";

                            function arrayMove(src, srcIndex, dst, dstIndex, len) {
                                for (var j = 0; j < len; ++j) {
                                    dst[j + dstIndex] = src[j + srcIndex];
                                    src[j + srcIndex] = void 0;
                                }
                            }

                            function Queue(capacity) {
                                this._capacity = capacity;
                                this._length = 0;
                                this._front = 0;
                            }

                            Queue.prototype._willBeOverCapacity = function (size) {
                                return this._capacity < size;
                            };

                            Queue.prototype._pushOne = function (arg) {
                                var length = this.length();
                                this._checkCapacity(length + 1);
                                var i = this._front + length & this._capacity - 1;
                                this[i] = arg;
                                this._length = length + 1;
                            };

                            Queue.prototype._unshiftOne = function (value) {
                                var capacity = this._capacity;
                                this._checkCapacity(this.length() + 1);
                                var front = this._front;
                                var i = (front - 1 & capacity - 1 ^ capacity) - capacity;
                                this[i] = value;
                                this._front = i;
                                this._length = this.length() + 1;
                            };

                            Queue.prototype.unshift = function (fn, receiver, arg) {
                                this._unshiftOne(arg);
                                this._unshiftOne(receiver);
                                this._unshiftOne(fn);
                            };

                            Queue.prototype.push = function (fn, receiver, arg) {
                                var length = this.length() + 3;
                                if (this._willBeOverCapacity(length)) {
                                    this._pushOne(fn);
                                    this._pushOne(receiver);
                                    this._pushOne(arg);
                                    return;
                                }
                                var j = this._front + length - 3;
                                this._checkCapacity(length);
                                var wrapMask = this._capacity - 1;
                                this[j + 0 & wrapMask] = fn;
                                this[j + 1 & wrapMask] = receiver;
                                this[j + 2 & wrapMask] = arg;
                                this._length = length;
                            };

                            Queue.prototype.shift = function () {
                                var front = this._front,
                                    ret = this[front];

                                this[front] = undefined;
                                this._front = front + 1 & this._capacity - 1;
                                this._length--;
                                return ret;
                            };

                            Queue.prototype.length = function () {
                                return this._length;
                            };

                            Queue.prototype._checkCapacity = function (size) {
                                if (this._capacity < size) {
                                    this._resizeTo(this._capacity << 1);
                                }
                            };

                            Queue.prototype._resizeTo = function (capacity) {
                                var oldCapacity = this._capacity;
                                this._capacity = capacity;
                                var front = this._front;
                                var length = this._length;
                                var moveItemsCount = front + length & oldCapacity - 1;
                                arrayMove(this, 0, this, oldCapacity, moveItemsCount);
                            };

                            module.exports = Queue;
                        }, {}], 27: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection) {
                                var util = _dereq_("./util");

                                var raceLater = function raceLater(promise) {
                                    return promise.then(function (array) {
                                        return race(array, promise);
                                    });
                                };

                                function race(promises, parent) {
                                    var maybePromise = tryConvertToPromise(promises);

                                    if (maybePromise instanceof Promise) {
                                        return raceLater(maybePromise);
                                    } else {
                                        promises = util.asArray(promises);
                                        if (promises === null) return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
                                    }

                                    var ret = new Promise(INTERNAL);
                                    if (parent !== undefined) {
                                        ret._propagateFrom(parent, 3);
                                    }
                                    var fulfill = ret._fulfill;
                                    var reject = ret._reject;
                                    for (var i = 0, len = promises.length; i < len; ++i) {
                                        var val = promises[i];

                                        if (val === undefined && !(i in promises)) {
                                            continue;
                                        }

                                        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
                                    }
                                    return ret;
                                }

                                Promise.race = function (promises) {
                                    return race(promises, undefined);
                                };

                                Promise.prototype.race = function () {
                                    return race(this, undefined);
                                };
                            };
                        }, { "./util": 36 }], 28: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                                var getDomain = Promise._getDomain;
                                var util = _dereq_("./util");
                                var tryCatch = util.tryCatch;

                                function ReductionPromiseArray(promises, fn, initialValue, _each) {
                                    this.constructor$(promises);
                                    var domain = getDomain();
                                    this._fn = domain === null ? fn : util.domainBind(domain, fn);
                                    if (initialValue !== undefined) {
                                        initialValue = Promise.resolve(initialValue);
                                        initialValue._attachCancellationCallback(this);
                                    }
                                    this._initialValue = initialValue;
                                    this._currentCancellable = null;
                                    if (_each === INTERNAL) {
                                        this._eachValues = Array(this._length);
                                    } else if (_each === 0) {
                                        this._eachValues = null;
                                    } else {
                                        this._eachValues = undefined;
                                    }
                                    this._promise._captureStackTrace();
                                    this._init$(undefined, -5);
                                }
                                util.inherits(ReductionPromiseArray, PromiseArray);

                                ReductionPromiseArray.prototype._gotAccum = function (accum) {
                                    if (this._eachValues !== undefined && this._eachValues !== null && accum !== INTERNAL) {
                                        this._eachValues.push(accum);
                                    }
                                };

                                ReductionPromiseArray.prototype._eachComplete = function (value) {
                                    if (this._eachValues !== null) {
                                        this._eachValues.push(value);
                                    }
                                    return this._eachValues;
                                };

                                ReductionPromiseArray.prototype._init = function () {};

                                ReductionPromiseArray.prototype._resolveEmptyArray = function () {
                                    this._resolve(this._eachValues !== undefined ? this._eachValues : this._initialValue);
                                };

                                ReductionPromiseArray.prototype.shouldCopyValues = function () {
                                    return false;
                                };

                                ReductionPromiseArray.prototype._resolve = function (value) {
                                    this._promise._resolveCallback(value);
                                    this._values = null;
                                };

                                ReductionPromiseArray.prototype._resultCancelled = function (sender) {
                                    if (sender === this._initialValue) return this._cancel();
                                    if (this._isResolved()) return;
                                    this._resultCancelled$();
                                    if (this._currentCancellable instanceof Promise) {
                                        this._currentCancellable.cancel();
                                    }
                                    if (this._initialValue instanceof Promise) {
                                        this._initialValue.cancel();
                                    }
                                };

                                ReductionPromiseArray.prototype._iterate = function (values) {
                                    this._values = values;
                                    var value;
                                    var i;
                                    var length = values.length;
                                    if (this._initialValue !== undefined) {
                                        value = this._initialValue;
                                        i = 0;
                                    } else {
                                        value = Promise.resolve(values[0]);
                                        i = 1;
                                    }

                                    this._currentCancellable = value;

                                    if (!value.isRejected()) {
                                        for (; i < length; ++i) {
                                            var ctx = {
                                                accum: null,
                                                value: values[i],
                                                index: i,
                                                length: length,
                                                array: this
                                            };
                                            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
                                        }
                                    }

                                    if (this._eachValues !== undefined) {
                                        value = value._then(this._eachComplete, undefined, undefined, this, undefined);
                                    }
                                    value._then(completed, completed, undefined, value, this);
                                };

                                Promise.prototype.reduce = function (fn, initialValue) {
                                    return reduce(this, fn, initialValue, null);
                                };

                                Promise.reduce = function (promises, fn, initialValue, _each) {
                                    return reduce(promises, fn, initialValue, _each);
                                };

                                function completed(valueOrReason, array) {
                                    if (this.isFulfilled()) {
                                        array._resolve(valueOrReason);
                                    } else {
                                        array._reject(valueOrReason);
                                    }
                                }

                                function reduce(promises, fn, initialValue, _each) {
                                    if (typeof fn !== "function") {
                                        return apiRejection("expecting a function but got " + util.classString(fn));
                                    }
                                    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
                                    return array.promise();
                                }

                                function gotAccum(accum) {
                                    this.accum = accum;
                                    this.array._gotAccum(accum);
                                    var value = tryConvertToPromise(this.value, this.array._promise);
                                    if (value instanceof Promise) {
                                        this.array._currentCancellable = value;
                                        return value._then(gotValue, undefined, undefined, this, undefined);
                                    } else {
                                        return gotValue.call(this, value);
                                    }
                                }

                                function gotValue(value) {
                                    var array = this.array;
                                    var promise = array._promise;
                                    var fn = tryCatch(array._fn);
                                    promise._pushContext();
                                    var ret;
                                    if (array._eachValues !== undefined) {
                                        ret = fn.call(promise._boundValue(), value, this.index, this.length);
                                    } else {
                                        ret = fn.call(promise._boundValue(), this.accum, value, this.index, this.length);
                                    }
                                    if (ret instanceof Promise) {
                                        array._currentCancellable = ret;
                                    }
                                    var promiseCreated = promise._popContext();
                                    debug.checkForgottenReturns(ret, promiseCreated, array._eachValues !== undefined ? "Promise.each" : "Promise.reduce", promise);
                                    return ret;
                                }
                            };
                        }, { "./util": 36 }], 29: [function (_dereq_, module, exports) {
                            "use strict";

                            var util = _dereq_("./util");
                            var schedule;
                            var noAsyncScheduler = function noAsyncScheduler() {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
                            };
                            var NativePromise = util.getNativePromise();
                            if (util.isNode && typeof MutationObserver === "undefined") {
                                var GlobalSetImmediate = global.setImmediate;
                                var ProcessNextTick = process.nextTick;
                                schedule = util.isRecentNode ? function (fn) {
                                    GlobalSetImmediate.call(global, fn);
                                } : function (fn) {
                                    ProcessNextTick.call(process, fn);
                                };
                            } else if (typeof NativePromise === "function" && typeof NativePromise.resolve === "function") {
                                var nativePromise = NativePromise.resolve();
                                schedule = function schedule(fn) {
                                    nativePromise.then(fn);
                                };
                            } else if (typeof MutationObserver !== "undefined" && !(typeof window !== "undefined" && window.navigator && (window.navigator.standalone || window.cordova))) {
                                schedule = function () {
                                    var div = document.createElement("div");
                                    var opts = { attributes: true };
                                    var toggleScheduled = false;
                                    var div2 = document.createElement("div");
                                    var o2 = new MutationObserver(function () {
                                        div.classList.toggle("foo");
                                        toggleScheduled = false;
                                    });
                                    o2.observe(div2, opts);

                                    var scheduleToggle = function scheduleToggle() {
                                        if (toggleScheduled) return;
                                        toggleScheduled = true;
                                        div2.classList.toggle("foo");
                                    };

                                    return function schedule(fn) {
                                        var o = new MutationObserver(function () {
                                            o.disconnect();
                                            fn();
                                        });
                                        o.observe(div, opts);
                                        scheduleToggle();
                                    };
                                }();
                            } else if (typeof setImmediate !== "undefined") {
                                schedule = function schedule(fn) {
                                    setImmediate(fn);
                                };
                            } else if (typeof setTimeout !== "undefined") {
                                schedule = function schedule(fn) {
                                    setTimeout(fn, 0);
                                };
                            } else {
                                schedule = noAsyncScheduler;
                            }
                            module.exports = schedule;
                        }, { "./util": 36 }], 30: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, PromiseArray, debug) {
                                var PromiseInspection = Promise.PromiseInspection;
                                var util = _dereq_("./util");

                                function SettledPromiseArray(values) {
                                    this.constructor$(values);
                                }
                                util.inherits(SettledPromiseArray, PromiseArray);

                                SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
                                    this._values[index] = inspection;
                                    var totalResolved = ++this._totalResolved;
                                    if (totalResolved >= this._length) {
                                        this._resolve(this._values);
                                        return true;
                                    }
                                    return false;
                                };

                                SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
                                    var ret = new PromiseInspection();
                                    ret._bitField = 33554432;
                                    ret._settledValueField = value;
                                    return this._promiseResolved(index, ret);
                                };
                                SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
                                    var ret = new PromiseInspection();
                                    ret._bitField = 16777216;
                                    ret._settledValueField = reason;
                                    return this._promiseResolved(index, ret);
                                };

                                Promise.settle = function (promises) {
                                    debug.deprecated(".settle()", ".reflect()");
                                    return new SettledPromiseArray(promises).promise();
                                };

                                Promise.prototype.settle = function () {
                                    return Promise.settle(this);
                                };
                            };
                        }, { "./util": 36 }], 31: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, PromiseArray, apiRejection) {
                                var util = _dereq_("./util");
                                var RangeError = _dereq_("./errors").RangeError;
                                var AggregateError = _dereq_("./errors").AggregateError;
                                var isArray = util.isArray;
                                var CANCELLATION = {};

                                function SomePromiseArray(values) {
                                    this.constructor$(values);
                                    this._howMany = 0;
                                    this._unwrap = false;
                                    this._initialized = false;
                                }
                                util.inherits(SomePromiseArray, PromiseArray);

                                SomePromiseArray.prototype._init = function () {
                                    if (!this._initialized) {
                                        return;
                                    }
                                    if (this._howMany === 0) {
                                        this._resolve([]);
                                        return;
                                    }
                                    this._init$(undefined, -5);
                                    var isArrayResolved = isArray(this._values);
                                    if (!this._isResolved() && isArrayResolved && this._howMany > this._canPossiblyFulfill()) {
                                        this._reject(this._getRangeError(this.length()));
                                    }
                                };

                                SomePromiseArray.prototype.init = function () {
                                    this._initialized = true;
                                    this._init();
                                };

                                SomePromiseArray.prototype.setUnwrap = function () {
                                    this._unwrap = true;
                                };

                                SomePromiseArray.prototype.howMany = function () {
                                    return this._howMany;
                                };

                                SomePromiseArray.prototype.setHowMany = function (count) {
                                    this._howMany = count;
                                };

                                SomePromiseArray.prototype._promiseFulfilled = function (value) {
                                    this._addFulfilled(value);
                                    if (this._fulfilled() === this.howMany()) {
                                        this._values.length = this.howMany();
                                        if (this.howMany() === 1 && this._unwrap) {
                                            this._resolve(this._values[0]);
                                        } else {
                                            this._resolve(this._values);
                                        }
                                        return true;
                                    }
                                    return false;
                                };
                                SomePromiseArray.prototype._promiseRejected = function (reason) {
                                    this._addRejected(reason);
                                    return this._checkOutcome();
                                };

                                SomePromiseArray.prototype._promiseCancelled = function () {
                                    if (this._values instanceof Promise || this._values == null) {
                                        return this._cancel();
                                    }
                                    this._addRejected(CANCELLATION);
                                    return this._checkOutcome();
                                };

                                SomePromiseArray.prototype._checkOutcome = function () {
                                    if (this.howMany() > this._canPossiblyFulfill()) {
                                        var e = new AggregateError();
                                        for (var i = this.length(); i < this._values.length; ++i) {
                                            if (this._values[i] !== CANCELLATION) {
                                                e.push(this._values[i]);
                                            }
                                        }
                                        if (e.length > 0) {
                                            this._reject(e);
                                        } else {
                                            this._cancel();
                                        }
                                        return true;
                                    }
                                    return false;
                                };

                                SomePromiseArray.prototype._fulfilled = function () {
                                    return this._totalResolved;
                                };

                                SomePromiseArray.prototype._rejected = function () {
                                    return this._values.length - this.length();
                                };

                                SomePromiseArray.prototype._addRejected = function (reason) {
                                    this._values.push(reason);
                                };

                                SomePromiseArray.prototype._addFulfilled = function (value) {
                                    this._values[this._totalResolved++] = value;
                                };

                                SomePromiseArray.prototype._canPossiblyFulfill = function () {
                                    return this.length() - this._rejected();
                                };

                                SomePromiseArray.prototype._getRangeError = function (count) {
                                    var message = "Input array must contain at least " + this._howMany + " items but contains only " + count + " items";
                                    return new RangeError(message);
                                };

                                SomePromiseArray.prototype._resolveEmptyArray = function () {
                                    this._reject(this._getRangeError(0));
                                };

                                function some(promises, howMany) {
                                    if ((howMany | 0) !== howMany || howMany < 0) {
                                        return apiRejection("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                    var ret = new SomePromiseArray(promises);
                                    var promise = ret.promise();
                                    ret.setHowMany(howMany);
                                    ret.init();
                                    return promise;
                                }

                                Promise.some = function (promises, howMany) {
                                    return some(promises, howMany);
                                };

                                Promise.prototype.some = function (howMany) {
                                    return some(this, howMany);
                                };

                                Promise._SomePromiseArray = SomePromiseArray;
                            };
                        }, { "./errors": 12, "./util": 36 }], 32: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise) {
                                function PromiseInspection(promise) {
                                    if (promise !== undefined) {
                                        promise = promise._target();
                                        this._bitField = promise._bitField;
                                        this._settledValueField = promise._isFateSealed() ? promise._settledValue() : undefined;
                                    } else {
                                        this._bitField = 0;
                                        this._settledValueField = undefined;
                                    }
                                }

                                PromiseInspection.prototype._settledValue = function () {
                                    return this._settledValueField;
                                };

                                var value = PromiseInspection.prototype.value = function () {
                                    if (!this.isFulfilled()) {
                                        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                    return this._settledValue();
                                };

                                var reason = PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function () {
                                    if (!this.isRejected()) {
                                        throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                                    }
                                    return this._settledValue();
                                };

                                var isFulfilled = PromiseInspection.prototype.isFulfilled = function () {
                                    return (this._bitField & 33554432) !== 0;
                                };

                                var isRejected = PromiseInspection.prototype.isRejected = function () {
                                    return (this._bitField & 16777216) !== 0;
                                };

                                var isPending = PromiseInspection.prototype.isPending = function () {
                                    return (this._bitField & 50397184) === 0;
                                };

                                var isResolved = PromiseInspection.prototype.isResolved = function () {
                                    return (this._bitField & 50331648) !== 0;
                                };

                                PromiseInspection.prototype.isCancelled = function () {
                                    return (this._bitField & 8454144) !== 0;
                                };

                                Promise.prototype.__isCancelled = function () {
                                    return (this._bitField & 65536) === 65536;
                                };

                                Promise.prototype._isCancelled = function () {
                                    return this._target().__isCancelled();
                                };

                                Promise.prototype.isCancelled = function () {
                                    return (this._target()._bitField & 8454144) !== 0;
                                };

                                Promise.prototype.isPending = function () {
                                    return isPending.call(this._target());
                                };

                                Promise.prototype.isRejected = function () {
                                    return isRejected.call(this._target());
                                };

                                Promise.prototype.isFulfilled = function () {
                                    return isFulfilled.call(this._target());
                                };

                                Promise.prototype.isResolved = function () {
                                    return isResolved.call(this._target());
                                };

                                Promise.prototype.value = function () {
                                    return value.call(this._target());
                                };

                                Promise.prototype.reason = function () {
                                    var target = this._target();
                                    target._unsetRejectionIsUnhandled();
                                    return reason.call(target);
                                };

                                Promise.prototype._value = function () {
                                    return this._settledValue();
                                };

                                Promise.prototype._reason = function () {
                                    this._unsetRejectionIsUnhandled();
                                    return this._settledValue();
                                };

                                Promise.PromiseInspection = PromiseInspection;
                            };
                        }, {}], 33: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL) {
                                var util = _dereq_("./util");
                                var errorObj = util.errorObj;
                                var isObject = util.isObject;

                                function tryConvertToPromise(obj, context) {
                                    if (isObject(obj)) {
                                        if (obj instanceof Promise) return obj;
                                        var then = getThen(obj);
                                        if (then === errorObj) {
                                            if (context) context._pushContext();
                                            var ret = Promise.reject(then.e);
                                            if (context) context._popContext();
                                            return ret;
                                        } else if (typeof then === "function") {
                                            if (isAnyBluebirdPromise(obj)) {
                                                var ret = new Promise(INTERNAL);
                                                obj._then(ret._fulfill, ret._reject, undefined, ret, null);
                                                return ret;
                                            }
                                            return doThenable(obj, then, context);
                                        }
                                    }
                                    return obj;
                                }

                                function doGetThen(obj) {
                                    return obj.then;
                                }

                                function getThen(obj) {
                                    try {
                                        return doGetThen(obj);
                                    } catch (e) {
                                        errorObj.e = e;
                                        return errorObj;
                                    }
                                }

                                var hasProp = {}.hasOwnProperty;
                                function isAnyBluebirdPromise(obj) {
                                    try {
                                        return hasProp.call(obj, "_promise0");
                                    } catch (e) {
                                        return false;
                                    }
                                }

                                function doThenable(x, then, context) {
                                    var promise = new Promise(INTERNAL);
                                    var ret = promise;
                                    if (context) context._pushContext();
                                    promise._captureStackTrace();
                                    if (context) context._popContext();
                                    var synchronous = true;
                                    var result = util.tryCatch(then).call(x, resolve, reject);
                                    synchronous = false;

                                    if (promise && result === errorObj) {
                                        promise._rejectCallback(result.e, true, true);
                                        promise = null;
                                    }

                                    function resolve(value) {
                                        if (!promise) return;
                                        promise._resolveCallback(value);
                                        promise = null;
                                    }

                                    function reject(reason) {
                                        if (!promise) return;
                                        promise._rejectCallback(reason, synchronous, true);
                                        promise = null;
                                    }
                                    return ret;
                                }

                                return tryConvertToPromise;
                            };
                        }, { "./util": 36 }], 34: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, INTERNAL, debug) {
                                var util = _dereq_("./util");
                                var TimeoutError = Promise.TimeoutError;

                                function HandleWrapper(handle) {
                                    this.handle = handle;
                                }

                                HandleWrapper.prototype._resultCancelled = function () {
                                    clearTimeout(this.handle);
                                };

                                var afterValue = function afterValue(value) {
                                    return delay(+this).thenReturn(value);
                                };
                                var delay = Promise.delay = function (ms, value) {
                                    var ret;
                                    var handle;
                                    if (value !== undefined) {
                                        ret = Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
                                        if (debug.cancellation() && value instanceof Promise) {
                                            ret._setOnCancel(value);
                                        }
                                    } else {
                                        ret = new Promise(INTERNAL);
                                        handle = setTimeout(function () {
                                            ret._fulfill();
                                        }, +ms);
                                        if (debug.cancellation()) {
                                            ret._setOnCancel(new HandleWrapper(handle));
                                        }
                                        ret._captureStackTrace();
                                    }
                                    ret._setAsyncGuaranteed();
                                    return ret;
                                };

                                Promise.prototype.delay = function (ms) {
                                    return delay(ms, this);
                                };

                                var afterTimeout = function afterTimeout(promise, message, parent) {
                                    var err;
                                    if (typeof message !== "string") {
                                        if (message instanceof Error) {
                                            err = message;
                                        } else {
                                            err = new TimeoutError("operation timed out");
                                        }
                                    } else {
                                        err = new TimeoutError(message);
                                    }
                                    util.markAsOriginatingFromRejection(err);
                                    promise._attachExtraTrace(err);
                                    promise._reject(err);

                                    if (parent != null) {
                                        parent.cancel();
                                    }
                                };

                                function successClear(value) {
                                    clearTimeout(this.handle);
                                    return value;
                                }

                                function failureClear(reason) {
                                    clearTimeout(this.handle);
                                    throw reason;
                                }

                                Promise.prototype.timeout = function (ms, message) {
                                    ms = +ms;
                                    var ret, parent;

                                    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
                                        if (ret.isPending()) {
                                            afterTimeout(ret, message, parent);
                                        }
                                    }, ms));

                                    if (debug.cancellation()) {
                                        parent = this.then();
                                        ret = parent._then(successClear, failureClear, undefined, handleWrapper, undefined);
                                        ret._setOnCancel(handleWrapper);
                                    } else {
                                        ret = this._then(successClear, failureClear, undefined, handleWrapper, undefined);
                                    }

                                    return ret;
                                };
                            };
                        }, { "./util": 36 }], 35: [function (_dereq_, module, exports) {
                            "use strict";

                            module.exports = function (Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
                                var util = _dereq_("./util");
                                var TypeError = _dereq_("./errors").TypeError;
                                var inherits = _dereq_("./util").inherits;
                                var errorObj = util.errorObj;
                                var tryCatch = util.tryCatch;
                                var NULL = {};

                                function thrower(e) {
                                    setTimeout(function () {
                                        throw e;
                                    }, 0);
                                }

                                function castPreservingDisposable(thenable) {
                                    var maybePromise = tryConvertToPromise(thenable);
                                    if (maybePromise !== thenable && typeof thenable._isDisposable === "function" && typeof thenable._getDisposer === "function" && thenable._isDisposable()) {
                                        maybePromise._setDisposable(thenable._getDisposer());
                                    }
                                    return maybePromise;
                                }
                                function dispose(resources, inspection) {
                                    var i = 0;
                                    var len = resources.length;
                                    var ret = new Promise(INTERNAL);
                                    function iterator() {
                                        if (i >= len) return ret._fulfill();
                                        var maybePromise = castPreservingDisposable(resources[i++]);
                                        if (maybePromise instanceof Promise && maybePromise._isDisposable()) {
                                            try {
                                                maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
                                            } catch (e) {
                                                return thrower(e);
                                            }
                                            if (maybePromise instanceof Promise) {
                                                return maybePromise._then(iterator, thrower, null, null, null);
                                            }
                                        }
                                        iterator();
                                    }
                                    iterator();
                                    return ret;
                                }

                                function Disposer(data, promise, context) {
                                    this._data = data;
                                    this._promise = promise;
                                    this._context = context;
                                }

                                Disposer.prototype.data = function () {
                                    return this._data;
                                };

                                Disposer.prototype.promise = function () {
                                    return this._promise;
                                };

                                Disposer.prototype.resource = function () {
                                    if (this.promise().isFulfilled()) {
                                        return this.promise().value();
                                    }
                                    return NULL;
                                };

                                Disposer.prototype.tryDispose = function (inspection) {
                                    var resource = this.resource();
                                    var context = this._context;
                                    if (context !== undefined) context._pushContext();
                                    var ret = resource !== NULL ? this.doDispose(resource, inspection) : null;
                                    if (context !== undefined) context._popContext();
                                    this._promise._unsetDisposable();
                                    this._data = null;
                                    return ret;
                                };

                                Disposer.isDisposer = function (d) {
                                    return d != null && typeof d.resource === "function" && typeof d.tryDispose === "function";
                                };

                                function FunctionDisposer(fn, promise, context) {
                                    this.constructor$(fn, promise, context);
                                }
                                inherits(FunctionDisposer, Disposer);

                                FunctionDisposer.prototype.doDispose = function (resource, inspection) {
                                    var fn = this.data();
                                    return fn.call(resource, resource, inspection);
                                };

                                function maybeUnwrapDisposer(value) {
                                    if (Disposer.isDisposer(value)) {
                                        this.resources[this.index]._setDisposable(value);
                                        return value.promise();
                                    }
                                    return value;
                                }

                                function ResourceList(length) {
                                    this.length = length;
                                    this.promise = null;
                                    this[length - 1] = null;
                                }

                                ResourceList.prototype._resultCancelled = function () {
                                    var len = this.length;
                                    for (var i = 0; i < len; ++i) {
                                        var item = this[i];
                                        if (item instanceof Promise) {
                                            item.cancel();
                                        }
                                    }
                                };

                                Promise.using = function () {
                                    var len = arguments.length;
                                    if (len < 2) return apiRejection("you must pass at least 2 arguments to Promise.using");
                                    var fn = arguments[len - 1];
                                    if (typeof fn !== "function") {
                                        return apiRejection("expecting a function but got " + util.classString(fn));
                                    }
                                    var input;
                                    var spreadArgs = true;
                                    if (len === 2 && Array.isArray(arguments[0])) {
                                        input = arguments[0];
                                        len = input.length;
                                        spreadArgs = false;
                                    } else {
                                        input = arguments;
                                        len--;
                                    }
                                    var resources = new ResourceList(len);
                                    for (var i = 0; i < len; ++i) {
                                        var resource = input[i];
                                        if (Disposer.isDisposer(resource)) {
                                            var disposer = resource;
                                            resource = resource.promise();
                                            resource._setDisposable(disposer);
                                        } else {
                                            var maybePromise = tryConvertToPromise(resource);
                                            if (maybePromise instanceof Promise) {
                                                resource = maybePromise._then(maybeUnwrapDisposer, null, null, {
                                                    resources: resources,
                                                    index: i
                                                }, undefined);
                                            }
                                        }
                                        resources[i] = resource;
                                    }

                                    var reflectedResources = new Array(resources.length);
                                    for (var i = 0; i < reflectedResources.length; ++i) {
                                        reflectedResources[i] = Promise.resolve(resources[i]).reflect();
                                    }

                                    var resultPromise = Promise.all(reflectedResources).then(function (inspections) {
                                        for (var i = 0; i < inspections.length; ++i) {
                                            var inspection = inspections[i];
                                            if (inspection.isRejected()) {
                                                errorObj.e = inspection.error();
                                                return errorObj;
                                            } else if (!inspection.isFulfilled()) {
                                                resultPromise.cancel();
                                                return;
                                            }
                                            inspections[i] = inspection.value();
                                        }
                                        promise._pushContext();

                                        fn = tryCatch(fn);
                                        var ret = spreadArgs ? fn.apply(undefined, inspections) : fn(inspections);
                                        var promiseCreated = promise._popContext();
                                        debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise);
                                        return ret;
                                    });

                                    var promise = resultPromise.lastly(function () {
                                        var inspection = new Promise.PromiseInspection(resultPromise);
                                        return dispose(resources, inspection);
                                    });
                                    resources.promise = promise;
                                    promise._setOnCancel(resources);
                                    return promise;
                                };

                                Promise.prototype._setDisposable = function (disposer) {
                                    this._bitField = this._bitField | 131072;
                                    this._disposer = disposer;
                                };

                                Promise.prototype._isDisposable = function () {
                                    return (this._bitField & 131072) > 0;
                                };

                                Promise.prototype._getDisposer = function () {
                                    return this._disposer;
                                };

                                Promise.prototype._unsetDisposable = function () {
                                    this._bitField = this._bitField & ~131072;
                                    this._disposer = undefined;
                                };

                                Promise.prototype.disposer = function (fn) {
                                    if (typeof fn === "function") {
                                        return new FunctionDisposer(fn, this, createContext());
                                    }
                                    throw new TypeError();
                                };
                            };
                        }, { "./errors": 12, "./util": 36 }], 36: [function (_dereq_, module, exports) {
                            "use strict";

                            var es5 = _dereq_("./es5");
                            var canEvaluate = typeof navigator == "undefined";

                            var errorObj = { e: {} };
                            var tryCatchTarget;
                            var globalObject = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this !== undefined ? this : null;

                            function tryCatcher() {
                                try {
                                    var target = tryCatchTarget;
                                    tryCatchTarget = null;
                                    return target.apply(this, arguments);
                                } catch (e) {
                                    errorObj.e = e;
                                    return errorObj;
                                }
                            }
                            function tryCatch(fn) {
                                tryCatchTarget = fn;
                                return tryCatcher;
                            }

                            var inherits = function inherits(Child, Parent) {
                                var hasProp = {}.hasOwnProperty;

                                function T() {
                                    this.constructor = Child;
                                    this.constructor$ = Parent;
                                    for (var propertyName in Parent.prototype) {
                                        if (hasProp.call(Parent.prototype, propertyName) && propertyName.charAt(propertyName.length - 1) !== "$") {
                                            this[propertyName + "$"] = Parent.prototype[propertyName];
                                        }
                                    }
                                }
                                T.prototype = Parent.prototype;
                                Child.prototype = new T();
                                return Child.prototype;
                            };

                            function isPrimitive(val) {
                                return val == null || val === true || val === false || typeof val === "string" || typeof val === "number";
                            }

                            function isObject(value) {
                                return typeof value === "function" || (typeof value === "undefined" ? "undefined" : _typeof2(value)) === "object" && value !== null;
                            }

                            function maybeWrapAsError(maybeError) {
                                if (!isPrimitive(maybeError)) return maybeError;

                                return new Error(safeToString(maybeError));
                            }

                            function withAppended(target, appendee) {
                                var len = target.length;
                                var ret = new Array(len + 1);
                                var i;
                                for (i = 0; i < len; ++i) {
                                    ret[i] = target[i];
                                }
                                ret[i] = appendee;
                                return ret;
                            }

                            function getDataPropertyOrDefault(obj, key, defaultValue) {
                                if (es5.isES5) {
                                    var desc = Object.getOwnPropertyDescriptor(obj, key);

                                    if (desc != null) {
                                        return desc.get == null && desc.set == null ? desc.value : defaultValue;
                                    }
                                } else {
                                    return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
                                }
                            }

                            function notEnumerableProp(obj, name, value) {
                                if (isPrimitive(obj)) return obj;
                                var descriptor = {
                                    value: value,
                                    configurable: true,
                                    enumerable: false,
                                    writable: true
                                };
                                es5.defineProperty(obj, name, descriptor);
                                return obj;
                            }

                            function thrower(r) {
                                throw r;
                            }

                            var inheritedDataKeys = function () {
                                var excludedPrototypes = [Array.prototype, Object.prototype, Function.prototype];

                                var isExcludedProto = function isExcludedProto(val) {
                                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                                        if (excludedPrototypes[i] === val) {
                                            return true;
                                        }
                                    }
                                    return false;
                                };

                                if (es5.isES5) {
                                    var getKeys = Object.getOwnPropertyNames;
                                    return function (obj) {
                                        var ret = [];
                                        var visitedKeys = Object.create(null);
                                        while (obj != null && !isExcludedProto(obj)) {
                                            var keys;
                                            try {
                                                keys = getKeys(obj);
                                            } catch (e) {
                                                return ret;
                                            }
                                            for (var i = 0; i < keys.length; ++i) {
                                                var key = keys[i];
                                                if (visitedKeys[key]) continue;
                                                visitedKeys[key] = true;
                                                var desc = Object.getOwnPropertyDescriptor(obj, key);
                                                if (desc != null && desc.get == null && desc.set == null) {
                                                    ret.push(key);
                                                }
                                            }
                                            obj = es5.getPrototypeOf(obj);
                                        }
                                        return ret;
                                    };
                                } else {
                                    var hasProp = {}.hasOwnProperty;
                                    return function (obj) {
                                        if (isExcludedProto(obj)) return [];
                                        var ret = [];

                                        enumeration: for (var key in obj) {
                                            if (hasProp.call(obj, key)) {
                                                ret.push(key);
                                            } else {
                                                for (var i = 0; i < excludedPrototypes.length; ++i) {
                                                    if (hasProp.call(excludedPrototypes[i], key)) {
                                                        continue enumeration;
                                                    }
                                                }
                                                ret.push(key);
                                            }
                                        }
                                        return ret;
                                    };
                                }
                            }();

                            var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
                            function isClass(fn) {
                                try {
                                    if (typeof fn === "function") {
                                        var keys = es5.names(fn.prototype);

                                        var hasMethods = es5.isES5 && keys.length > 1;
                                        var hasMethodsOtherThanConstructor = keys.length > 0 && !(keys.length === 1 && keys[0] === "constructor");
                                        var hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

                                        if (hasMethods || hasMethodsOtherThanConstructor || hasThisAssignmentAndStaticMethods) {
                                            return true;
                                        }
                                    }
                                    return false;
                                } catch (e) {
                                    return false;
                                }
                            }

                            function toFastProperties(obj) {
                                function FakeConstructor() {}
                                FakeConstructor.prototype = obj;
                                var l = 8;
                                while (l--) {
                                    new FakeConstructor();
                                }return obj;
                                eval(obj);
                            }

                            var rident = /^[a-z$_][a-z$_0-9]*$/i;
                            function isIdentifier(str) {
                                return rident.test(str);
                            }

                            function filledRange(count, prefix, suffix) {
                                var ret = new Array(count);
                                for (var i = 0; i < count; ++i) {
                                    ret[i] = prefix + i + suffix;
                                }
                                return ret;
                            }

                            function safeToString(obj) {
                                try {
                                    return obj + "";
                                } catch (e) {
                                    return "[no string representation]";
                                }
                            }

                            function isError(obj) {
                                return obj !== null && (typeof obj === "undefined" ? "undefined" : _typeof2(obj)) === "object" && typeof obj.message === "string" && typeof obj.name === "string";
                            }

                            function markAsOriginatingFromRejection(e) {
                                try {
                                    notEnumerableProp(e, "isOperational", true);
                                } catch (ignore) {}
                            }

                            function originatesFromRejection(e) {
                                if (e == null) return false;
                                return e instanceof Error["__BluebirdErrorTypes__"].OperationalError || e["isOperational"] === true;
                            }

                            function canAttachTrace(obj) {
                                return isError(obj) && es5.propertyIsWritable(obj, "stack");
                            }

                            var ensureErrorObject = function () {
                                if (!("stack" in new Error())) {
                                    return function (value) {
                                        if (canAttachTrace(value)) return value;
                                        try {
                                            throw new Error(safeToString(value));
                                        } catch (err) {
                                            return err;
                                        }
                                    };
                                } else {
                                    return function (value) {
                                        if (canAttachTrace(value)) return value;
                                        return new Error(safeToString(value));
                                    };
                                }
                            }();

                            function classString(obj) {
                                return {}.toString.call(obj);
                            }

                            function copyDescriptors(from, to, filter) {
                                var keys = es5.names(from);
                                for (var i = 0; i < keys.length; ++i) {
                                    var key = keys[i];
                                    if (filter(key)) {
                                        try {
                                            es5.defineProperty(to, key, es5.getDescriptor(from, key));
                                        } catch (ignore) {}
                                    }
                                }
                            }

                            var asArray = function asArray(v) {
                                if (es5.isArray(v)) {
                                    return v;
                                }
                                return null;
                            };

                            if (typeof Symbol !== "undefined" && Symbol.iterator) {
                                var ArrayFrom = typeof Array.from === "function" ? function (v) {
                                    return Array.from(v);
                                } : function (v) {
                                    var ret = [];
                                    var it = v[Symbol.iterator]();
                                    var itResult;
                                    while (!(itResult = it.next()).done) {
                                        ret.push(itResult.value);
                                    }
                                    return ret;
                                };

                                asArray = function asArray(v) {
                                    if (es5.isArray(v)) {
                                        return v;
                                    } else if (v != null && typeof v[Symbol.iterator] === "function") {
                                        return ArrayFrom(v);
                                    }
                                    return null;
                                };
                            }

                            var isNode = typeof process !== "undefined" && classString(process).toLowerCase() === "[object process]";

                            function env(key, def) {
                                return isNode ? { "ENV": "development", "NODE_ENV": "development", "HMR": false, "WEBPACK_HOST": "localhost", "WEBPACK_PORT": 9000 }[key] : def;
                            }

                            function getNativePromise() {
                                if (typeof Promise === "function") {
                                    try {
                                        var promise = new Promise(function () {});
                                        if ({}.toString.call(promise) === "[object Promise]") {
                                            return Promise;
                                        }
                                    } catch (e) {}
                                }
                            }

                            function domainBind(self, cb) {
                                return self.bind(cb);
                            }

                            var ret = {
                                isClass: isClass,
                                isIdentifier: isIdentifier,
                                inheritedDataKeys: inheritedDataKeys,
                                getDataPropertyOrDefault: getDataPropertyOrDefault,
                                thrower: thrower,
                                isArray: es5.isArray,
                                asArray: asArray,
                                notEnumerableProp: notEnumerableProp,
                                isPrimitive: isPrimitive,
                                isObject: isObject,
                                isError: isError,
                                canEvaluate: canEvaluate,
                                errorObj: errorObj,
                                tryCatch: tryCatch,
                                inherits: inherits,
                                withAppended: withAppended,
                                maybeWrapAsError: maybeWrapAsError,
                                toFastProperties: toFastProperties,
                                filledRange: filledRange,
                                toString: safeToString,
                                canAttachTrace: canAttachTrace,
                                ensureErrorObject: ensureErrorObject,
                                originatesFromRejection: originatesFromRejection,
                                markAsOriginatingFromRejection: markAsOriginatingFromRejection,
                                classString: classString,
                                copyDescriptors: copyDescriptors,
                                hasDevTools: typeof chrome !== "undefined" && chrome && typeof chrome.loadTimes === "function",
                                isNode: isNode,
                                env: env,
                                global: globalObject,
                                getNativePromise: getNativePromise,
                                domainBind: domainBind
                            };
                            ret.isRecentNode = ret.isNode && function () {
                                var version = process.versions.node.split(".").map(Number);
                                return version[0] === 0 && version[1] > 10 || version[0] > 0;
                            }();

                            if (ret.isNode) ret.toFastProperties(process);

                            try {
                                throw new Error();
                            } catch (e) {
                                ret.lastLineError = e;
                            }
                            module.exports = ret;
                        }, { "./es5": 13 }] }, {}, [4])(4);
                });;if (typeof window !== 'undefined' && window !== null) {
                    window.P = window.Promise;
                } else if (typeof self !== 'undefined' && self !== null) {
                    self.P = self.Promise;
                }
            }).call(exports, __webpack_require__(43), __webpack_require__(14), __webpack_require__(13).setImmediate);
        },

        "bootstrap": function bootstrap(module, exports, __webpack_require__) {
            __webpack_require__(90);
            __webpack_require__(80);
            __webpack_require__(81);
            __webpack_require__(82);
            __webpack_require__(83);
            __webpack_require__(84);
            __webpack_require__(85);
            __webpack_require__(89);
            __webpack_require__(86);
            __webpack_require__(87);
            __webpack_require__(88);
            __webpack_require__(79);
        },

        "isomorphic-fetch": function isomorphicFetch(module, exports, __webpack_require__) {
            __webpack_require__(97);
            module.exports = self.fetch.bind(self);
        }

    }, [99]);
});
define("app.bundle", function(){});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./markdown-aurelia\"></require>\n  <markdown-aurelia raw.bind=\"data\"></markdown-aurelia>\n</template>\n"; });
define('text!style.css', ['module'], function(module) { module.exports = "body {\r\n  background-color: #37474F;\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 15px;\r\n}\r\n\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.markdown-editor {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 3.6rem;\r\n}\r\n\r\n.subtitle {\r\n  text-align: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.markdown-editor .editor,\r\n.markdown-editor .preview {\r\n  float: left;\r\n  min-height: 60vh;\r\n  padding: 10px;\r\n  width: 100%;\r\n  transition: all 200ms ease-out;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.markdown-editor .preview {\r\n  border: dashed 2px #b5bfc3;\r\n}\r\n\r\n.markdown-editor .preview:hover {\r\n  background: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.toolbar {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.toolbar button {\r\n  border: 0px;\r\n  padding: 15px 25px;\r\n  margin: 0px 10px;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background: #263238;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  border-bottom: solid 2px #546E7A;\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.toolbar button:active,\r\n.toolbar button:focus,\r\n.toolbar button:hover {\r\n  background: #546e7a;\r\n  border-bottom: solid 2px #90A4AE;\r\n}\r\n\r\na:link    { color: #fff }\r\na:visited { color: #bebebe }\r\na:hover   { background: #fff; color: #37474F }\r\na:active  { color: #fff }\r\n\r\n/*Larger profiles and upwards*/\r\n\r\n@media all and (min-width: 768px) {\r\n  body {\r\n    padding: 25px 100px;\r\n  }\r\n  .markdown-editor .editor,\r\n  .markdown-editor .preview {\r\n    width: 47.5%;\r\n  }\r\n  .markdown-editor .preview {\r\n    margin-left: 5%;\r\n  }\r\n}"; });
define('text!markdown-aurelia.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./style.css\"></require>\r\n\r\n    <h1>Aurelia Markdown Redux</h1>\r\n\r\n    <div class=\"markdown-editor\">\r\n        <textarea class=\"editor\" value.bind=\"raw\"></textarea>\r\n        <div class=\"preview\" innerHTML.bind=\"html\"></div>\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map