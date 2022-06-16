import React from 'react';
import Languages from 'features/global/services/languages-service';

type PropsType = {
  searchString: string;
};
export default ({ searchString }: PropsType) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4">
        <img src="/public/icons/not-found.svg" alt="Not found" />
      </div>
      <div className="p-2">
        {Languages.t('components.searchpopup.no_results_for')} “
        <span className="font-semibold">{searchString}</span>”.{' '}
        {Languages.t('components.searchpopup.try_new_search')}
      </div>
    </div>
  );
};
