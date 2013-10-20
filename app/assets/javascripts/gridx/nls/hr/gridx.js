define({
//Body
	loadingInfo: "Učitavanje...",
	emptyInfo: "Nema stavki za prikaz",
	loadFailInfo: "Učitavanje podataka nije uspjelo!",
	loadMore: "Učitaj više",
	loadMoreLoading: "Učitavanje...",
	loadPrevious: "Učitaj prethodno",
	loadPreviousLoading: "Učitavanje...",

//FilterBar
	"clearFilterDialogTitle": "Brisanje filtera",
	"filterDefDialogTitle": "Filter",
	"defaultRuleTitle": "Pravilo",
	"ruleTitleTemplate": "Pravilo ${ruleNumber}",
	"noFilterApplied": "Filter nije primijenjen.",
	"defineFilter": "Definiraj filter",
	"conditionEqual": "jednako",
	"conditionNotEqual": "nije jednako",
	"conditionLess": "je manje od",
	"conditionLessEqual": "manje ili jednako",
	"conditionGreater": "je veće od",
	"conditionGreaterEqual": "veće ili jednako",
	"conditionContain": "sadrži",
	"conditionIs": "je",
	"conditionStartWith": "počinje sa",
	"conditionEndWith": "završava sa",
	"conditionNotContain": "ne sadrži",
	"conditionIsNot": "nije",
	"conditionNotStartWith": "ne počinje sa",
	"conditionNotEndWith": "ne završava sa",
	"conditionBefore": "prije",
	"conditionAfter": "poslije",
	"conditionRange": "raspon",
	"conditionIsEmpty": "je prazan",
	"all": "sve",
	"any": "bilo koje",
	"relationAll": "sva pravila",
	"waiRelAll": "Usporedi sva sljedeća pravila:",
	"relationAny": "bilo koja pravila",
	"waiRelAny": "Usporedi bilo koje od sljedećih pravila:",
	"relationMsgFront": "Usporedi",
	"relationMsgTail": "",
	"and": "i",
	"or": "ili",
	"addRuleButton": "Bilo koje pravilo",
	"waiAddRuleButton": "Dodaj novo pravilo",
	"removeRuleButton": "Ukloni pravilo",
	"waiRemoveRuleButtonTemplate": "Ukloni pravilo ${0}",
	"addRuleButton": "Dodaj pravilo filtera",
	"cancelButton": "Opoziv",
	"waiCancelButton": "Opoziv ovog dijaloga",
	"clearButton": "Obriši",
	"waiClearButton": "Obriši filter",
	"filterButton": "Filter",
	"waiFilterButton": "Predaj filter",
	"columnSelectLabel": "Stupac",
	"waiColumnSelectTemplate": "Stupac za pravilo ${0}",
	"conditionSelectLabel": "Uvjet",
	"waiConditionSelectTemplate": "Uvjet za pravilo ${0}",
	"valueBoxLabel": "Vrijednost",
	"waiValueBoxTemplate": "Unesite vrijednost filtera za pravilo ${0}",
	"rangeTo": "do",
	"rangeTemplate": "od ${0} do ${1}",
	"statusTipHeaderColumn": "Stupac",
	"statusTipHeaderCondition": "Pravila",
	"statusTipTitle": "Traka filtera",
	"statusTipMsg": "Kliknite traku filtera za filtriranje po vrijednostima u ${0}.",
	"anycolumn": "bilo koji stupac",
	"statusTipTitleNoFilter": "Traka filtera",
	"statusTipTitleHasFilter": "Filter",
	"statusTipRelPre": "Usporedi",
	"statusTipRelPost": "pravila.",
	"statusTipHeaderAll": "Usporedi sva pravila.",
	"statusTipHeaderAny": "Usporedi bilo koje pravilo.",
	"defaultItemsName": "stavke",
	"filterBarMsgHasFilterTemplate": "${0} od ${1} ${2} prikazano.",
	"filterBarMsgNoFilterTemplate": "Filter nije primijenjen",
	"filterBarDefButton": "Definiraj filter",
	"waiFilterBarDefButton": "Filtriraj tablicu",
	"a11yFilterBarDefButton": "Filtriraj...",
	"filterBarClearButton": "Obriši filter",
	"waiFilterBarClearButton": "Obriši filter",
	"closeFilterBarBtn": "Zatvori traku filtera",
	"clearFilterMsg": "Ovo uklanja filter i prikazuje sve raspoložive slogove.",
	"anyColumnOption": "Bilo koji stupac",
	"trueLabel": "Istinito",
	"falseLabel": "Neistinito",
	"radioTrueLabel": "Istinita vrijednost",
	"radioFalseLabel": "Neistinita vrijednost",
	"beginTimeRangeLabel": "Početna vrijednost raspona vremena",
	"endTimeRangeLabel": "Završna vrijednost raspona vremena",
	"beginDateRangeLabel": "Početna vrijednost raspona datuma",
	"endDateRangeLabel": "Završna vrijednost raspona datuma",
	"startsWithExpr": "${0}*",

//NestedSort
	singleSort: "Jedan sort",
	nestedSort: "Ugniježđeni sort",
	ascending: "Klik za sort uzlazno",
	descending: "Klik za sort silazno",
	sortingState: "${0} - ${1}",
	unsorted: "Ne sortiraj ovaj stupac",
	waiSingleSortLabel: "${0} - sortirano po ${1}. Odaberite sortiranje po ${2}",
	waiNestedSortLabel:"${0} - ugniježđeno sortirano po ${1}. Odaberite ugniježđeno sortiranje po ${2}",

//PaginationBar
	pagerWai: 'Pager',

	pageIndex: '${0}',
	pageIndexTitle: 'Strana ${0}',

	firstPageTitle: 'Prva stranica',
	prevPageTitle: 'Prethodna stranica',
	nextPageTitle: 'Sljedeća stranica',
	lastPageTitle: 'Posljednja stranica',

	pageSize: '${0}',
	pageSizeTitle: '${0} stavki po stranici',
	pageSizeAll: 'Sve',
	pageSizeAllTitle: 'Sve stavke',

	description: '${0} - ${1} od ${2} stavki.',
	descriptionEmpty: 'Mreža je prazna.',

	summary: 'Ukupno: ${0}',
	summaryWithSelection: 'Ukupno: ${0} Odabrano: ${1}',

	gotoBtnTitle: 'Idi na određenu stranicu',

	gotoDialogTitle: 'Idi na stranicu',
	gotoDialogMainMsg: 'Navedite broj stranice:',
	gotoDialogPageCount: '(${0} stranica)',
	gotoDialogOKBtn: 'Kreni',
	gotoDialogCancelBtn: 'Opoziv',
	// for drop down pagination bar
	pageLabel: 'Stranica',
	pageSizeLabel: 'Redovi',

//QuickFilter
	filterLabel: 'Filter',
	clearButtonTitle: 'Brisanje filtera',
	buildFilterMenuLabel: 'Kreiranje filtera&hellip;',
	apply: 'Primjena filtera',

//Sort
	helpMsg: '${0} - Click to sort or control-click to add to sort',	//need translation
	singleHelpMsg: '${0} - Click to sort',	//need translation
	priorityOrder: 'sort priority ${0}',	//need translation

//SummaryBar
	summaryTotal: 'Ukupno: ${0}',
	summarySelected: 'Odabrano: ${0}',
	summaryRange: 'Range: ${0}-${1}',	//need translation

//Other
	indirectSelectAll: "Press SPACE to select all.",	//need translation
	indirectDeselectAll: "Press SPACE to deselect all.",	//need translation
	treeExpanded: "Control + left arrow key to collapse this row.",	//need translation
	treeCollapsed: "Control + right arrow key to expand this row."	//need translation
});
