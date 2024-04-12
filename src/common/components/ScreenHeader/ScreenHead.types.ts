export interface IScreenHeaderProps {
  navigateTo?: any;
  LeftContent?: React.ReactNode;
  RightContent?: React.ReactNode;
  title?: string;
  goBack?: boolean;
  closeIcon?: boolean;
  notification?: boolean;
  logo?: boolean;
  onPress?: () => void;
  onBackPress?: () => void;
  bgColor?: string;
}
