import { get } from 'lodash'

export default function withTranslations(translationContent){
  function Translate({path}){
    return get(translationContent['en'], path);
  }
  return Translate;
}
