## Hooks cycle de vie

- setup: avant tous les autres hooks (même avant beforeCreate)
- beforeCreate: à l'initialisation du composant
- created: accès aux datas et aux events (appel API)
- beforeMount: SSR
- mounted: monté
- beforeUpdate: après une modif
- updated: juste après beforeUPdate (component avec les nouvelles datas)
- beforeUnMount: avant de démonter l'instance du composant
- unmounted: tous les éléments nettoyés du DOM