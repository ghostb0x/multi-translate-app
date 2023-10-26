import React from 'react';
import styled from 'styled-components';

function LanguageSelector({ ...delegated }) {
  const LANGUAGES = [
    {
      language: 'Afrikaans',
      code: 'af',
    },
    {
      language: 'Albanian',
      code: 'sq',
    },
    {
      language: 'Amharic',
      code: 'am',
    },
    {
      language: 'Arabic',
      code: 'ar',
    },
    {
      language: 'Armenian',
      code: 'hy',
    },
    {
      language: 'Azerbaijani',
      code: 'az',
    },
    {
      language: 'Basque',
      code: 'eu',
    },
    {
      language: 'Belarusian',
      code: 'be',
    },
    {
      language: 'Bengali',
      code: 'bn',
    },
    {
      language: 'Bosnian',
      code: 'bs',
    },
    {
      language: 'Bulgarian',
      code: 'bg',
    },
    {
      language: 'Catalan',
      code: 'ca',
    },
    {
      language: 'Cebuano',
      code: 'ceb',
    },
    {
      language: 'Chinese (Simplified)',
      code: 'zh-CN',
    },
    {
      language: 'Chinese (Traditional)',
      code: 'zh-TW',
    },
    {
      language: 'Corsican',
      code: 'co',
    },
    {
      language: 'Croatian',
      code: 'hr',
    },
    {
      language: 'Czech',
      code: 'cs',
    },
    {
      language: 'Danish',
      code: 'da',
    },
    {
      language: 'Dutch',
      code: 'nl',
    },
    {
      language: 'English',
      code: 'en',
    },
    {
      language: 'Esperanto',
      code: 'eo',
    },
    {
      language: 'Estonian',
      code: 'et',
    },
    {
      language: 'Finnish',
      code: 'fi',
    },
    {
      language: 'French',
      code: 'fr',
    },
    {
      language: 'Frisian',
      code: 'fy',
    },
    {
      language: 'Galician',
      code: 'gl',
    },
    {
      language: 'Georgian',
      code: 'ka',
    },
    {
      language: 'German',
      code: 'de',
    },
    {
      language: 'Greek',
      code: 'el',
    },
    {
      language: 'Gujarati',
      code: 'gu',
    },
    {
      language: 'Haitian Creole',
      code: 'ht',
    },
    {
      language: 'Hausa',
      code: 'ha',
    },
    {
      language: 'Hawaiian',
      code: 'haw',
    },
    {
      language: 'Hebrew',
      code: 'iw',
    },
    {
      language: 'Hindi',
      code: 'hi',
    },
    {
      language: 'Hmong',
      code: 'hmn',
    },
    {
      language: 'Hungarian',
      code: 'hu',
    },
    {
      language: 'Icelandic',
      code: 'is',
    },
    {
      language: 'Igbo',
      code: 'ig',
    },
    {
      language: 'Indonesian',
      code: 'id',
    },
    {
      language: 'Irish',
      code: 'ga',
    },
    {
      language: 'Italian',
      code: 'it',
    },
    {
      language: 'Japanese',
      code: 'ja',
    },
    {
      language: 'Javanese',
      code: 'jw',
    },
    {
      language: 'Kannada',
      code: 'kn',
    },
    {
      language: 'Kazakh',
      code: 'kk',
    },
    {
      language: 'Khmer',
      code: 'km',
    },
    {
      language: 'Korean',
      code: 'ko',
    },
    {
      language: 'Kurdish',
      code: 'ku',
    },
    {
      language: 'Kyrgyz',
      code: 'ky',
    },
    {
      language: 'Lao',
      code: 'lo',
    },
    {
      language: 'Latin',
      code: 'la',
    },
    {
      language: 'Latvian',
      code: 'lv',
    },
    {
      language: 'Lithuanian',
      code: 'lt',
    },
    {
      language: 'Luxembourgish',
      code: 'lb',
    },
    {
      language: 'Macedonian',
      code: 'mk',
    },
    {
      language: 'Malagasy',
      code: 'mg',
    },
    {
      language: 'Malay',
      code: 'ms',
    },
    {
      language: 'Malayalam',
      code: 'ml',
    },
    {
      language: 'Maltese',
      code: 'mt',
    },
    {
      language: 'Maori',
      code: 'mi',
    },
    {
      language: 'Marathi',
      code: 'mr',
    },
    {
      language: 'Mongolian',
      code: 'mn',
    },
    {
      language: 'Myanmar (Burmese)',
      code: 'my',
    },
    {
      language: 'Nepali',
      code: 'ne',
    },
    {
      language: 'Norwegian',
      code: 'no',
    },
    {
      language: 'Nyanja (Chichewa)',
      code: 'ny',
    },
    {
      language: 'Pashto',
      code: 'ps',
    },
    {
      language: 'Persian',
      code: 'fa',
    },
    {
      language: 'Polish',
      code: 'pl',
    },
    {
      language: 'Portuguese (Portugal, Brazil)',
      code: 'pt',
    },
    {
      language: 'Punjabi',
      code: 'pa',
    },
    {
      language: 'Romanian',
      code: 'ro',
    },
    {
      language: 'Russian',
      code: 'ru',
    },
    {
      language: 'Samoan',
      code: 'sm',
    },
    {
      language: 'Scots Gaelic',
      code: 'gd',
    },
    {
      language: 'Serbian',
      code: 'sr',
    },
    {
      language: 'Sesotho',
      code: 'st',
    },
    {
      language: 'Shona',
      code: 'sn',
    },
    {
      language: 'Sindhi',
      code: 'sd',
    },
    {
      language: 'Sinhala (Sinhalese)',
      code: 'si',
    },
    {
      language: 'Slovak',
      code: 'sk',
    },
    {
      language: 'Slovenian',
      code: 'sl',
    },
    {
      language: 'Somali',
      code: 'so',
    },
    {
      language: 'Spanish',
      code: 'es',
    },
    {
      language: 'Sundanese',
      code: 'su',
    },
    {
      language: 'Swahili',
      code: 'sw',
    },
    {
      language: 'Swedish',
      code: 'sv',
    },
    {
      language: 'Tagalog (Filipino)',
      code: 'tl',
    },
    {
      language: 'Tajik',
      code: 'tg',
    },
    {
      language: 'Tamil',
      code: 'ta',
    },
    {
      language: 'Telugu',
      code: 'te',
    },
    {
      language: 'Thai',
      code: 'th',
    },
    {
      language: 'Turkish',
      code: 'tr',
    },
    {
      language: 'Ukrainian',
      code: 'uk',
    },
    {
      language: 'Urdu',
      code: 'ur',
    },
    {
      language: 'Uzbek',
      code: 'uz',
    },
    {
      language: 'Vietnamese',
      code: 'vi',
    },
    {
      language: 'Welsh',
      code: 'cy',
    },
    {
      language: 'Xhosa',
      code: 'xh',
    },
    {
      language: 'Yiddish',
      code: 'yi',
    },
    {
      language: 'Yoruba',
      code: 'yo',
    },
    {
      language: 'Zulu',
      code: 'zu',
    },
  ];

  const APILANGS = [
    {
      language: 'af',
    },
    {
      language: 'ak',
    },
    {
      language: 'am',
    },
    {
      language: 'ar',
    },
    {
      language: 'as',
    },
    {
      language: 'ay',
    },
    {
      language: 'az',
    },
    {
      language: 'be',
    },
    {
      language: 'bg',
    },
    {
      language: 'bho',
    },
    {
      language: 'bm',
    },
    {
      language: 'bn',
    },
    {
      language: 'bs',
    },
    {
      language: 'ca',
    },
    {
      language: 'ceb',
    },
    {
      language: 'ckb',
    },
    {
      language: 'co',
    },
    {
      language: 'cs',
    },
    {
      language: 'cy',
    },
    {
      language: 'da',
    },
    {
      language: 'de',
    },
    {
      language: 'doi',
    },
    {
      language: 'dv',
    },
    {
      language: 'ee',
    },
    {
      language: 'el',
    },
    {
      language: 'en',
    },
    {
      language: 'eo',
    },
    {
      language: 'es',
    },
    {
      language: 'et',
    },
    {
      language: 'eu',
    },
    {
      language: 'fa',
    },
    {
      language: 'fi',
    },
    {
      language: 'fr',
    },
    {
      language: 'fy',
    },
    {
      language: 'ga',
    },
    {
      language: 'gd',
    },
    {
      language: 'gl',
    },
    {
      language: 'gn',
    },
    {
      language: 'gom',
    },
    {
      language: 'gu',
    },
    {
      language: 'ha',
    },
    {
      language: 'haw',
    },
    {
      language: 'he',
    },
    {
      language: 'hi',
    },
    {
      language: 'hmn',
    },
    {
      language: 'hr',
    },
    {
      language: 'ht',
    },
    {
      language: 'hu',
    },
    {
      language: 'hy',
    },
    {
      language: 'id',
    },
    {
      language: 'ig',
    },
    {
      language: 'ilo',
    },
    {
      language: 'is',
    },
    {
      language: 'it',
    },
    {
      language: 'iw',
    },
    {
      language: 'ja',
    },
    {
      language: 'jv',
    },
    {
      language: 'jw',
    },
    {
      language: 'ka',
    },
    {
      language: 'kk',
    },
    {
      language: 'km',
    },
    {
      language: 'kn',
    },
    {
      language: 'ko',
    },
    {
      language: 'kri',
    },
    {
      language: 'ku',
    },
    {
      language: 'ky',
    },
    {
      language: 'la',
    },
    {
      language: 'lb',
    },
    {
      language: 'lg',
    },
    {
      language: 'ln',
    },
    {
      language: 'lo',
    },
    {
      language: 'lt',
    },
    {
      language: 'lus',
    },
    {
      language: 'lv',
    },
    {
      language: 'mai',
    },
    {
      language: 'mg',
    },
    {
      language: 'mi',
    },
    {
      language: 'mk',
    },
    {
      language: 'ml',
    },
    {
      language: 'mn',
    },
    {
      language: 'mni-Mtei',
    },
    {
      language: 'mr',
    },
    {
      language: 'ms',
    },
    {
      language: 'mt',
    },
    {
      language: 'my',
    },
    {
      language: 'ne',
    },
    {
      language: 'nl',
    },
    {
      language: 'no',
    },
    {
      language: 'nso',
    },
    {
      language: 'ny',
    },
    {
      language: 'om',
    },
    {
      language: 'or',
    },
    {
      language: 'pa',
    },
    {
      language: 'pl',
    },
    {
      language: 'ps',
    },
    {
      language: 'pt',
    },
    {
      language: 'qu',
    },
    {
      language: 'ro',
    },
    {
      language: 'ru',
    },
    {
      language: 'rw',
    },
    {
      language: 'sa',
    },
    {
      language: 'sd',
    },
    {
      language: 'si',
    },
    {
      language: 'sk',
    },
    {
      language: 'sl',
    },
    {
      language: 'sm',
    },
    {
      language: 'sn',
    },
    {
      language: 'so',
    },
    {
      language: 'sq',
    },
    {
      language: 'sr',
    },
    {
      language: 'st',
    },
    {
      language: 'su',
    },
    {
      language: 'sv',
    },
    {
      language: 'sw',
    },
    {
      language: 'ta',
    },
    {
      language: 'te',
    },
    {
      language: 'tg',
    },
    {
      language: 'th',
    },
    {
      language: 'ti',
    },
    {
      language: 'tk',
    },
    {
      language: 'tl',
    },
    {
      language: 'tr',
    },
    {
      language: 'ts',
    },
    {
      language: 'tt',
    },
    {
      language: 'ug',
    },
    {
      language: 'uk',
    },
    {
      language: 'ur',
    },
    {
      language: 'uz',
    },
    {
      language: 'vi',
    },
    {
      language: 'xh',
    },
    {
      language: 'yi',
    },
    {
      language: 'yo',
    },
    {
      language: 'zh',
    },
    {
      language: 'zh-CN',
    },
    {
      language: 'zh-TW',
    },
    {
      language: 'zu',
    },
  ];

  return (
    <>
      <Select {...delegated}>
        <option value={''}>--Select Language--</option>
        {LANGUAGES.map(({ code, language }) => {
          return (
            <option
              key={code}
              value={code}
            >
              {language}
            </option>
          );
        })}
      </Select>
    </>
  );
}

const Select = styled.select``;

export default LanguageSelector;
