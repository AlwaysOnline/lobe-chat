import { ActionIcon } from '@lobehub/ui';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

const BottomActions = memo(() => {
  const { hideGitHub } = useServerConfigStore(featureFlagsSelectors);

  return (
    !hideGitHub ? (
      <Link aria-label={'GitHub'} href="https://guilin.app" target={'_blank'}>
        <ActionIcon icon={Github} placement={'right'} title={'GitHub'} /> {/* GitHub 图标 */}
      </Link>
    ) : null
  );
});
