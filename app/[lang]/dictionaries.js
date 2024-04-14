const dictionaries = {
    en: () => import('./dictionaries/en.json').then(module => module.default),
    bn: () => import('./dictionaries/bn.json').then(module => module.default),
};

export const getDictionaries = lang => dictionaries[lang]();
