declare interface IMyCompanyLibraryLibraryStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  CustomQueryModifier: {
      GroupName:string;
      PrefixLabel:string;
      PrefixDescription:string;
      PrefixPlaceholder:string;
      SuffixLabel:string;
      SuffixDescription:string;
      SuffixPlaceholder:string;
    }
}

declare module 'MyCompanyLibraryLibraryStrings' {
  const strings: IMyCompanyLibraryLibraryStrings;
  export = strings;
}


declare interface IMyTasksWebPartStrings {
  LinkNameHerePlaceHolder: string;
  TextToDisplayLabel: string;
  LinkWebAddressPlaceHolder: string;
  AddressLabel: string;
  AddLinkLabel: string;
  Uploading: string;
  CancelLabel: string;
  SaveLabel: string;
  LoadingLabel: string;
  DocumentsLabel: string;
  FileAlreadyAddedToTaskLabel: string;
  AssignsLabel: string;
  AssignedLabel: string;
  NonMembersLabel: string;
  UnassignedLabel: string;
  LoadingAssignLabel: string;
  TypeUserOrEmailLabel: string;
  EditLabel: string;
  AddAttachmentLabel: string;
  SharePointLabel: string;
  LinkLabel: string;
  FileLabel: string;
  AddNewItemLabel: string;
  AttachmentsLabel: string;
  CheckListLabel: string;
  DescriptionLabel: string;
  DueDateLabel: string;
  StartDateLabel: string;
  ProgressPlaceHolder: string;
  SelectBucketLabel: string;
  SelectBucketPlaceHolder: string;
  AssignTaskLabel: string;
  AssignLabel: string;
  EnterTaskNameLabel: string;
  TaskNameLabel: string;
  RemoveLabel: string;
  NoTaskFoundLabel: string;
  RefreshLabel: string;
  SearchLabel: string;
  AddLabel: string;
  HasCommentsLabel: string;
  HasAttachementsLabel: string;
  CheckListItemsCompletedLabel: string;
  LoadingTaskLabel: string;
  NotStartedLabel: string;
  InProgressLabel: string;
  CompletedTaskOnLabel: string;
  completed: string;
  started: string;
  notStarted: string;
  alltasks: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  ProgressLabel:string;
}

declare module 'MyTasksWebPartStrings' {
  const strings: IMyTasksWebPartStrings;
  export = strings;
}
