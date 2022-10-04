import { ReactElement } from "react";
import { useGetAllQuery } from 'state/episodes'

export function Episodes(): ReactElement {
  const query = useGetAllQuery();

  return (
    <>
      <h1>Episodes</h1>
      <div>
        {query.isLoading ? 'CARREGANDO' : null}
        {
          query.data?.results?.map(episode => {
            return (
              <div key={episode.id}>
                {episode.name}
              </div>
            )
          })
        }
      </div>
    </>
  )
}