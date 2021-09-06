import { SocialButton } from '@superlink/client-root/shared';
import clsx from 'clsx';
import { VFC } from 'react';

import styles from './style.module.less';

export interface SocialAuthButtonsProps {
  disabled: boolean;
  facebookLabel: string;
  googleLabel: string;
}

export const SocialAuthButtons: VFC<SocialAuthButtonsProps> = ({
  disabled,
  facebookLabel,
  googleLabel,
}) => {
  return (
    <div className={clsx(styles.socialAuthButtons)}>
      <SocialButton
        block
        size="large"
        social="facebook"
        className={clsx(styles.socialAuthItem)}
        disabled={disabled}
      >
        {facebookLabel}
      </SocialButton>
      <SocialButton
        block
        size="large"
        social="google"
        className={clsx(styles.socialAuthItem)}
        disabled={disabled}
      >
        {googleLabel}
      </SocialButton>
    </div>
  );
};
