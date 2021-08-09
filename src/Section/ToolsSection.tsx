import * as React from 'react';
import { CardContainer } from '../Container/CardContainer';
import { CopyToClipBoardButton } from '../FunctionalButton/CopyToClipBoardButton';
import { CopyToClipBoardAllTabUrlButton } from '../FunctionalButton/CopyToClipBoardAllTabUrlButton';
import { OpenByTextButton } from '../FunctionalButton/OpenByTextButton';
import { ReloadAllTabsButton } from '../FunctionalButton/ReloadAllTabsButton';
import { CloseDuplicateTabButton } from '../FunctionalButton/CloseDuplicateTabButton';

export const ToolsSection = (): JSX.Element => {
  return (
    <>
      <CardContainer title="テキストエリアのURLをすべて開く">
        <OpenByTextButton />
      </CardContainer>
      <CardContainer title={null} cardClassName="mt-3 p-2">
        <CopyToClipBoardButton />
        <CopyToClipBoardAllTabUrlButton />
        <ReloadAllTabsButton />
        <CloseDuplicateTabButton />
      </CardContainer>
    </>
  );
};
