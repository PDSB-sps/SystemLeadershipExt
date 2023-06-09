import { FontSizes, FontWeights, DefaultPalette, getTheme } from 'office-ui-fabric-react/lib/Styling';
import {
  IStackStyles,
  IStackTokens,
  IStackItemStyles,
  ITextFieldStyles,
  IModalStyles,
  IDatePickerStyles,
  ITextFieldProps,
  IStyle,
  IButtonStyles,
  IDropdownStyles,
  IPersonaStyles,
  IIconStyles,
} from 'office-ui-fabric-react';

// Styles definition

export const memberPersonaStyle: IPersonaStyles = {
  root: {flexGrow: 7, padding: 5 , cursor: 'pointer'},
  details: {},
  primaryText:{},
  secondaryText:{},
  tertiaryText:{},
  optionalText:{},
  textContent:{},

};



export const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary
  }
};
export const stackItemStyles: IStackItemStyles = {
  root: {
    padding: 5,
    display: 'flex',
    width: 172,
    height: 32,
    fontWeight: FontWeights.regular,
  }
};

export const stackTokens: IStackTokens = {
  childrenGap: 10,

};

export const textFielStartDateDatePickerStyles: ITextFieldProps = {
  styles: {
    field: { backgroundColor: DefaultPalette.neutralLighter },
    root: {},
    wrapper: {},
    subComponentStyles: undefined
  }

};

export const textFielDueDateDatePickerStyles: ITextFieldProps = {
  styles: {
    field: { backgroundColor: DefaultPalette.neutralLighter },
    root: {},
    wrapper: {},
    subComponentStyles: undefined
  }

};

export const textFieldSearchStyles: ITextFieldStyles = {
  field: { backgroundColor: '#f3f2f1', borderBottomStyle: "solid", borderBottomWidth: 2, borderBottomColor: getTheme().palette.themePrimary },
  root: { backgroundColor: '#f3f2f1' },
  description: {},
  errorMessage: {},
  fieldGroup: {},
  icon: {},
  prefix: {},
  suffix: {},
  wrapper: {},
  subComponentStyles: undefined,
  revealButton: '',
  revealSpan: '',
  revealIcon: ''
};

export const textFieldCheckListItem: ITextFieldStyles = {
  field: {},
  root: { width: '100%', height: 32, marginRight: 15, },
  description: {},
  errorMessage: {},
  fieldGroup: {},
  icon: {},
  prefix: { backgroundColor: 'white' },
  suffix: { backgroundColor: 'white' },
  wrapper: { selectors: { [':hover']: { borderWidth: 1, borderStyle: 'solid', borderColor: DefaultPalette.themePrimary } } },
  subComponentStyles: undefined,
  revealButton: '',
  revealSpan: '',
  revealIcon: ''
};

export const textFieldStylesTaskName: ITextFieldStyles = {
  field: { backgroundColor: DefaultPalette.neutralLighter },
  root: {},
  description: {},
  errorMessage: {},
  fieldGroup: {},
  icon: {},
  prefix: {},
  suffix: {},
  wrapper: {},
  subComponentStyles: undefined,
  revealButton: '',
  revealSpan: '',
  revealIcon: ''
};

export const modalStyles: IModalStyles = {
  main: { minWidth: 400 ,maxWidth: 450, },
  root: {},
  keyboardMoveIcon: {},
  keyboardMoveIconContainer: {},
  layer: {},
  scrollableContent: {}
};

export const datePickerStartDateStyles: IDatePickerStyles = {
  callout: {},
  icon: {},
  root: { marginTop:0},
  textField: { backgroundColor: '#f4f4f4', borderWidth:0}
};

export const textFieldStylesdatePicker: ITextFieldProps = {
  style: { display: 'flex', justifyContent: 'flex-start', marginLeft: 15 },
  iconProps: { style: { left: 0 } }
};

export const peoplePicker: IStyle = {
  backgroundColor: DefaultPalette.neutralLighter
};

export const addMemberButton: IButtonStyles = {
  root: { marginLeft: 0, paddingLeft: 0, marginTop: 0, fontSize: FontSizes.medium },
  textContainer: {
    fontSize: FontSizes.medium,
    fontWeight: 'normal',
    color: '#666666',
    marginLeft: 5
  }
};

export const dropDownBucketStyles: IDropdownStyles = {

  root: { margin: 0 } ,
  title: {backgroundColor: '#f4f4f4', borderWidth:0},
  callout: {},
  caretDown: {},
  caretDownWrapper: {},
  dropdown:{},
  dropdownDivider: {},
  dropdownItem: {},
  dropdownItemDisabled: {},
  dropdownItemHeader:{},
  dropdownItemHidden: {},
  dropdownItemSelected:{},
  dropdownItemSelectedAndDisabled:{},
  dropdownItems:{},
  dropdownItemsWrapper:{},
  dropdownOptionText:{},
  errorMessage:{},
  label:{},
  panel:{},
  subComponentStyles: undefined,
};

export const dropDownProgressStyles: IDropdownStyles = {

  root: { margin: 0 } ,
  title: {backgroundColor: '#f4f4f4', borderWidth:0},
  callout: {},
  caretDown: {},
  caretDownWrapper: {},
  dropdown:{},
  dropdownDivider: {},
  dropdownItem: {},
  dropdownItemDisabled: {},
  dropdownItemHeader:{},
  dropdownItemHidden: {},
  dropdownItemSelected:{},
  dropdownItemSelectedAndDisabled:{},
  dropdownItems:{},
  dropdownItemsWrapper:{},
  dropdownOptionText:{},
  errorMessage:{},
  label:{},
  panel:{},
  subComponentStyles: undefined,
};

export const chromeCloseButtomStyle: IIconStyles = {
  root: {
    fontSize: FontSizes.smallPlus,
  }
};












