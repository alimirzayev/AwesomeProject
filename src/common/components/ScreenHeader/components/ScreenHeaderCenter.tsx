import { Colors } from '../../../../theme';
import { Typography } from '../../../atoms';
import { IScreenHeaderProps } from '../ScreenHead.types';

const ScreenHeaderCenter = ({ title}: IScreenHeaderProps) => {
  return (
    <>
      {title && (
        <Typography
          weight={'600'}
          color={Colors.primary.black}
          >
          {title}
        </Typography>
      )
      }
    </>
  );
};

export default ScreenHeaderCenter;
