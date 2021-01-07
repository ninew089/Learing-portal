function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { materialCollapsibleMenuStyles } from '../../collapsibleMenu/material';
export default (function (theme) {
  var s = materialCollapsibleMenuStyles(theme);
  var palette = theme.palette,
      transitions = theme.transitions;
  return _extends(_extends({}, s), {}, {
    list: {
      '&:not($lv1List)': {
        padding: 0
      }
    },
    listItemSelected: _extends(_extends({}, s.listItemSelected), {}, {
      fontWeight: 500,
      backgroundColor: palette.grey[100]
    }),
    parent: {
      position: 'relative'
    },
    parentCollapsed: {
      '& > $row > $rowItem, & > $row > $listItem': {
        color: palette.text.primary
      }
    },
    parentActive: {
      '& > $row > $rowItem, & > $row > $listItem': {
        color: palette.text.primary
      }
    },
    lv1List: {},
    lv2RowItem: _extends(_extends({}, s.rowItem), {}, {
      paddingLeft: '2rem'
    }),
    lv2Item: {
      paddingLeft: '2rem'
    },
    lv3List: {
      '&:before': {
        content: '" "',
        position: 'absolute',
        width: 2,
        top: 14,
        bottom: 14,
        left: '2rem',
        backgroundColor: 'rgba(0,0,0,0.08)',
        zIndex: 1
      }
    },
    lv3Item: {
      position: 'relative',
      paddingLeft: '3rem',
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 2,
        height: '40%',
        left: '2rem',
        zIndex: 2,
        opacity: 0,
        transition: transitions.create()
      }
    },
    lv3ItemSelected: {
      '&:after': {
        backgroundColor: palette.text.primary,
        opacity: 1
      }
    }
  });
});