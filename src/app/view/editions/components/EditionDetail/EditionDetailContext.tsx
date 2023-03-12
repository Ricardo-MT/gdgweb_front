import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo } from 'react';

import type { IEdition } from 'src/interfaces/IEdition';

const EditionDetailProvider = ({ children, edition }: EditionDetailProviderType) => {
  const value = useMemo<EditionDetailValues>(() => ({ edition }), [edition]);
  return <EditionDetailContext.Provider value={value}>{children}</EditionDetailContext.Provider>;
};

type EditionDetailProviderType = PropsWithChildren & {
  edition: IEdition | null;
};

type EditionDetailValues = {
  edition?: IEdition | null;
};
const defaultValues: EditionDetailValues = {
  edition: null,
};

const EditionDetailContext: React.Context<EditionDetailValues> = createContext<EditionDetailValues>(defaultValues);
export const useEditionDetailContext = () => useContext(EditionDetailContext);

export default EditionDetailProvider;
