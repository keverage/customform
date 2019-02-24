# Documentation CustomForm

Ce script permet de personnaliser les éléments d'un formulaire. Éléments supportés : checkbox, radio, select et file (il est possible d'ajouter d'autres éléments).

* Compatibilité : IE10+
* Dépendance : jQuery

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


## API

#### setOptions()

Enregistre les options pour un support

* @param *{string}* **type**    Type de support
* @param *{object}* **options** Options du support

        customForm.setOptions('radio', {
            onClick: function () {
                console.log('click on radio');
            }
        });

#### setSupports()

Met en place tous les supports

* @param {array} **types** Liste des types de support à exécuter

        customForm.setSupports(['checkbox', 'radio']);

#### setSupport()

Met en place un support

* @param *{string}* **type** Type de support
* @param *{object=undefined}* **options** Options du support
* @return *{object}* **support** infos

#### getSupportClassName()

Récupère le nom de la classe du support correspondant

* @param  *{string}* **support** Nom du support
* @return *{string}*

#### getInstance()

Récupère l'instance via l'élément input

* @param  *{object}* **instances** Retour de setSupport() ou liste des instances
* @param  *{object}* **input**     Élément input
* @return *{object|boolean}*

#### getInstanceName()

Récupère le nom formaté d'une instance via l'élément input

* @param  *{object}* **input** Élément input
* @return *{boolean}*

#### onReady()

Une fois customForm prêt

* @param *{function}* **callback** Fonction à exécuter

#### isEmpty()

Détermine si la valeur de l'input est vide

* @return *{boolean}*

#### isDisabled()

Détermine si l'input est désactivé

* @return *{boolean}*

#### getElements()

Retourne tous les éléments de customform

* @return *{object}*

#### getContext()

Retourne le contexte de customform (form)

* @return *{object}*

#### getInput()

Retourne l'élément input

* @return *{object}*

#### getInputType()

Retourne le type de l'élément input

* @return *{string}*

#### getWrapper()

Retourne le wrapper générique global (.customform)

* @param {object=undefined} **children** Permet de récupérer le wrapper à partir d'un enfant
* @return *{object}*

#### getWrapperInput()

Retourne le wrapper générique de l'élément input (.customform-input)

* @return *{object}*

#### setLog()

Créer un log

* @param *{string}* **log**
* @param *{string=undefined}* **type**

#### replacePrefixClass()

Remplace la chaine {prefix} par la classe de préfix dans toutes les classes