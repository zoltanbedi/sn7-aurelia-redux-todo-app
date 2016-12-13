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
define('markdown-redux',['exports', 'marked', 'aurelia-framework', 'redux'], function (exports, _marked, _aureliaFramework, _redux) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MarkdownRedux = undefined;

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

  var MarkdownRedux = exports.MarkdownRedux = (_class = function () {
    function MarkdownRedux() {
      _classCallCheck(this, MarkdownRedux);

      _initDefineProp(this, 'raw', _descriptor, this);

      this.html = '';
      this.store = (0, _redux.createStore)(textUpdater);

      this.store.subscribe(this.update.bind(this));
    }

    MarkdownRedux.prototype.update = function update() {
      var state = this.store.getState();
      this.html = state.html;
      this.raw = state.raw;
    };

    MarkdownRedux.prototype.keyupHandler = function keyupHandler(newValue) {
      this.store.dispatch(updateText(newValue));
    };

    MarkdownRedux.prototype.attached = function attached() {
      this.keyupHandler(this.raw);
    };

    return MarkdownRedux;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'raw', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);


  var TEXT_UPDATE = 'UPDATE';

  var updateText = function updateText(text) {
    return {
      type: TEXT_UPDATE,
      text: text
    };
  };

  function textUpdater() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { raw: '', html: '' };
    var action = arguments[1];

    switch (action.type) {
      case TEXT_UPDATE:
        return {
          raw: action.text,
          html: (0, _marked2.default)(action.text)
        };
      default:
        return state;
    }
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./markdown-redux\"></require>\n  <markdown-redux raw.bind=\"data\"></markdown-redux>\n</template>"; });
define('text!markdown-aurelia.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./style.css\"></require>\r\n\r\n    <h1>Aurelia Markdown Redux</h1>\r\n\r\n    <div class=\"markdown-editor\">\r\n        <textarea class=\"editor\" value.bind=\"raw\"></textarea>\r\n        <div class=\"preview\" innerHTML.bind=\"html\"></div>\r\n    </div>\r\n</template>"; });
define('text!markdown-redux.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./style.css\"></require>\r\n\r\n  <h1>Aurelia Markdown Redux</h1>\r\n\r\n  <div class=\"markdown-editor cf\">\r\n    <textarea class=\"editor\"\r\n              keyup.trigger=\"keyupHandler($event.target.value) & debounce\"\r\n              value.one-way=\"raw\"></textarea>\r\n    <div class=\"preview\" innerHTML.bind=\"html\"></div>\r\n  </div>\r\n</template>"; });
define('text!style.css', ['module'], function(module) { module.exports = "body {\r\n  background-color: #37474F;\r\n  color: #fff;\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 15px;\r\n}\r\n\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.markdown-editor {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 3.6rem;\r\n}\r\n\r\n.subtitle {\r\n  text-align: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.markdown-editor .editor,\r\n.markdown-editor .preview {\r\n  float: left;\r\n  min-height: 60vh;\r\n  padding: 10px;\r\n  width: 100%;\r\n  transition: all 200ms ease-out;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.markdown-editor .preview {\r\n  border: dashed 2px #b5bfc3;\r\n}\r\n\r\n.markdown-editor .preview:hover {\r\n  background: rgba(255, 255, 255, 0.05);\r\n}\r\n\r\n.toolbar {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.toolbar button {\r\n  border: 0px;\r\n  padding: 15px 25px;\r\n  margin: 0px 10px;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background: #263238;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  border-bottom: solid 2px #546E7A;\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.toolbar button:active,\r\n.toolbar button:focus,\r\n.toolbar button:hover {\r\n  background: #546e7a;\r\n  border-bottom: solid 2px #90A4AE;\r\n}\r\n\r\na:link    { color: #fff }\r\na:visited { color: #bebebe }\r\na:hover   { background: #fff; color: #37474F }\r\na:active  { color: #fff }\r\n\r\n/*Larger profiles and upwards*/\r\n\r\n@media all and (min-width: 768px) {\r\n  body {\r\n    padding: 25px 100px;\r\n  }\r\n  .markdown-editor .editor,\r\n  .markdown-editor .preview {\r\n    width: 47.5%;\r\n  }\r\n  .markdown-editor .preview {\r\n    margin-left: 5%;\r\n  }\r\n}"; });
//# sourceMappingURL=app-bundle.js.map