export interface IScreenProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  onPullToRefresh?: (finishCallback: () => void) => void;
  bounces?: boolean;
  bgColor?: string;
  keyboardAwareScroll?: boolean;
}
