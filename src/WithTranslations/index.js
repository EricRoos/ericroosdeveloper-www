import { get } from 'lodash'

export function getTranslationText(translationContent, path){
  return get(translationContent['en'], path, "en.missing.translation");
};

export default function withTranslations(translationContent){
  function Translate({path, className}){
    return (
      <span className={className || ''} dangerouslySetInnerHTML={{__html: getTranslationText(translationContent, path)}} />
    )
  }
  return Translate;
}
