﻿export var editorLocalization = {
    currentLocale: "",
    locales: {},
    getString: function (strName: string, locale: string = null) {
        var loc = this.getLocale(locale);
        var path = strName.split('.');
        var obj = loc;
        for (var i = 0; i < path.length; i++) {
            obj = obj[path[i]];
            if (!obj) {
                if (loc === defaultStrings) return path[i];
                return this.getString(strName, "en");
            }
        }
        return obj;
    },
    getPropertyName: function (strName: string, locale: string = null) {
        var obj = this.getProperty(strName, locale);
        if (obj["name"]) return obj["name"];
        return obj;
    },
    getPropertyTitle: function (strName: string, locale: string = null) {
        var obj = this.getProperty(strName, locale);
        if (obj["title"]) return obj["title"];
        return "";
    },
    getProperty: function (strName: string, locale: string = null) {
        var obj = this.getString("p." + strName, locale);
        if (obj !== strName) return obj;
        var pos = strName.indexOf('_');
        if (pos < -1) return obj;
        strName = strName.substr(pos + 1);
        return this.getString("p." + strName, locale);
    },
    getPropertyValue: function(value: any, locale: string = null) {
        if(value === "" || value === null || typeof value === undefined) return "";
        return this.getValueInternal(value, "pv", locale);
    },
    getValidatorName: function(name: string, locale: string = null) {
        return this.getValueInternal(name, "validators", locale);
    },
    getTriggerName: function(name: string, locale: string = null) {
        return this.getValueInternal(name, "triggers", locale);
    },
    getLocale(locale: string) {
        if (!locale) locale = this.currentLocale;
        var loc = locale ? this.locales[locale] : defaultStrings;
        if (!loc) loc = defaultStrings;
        return loc;
    },
    getValueInternal(value: any, prefix: string, locale: string = null) {
        var loc = this.getLocale(locale);
        var res = loc[prefix] ? loc[prefix][value] : null;
        if(!res) res = defaultStrings[prefix][value];
        return res ? res : value;
    },
    getLocales: function (): Array<string> {
        var res = [];
        res.push("");
        for (var key in this.locales) {
            res.push(key);
        }
        return res;
    }
};

