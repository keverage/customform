# Documentation CustomForm

Ce script permet de personnaliser les éléments d'un formulaire. Éléments supportés : checkbox, radio, select et file (il est possible d'ajouter d'autres éléments).

* Compatibilité : IE10+
* Dépendance : jQuery


## Options

| Option                           | Type     | Valeur par défaut | Description                                               |
|----------------------------------|----------|-------------------|-----------------------------------------------------------|
| classes                          | object   | Voir ci-dessous   | Objet pour les options ci-dessous                         |
| &nbsp;&nbsp;&nbsp;&nbsp;prefix   | string   | 'customform'      | Préfix de classe                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;input    | string   | '{prefix}-input'  | Classe autour de l'input                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;disabled | string   | 'is-disabled'     | Classe quand l'input est désactivé                        |
| tabindexStart                    | integer  | 0                 | Valeur de l'attribut tabindex au chargement de CustomForm |
| supportBeforeLoad                | function | undefined         | Callback au début du chargement du support                |
| supportComplete                  | function | undefined         | Callback à la fin du chargement du support                |


## Méthodes

| Méthode             | Arguments                                                                                                       | Description                                                                               |
|---------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| setOptions          | **support** *string* Nom du support, **options** *object* Options utilisateur à passer au support               | Enregistre les options pour un support                                                    |
| setSupports         | **types** *array* Liste des types de support à exécuter (optionnel)                                             | Définition de tous les supports présent dans $.CustomForm.supports ou passés en paramètre |
| setSupport          | **support** *string* Nom du support, **[options]** *object* Options utilisateur à passer au support             | Définition d'un support                                                                   |
| getSupportClassName | **support** *string* Nom du support                                                                             | Récupère le nom de la classe JS correspondant à l'argument                                |
| getInstance         | **instances** *object* Retour de setSupport() ou liste des instances, **input** *jQuery object* Élément input   | Récupère l'instance via l'élément input                                                   |
| getInstanceName     | **input** *jQuery object* Élément input                                                                         | Récupère le nom formaté d'une instance via l'élément input                                |


## Initialiser CustomForm

    var customForm = $('form').customForm([options]);
    
## Initialiser un support
    
Un *support* correspond à un type d'input à personnaliser (checkbox, radio, select, etc).
    
    customForm.setSupport('radio', [options]);


## Supports présents dans CustomForm

* [Checkbox & Radio](docs/check.md)
* [Select](docs/select.md)
* [File](docs/file.md)


## Support supplémentaire

* [Créer un support](docs/custom.md)