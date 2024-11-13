import { ActionIcon } from '@lobehub/ui';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

const BottomActions = memo(() => {
  const { t } = useTranslation('common');
  const { hideGitHub } = useServerConfigStore(featureFlagsSelectors);

  return (
    <>
      {!hideGitHub && (
        <Link aria-label={'GitHub'} href="https://guilin.app" target={'_blank'}>
          <ActionIcon icon={Github} placement={'right'} title={'GitHub'} />
        </Link>
      )}
    </>
  );
});

export default BottomActions;
