import * as React from 'react';
import { CardContainer } from '../Container/CardContainer';
import OpenByTextButton from '../FunctionalButton/OpenByTextButton';
import { CopyToClipBoardButton } from '../FunctionalButton/CopyToClipBoardButton';
import { CopyToClipBoardAllTabUrlButton } from '../FunctionalButton/CopyToClipBoardAllTabUrlButton';
import ReloadAllTabsButton from '../FunctionalButton/ReloadAllTabsButton';
import CloseDuplicateTabButton from '../FunctionalButton/CloseDuplicateTabButton';

export default function ToolsSection(): JSX.Element {
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
}
