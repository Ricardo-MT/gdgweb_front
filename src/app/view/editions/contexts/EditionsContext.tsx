import type { PropsWithChildren } from 'react';
import { useEffect, useState, createContext, useContext, useMemo } from 'react';

import { useRepositoryContext } from 'src/app/contexts/repositories/repositoriesContext';
import type { IEdition } from 'src/interfaces/IEdition';

const EditionsProvider: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const { editionRepository } = useRepositoryContext();
  const [editions, setEditions] = useState<IEdition[]>([]);
  useEffect(() => {
    editionRepository
      .getEditions()
      .then((res) => {
        setEditions(res);
      })
      .catch((e) => {});
  }, [editionRepository]);

  const value = useMemo<EditionsValues>(
    () => ({
      editions,
    }),
    [editions]
  );
  return <EditionsContext.Provider value={value}>{children}</EditionsContext.Provider>;
};

type EditionsValues = { editions: IEdition[] };
const defaultValues: EditionsValues = { editions: [] };

const EditionsContext: React.Context<EditionsValues> = createContext<EditionsValues>(defaultValues);
export const useEditionsContext = () => useContext(EditionsContext);

export default EditionsProvider;
