"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _NestedMenu = _interopRequireDefault(require("./NestedMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('NestedMenu', function () {
  it('render without clashes', function () {
    expect(function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_NestedMenu["default"], {
        menus: getMenus()
      }));
    }).not.toThrow();
  });
  it('onOpenKeysChange is called when some menu is toggled', function () {
    var onOpenKeysChange = jest.fn();

    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_NestedMenu["default"], {
      menus: getMenus(),
      onOpenKeysChange: onOpenKeysChange,
      getActionProps: function getActionProps(_ref) {
        var key = _ref.key;
        return {
          'data-testid': "action-".concat(key)
        };
      }
    })),
        getByTestId = _render.getByTestId;

    var toggleBtn = getByTestId('action-refGuides');

    _react2.fireEvent.click(toggleBtn);

    expect(onOpenKeysChange).toHaveBeenCalledTimes(1);
    expect(onOpenKeysChange).toHaveBeenCalledWith(['refGuides']);

    _react2.fireEvent.click(toggleBtn);

    expect(onOpenKeysChange).toHaveBeenCalledTimes(2);
    expect(onOpenKeysChange).toHaveBeenCalledWith([]);
  });
});

var getMenus = function getMenus() {
  return [{
    key: 'intro',
    label: 'Introduction'
  }, {
    key: 'refGuides',
    label: 'Reference Guides',
    isToggleOutside: true,
    subMenus: [{
      key: 'preparingEnv',
      label: 'Preparing Your Environment',
      subMenus: [{
        key: 'browserSupport',
        label: 'Browser Support'
      }, {
        key: 'gatsbyWindow',
        label: 'Gatsby on Windows'
      }, {
        key: 'gatsbyLinux',
        label: 'Gatsby on Linux'
      }]
    }, {
      key: 'deployHosting',
      label: 'Deploying & Hosting',
      subMenus: [{
        key: 'preparing',
        label: 'Preparing a Site for Deployment'
      }, {
        key: 'awsAmplify',
        label: 'Deploying to AWS Amplify'
      }, {
        key: 'awsS3',
        label: 'Deploying to S3 and CloudFront'
      }]
    }, {
      key: 'customConfig',
      label: 'Custom Configuration',
      subMenus: [{
        key: 'babeljs',
        label: 'Customizing Babel.js Config'
      }, {
        key: 'babelPluginMacro',
        label: 'Using Babel Plugin Macros'
      }, {
        key: 'customWebpack',
        label: 'Adding a Custom Webpack Config'
      }]
    }]
  }, {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [{
      key: 'themes',
      label: 'Gatsby Themes'
    }, {
      key: 'link',
      label: 'Gatsby Link'
    }, {
      key: 'image',
      label: 'Gatsby Image'
    }, {
      key: 'config',
      label: 'Gatsby Config'
    }]
  }, {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [{
      key: 'v2',
      label: 'v2 Release Notes'
    }, {
      key: 'v1',
      label: 'v1 Release Notes'
    }, {
      key: 'v1Tov2',
      label: 'Migration from v1 to v2'
    }, {
      key: 'v0Tov1',
      label: 'Migration from v0 to v1'
    }]
  }];
};