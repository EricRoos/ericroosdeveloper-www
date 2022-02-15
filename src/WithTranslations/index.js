import { get } from 'lodash'

export function getTranslationText(translationContent, path){
  return get(translationContent['en'], path, "en.missing.translation");
};

export default function withTranslations(translationContent){
  function Translate({path}){
    return getTranslationText(translationContent, path);
  }
  return Translate;
}