export var defaultStrings = {
    //survey templates
    survey: {
        edit: "Edit",
        dropQuestion: "Please drop a question here.",
        copy: "Copy",
        addToToolbox: "Add to toolbox",
        deletePanel: "Delete Panel",
        deleteQuestion: "Delete Question"
    },
    //questionTypes
    qt: {
        checkbox: "Checkbox",
        comment: "Comment",
        dropdown: "Dropdown",
        file: "File",
        html: "Html",
        matrix: "Matrix (single choice)",
        matrixdropdown: "Matrix (multiple choice)",
        matrixdynamic: "Matrix (dynamic rows)",
        multipletext: "Multiple Text",
        panel: "Panel",
        paneldynamic: "Panel (dynamic panels)",
        radiogroup: "Radiogroup",
        rating: "Rating",
        text: "Single Input",
        boolean: "Boolean"
    },
    //Strings in Editor
    ed: {
        survey: "Survey",
        addNewPage: "Add New Page",
        newPageName: "page",
        newQuestionName: "question",
        newPanelName: "panel",
        testSurvey: "Test Survey",
        testSurveyAgain: "Test Survey Again",
        testSurveyWidth: "Survey width: ",
        embedSurvey: "Embed Survey",
        saveSurvey: "Save Survey",
        designer: "Survey Designer",
        jsonEditor: "JSON Editor",
        undo: "Undo",
        redo: "Redo",
        options: "Options",
        generateValidJSON: "Generate Valid JSON",
        generateReadableJSON: "Generate Readable JSON",
        toolbox: "Toolbox",
        delSelObject: "Delete selected object",
        correctJSON: "Please correct JSON.",
        surveyResults: "Survey Result: "
    },
    //Property Editors
    pe: {
        apply: "Apply",
        ok: "OK",
        cancel: "Cancel",
        reset: "Reset",
        close: "Close",
        delete: "Delete",
        addNew: "Add New",
        removeAll: "Remove All",
        edit: "Edit",
        empty: "<empty>",
        fastEntry: "Fast Entry",
        formEntry: "Form Entry",
        testService: "Test the service",
        expressionHelp: "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",

        propertyIsEmpty: "Please enter a value",
        value: "Value",
        text: "Text",
        required: "Required?",
        columnEdit: "Edit column: {0}",
        itemEdit: "Edit item: {0}",

        hasOther: "Has other item",
        name: "Name",
        title: "Title",
        cellType: "Cell type",
        colCount: "Column count",
        choicesOrder: "Select choices order",
        visible: "Is visible?",
        isRequired: "Is required?",
        startWithNewLine: "Is start with new line?",
        rows: "Row count",
        placeHolder: "Input place holder",
        showPreview: "Is image preview shown?",
        storeDataAsText: "Store file content in JSON result as text",
        maxSize: "Maximum file size in bytes",
        imageHeight: "Image height",
        imageWidth: "Image width",
        rowCount: "Row count",
        addRowText: "Add row button text",
        removeRowText: "Remove row button text",
        minRateDescription: "Minimum rate description",
        maxRateDescription: "Maximum rate description",
        inputType: "Input type",
        optionsCaption: "Options caption",

        qEditorTitle: "Edit question: {0}",
        tabs: {
            general: "General",
            fileOptions: "Options",
            html: "Html Editor",
            columns: "Columns",
            rows: "Rows",
            choices: "Choices",
            visibleIf: "Visible If",
            rateValues: "Rate Values",
            choicesByUrl: "Choices from Web",
            matrixChoices: "Default Choices",
            multipleTextItems: "Text Inputs",
            validators: "Validators"
        },
        editProperty: "Edit property '{0}'",
        items: "[ Items: {0} ]",

        enterNewValue: "Please, enter the value.",
        noquestions: "There is no any question in the survey.",
        createtrigger: "Please create a trigger",
        triggerOn: "On ",
        triggerMakePagesVisible: "Make pages visible:",
        triggerMakeQuestionsVisible: "Make elements visible:",
        triggerCompleteText: "Complete the survey if succeed.",
        triggerNotSet: "The trigger is not set",
        triggerRunIf: "Run if",
        triggerSetToName: "Change value of: ",
        triggerSetValue: "to: ",
        triggerIsVariable: "Do not put the variable into the survey result.",
        verbChangeType: "Change type ",
        verbChangePage: "Change page "
    },
    //Property values
    pv: {
        true: "true",
        false: "false",

        ar: "العربية",
        cz: "čeština",
        da: "dansk",
        de: "deutsch",
        en: "english",
        es: "español",
        fi: "suomalainen",
        fr: "français",
        gr: "ελληνικά",
        hu: "magyar",
        it: "italiano",
        is: "íslenska",
        lv: "latviešu",
        nl: "hollandsk",
        pl: "polski",
        pt: "português",
        ro: "română",
        ru: "русский",
        sv: "svenska",
        tr: "türkçe",
        "zh-cn": "简体中文"
    },
    //Operators
    op: {
        empty: "is empty",
        notempty: "is not empty",
        equal: "equals",
        notequal: "not equals",
        contains: "contains",
        notcontains: "not contains",
        greater: "greater",
        less: "less",
        greaterorequal: "greater or equals",
        lessorequal: "Less or Equals"
    },
    //Embed window
    ew: {
        angular: "Use Angular version",
        jquery: "Use jQuery version",
        knockout: "Use Knockout version",
        react: "Use React version",
        vue: "Use Vue version",
        bootstrap: "For bootstrap framework",
        standard: "No bootstrap",
        showOnPage: "Show survey on a page",
        showInWindow: "Show survey in a window",
        loadFromServer: "Load Survey JSON from server",
        titleScript: "Scripts and styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    validators: {
        answercountvalidator: "answer count",
        emailvalidator: "e-mail",
        numericvalidator: "numeric",
        regexvalidator: "regex",
        textvalidator: "text"
    },
    triggers: {
        completetrigger: "complete survey",
        setvaluetrigger: "set value",
        visibletrigger: "change visibility"
    },
    //Properties
    p: {
        name: "name",
        title: { name: "title", title: "Leave it empty, if it is the same as 'Name'" },
        survey_title: { name: "title", title: "It will be shown on every page." },
        page_title: { name: "title", title: "Page title" }
    }
};

editorLocalization.locales["en"] = defaultStrings;
