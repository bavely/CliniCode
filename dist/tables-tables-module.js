(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/datatable.net/datatable.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/datatable.net/datatable.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h4 class=\"title\">DataTables.net</h4>\n                <p class=\"category\">A powerful jQuery plugin handcrafted by our friends from <a href=\"https://datatables.net/\" target=\"_blank\">dataTables.net</a>. It is a highly flexible tool, based upon the foundations of progressive enhancement and will add advanced interaction controls to any HTML table. Please check out the <a href=\"https://datatables.net/manual/index\" target=\"_blank\">full documentation.</a></p>\n\n                <br>\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <h4 class=\"title\">DataTables.net</h4>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"fresh-datatables\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                      <th>{{ dataTable.headerRow[0] }}</th>\n                                      <th>{{ dataTable.headerRow[1] }}</th>\n                                      <th>{{ dataTable.headerRow[2] }}</th>\n                                      <th>{{ dataTable.headerRow[3] }}</th>\n                                      <th>{{ dataTable.headerRow[4] }}</th>\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[5] }}</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                      <th>{{ dataTable.footerRow[0] }}</th>\n                                      <th>{{ dataTable.footerRow[1] }}</th>\n                                      <th>{{ dataTable.footerRow[2] }}</th>\n                                      <th>{{ dataTable.footerRow[3] }}</th>\n                                      <th>{{ dataTable.footerRow[4] }}</th>\n                                      <th class=\"text-right\">{{ dataTable.footerRow[5] }}</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td class=\"text-right\">\n                                            <a class=\"btn btn-simple btn-info btn-icon like\"><i class=\"fa fa-heart\"></i></a>\n                                            <a class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                            <a class=\"btn btn-simple btn-danger btn-icon remove\"><i class=\"fa fa-times\"></i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/extendedtable/extendedtable.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/extendedtable/extendedtable.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Table with Links</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                      <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                                      <th>{{ tableData1.headerRow[1] }}</th>\n                                      <th>{{ tableData1.headerRow[2] }}</th>\n                                      <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\n                                      <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\n                                    </tr>\n                                </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let row of tableData1.dataRows\">\n                                      <td class=\"text-center\">{{row[0]}}</td>\n                                      <td>{{row[1]}}</td>\n                                      <td>{{row[2]}}</td>\n                                      <td class=\"text-right\">&euro; {{row[4]}}</td>\n                                      <td class=\"td-actions text-right\">\n                                          <a rel=\"tooltip\" title=\"View Profile\" class=\"btn btn-info btn-simple btn-xs\">\n                                              <i class=\"fa fa-user\"></i>\n                                          </a>\n                                          <a rel=\"tooltip\" title=\"Edit Profile\" class=\"btn btn-success btn-simple btn-xs\">\n                                              <i class=\"fa fa-edit\"></i>\n                                          </a>\n                                          <a rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                              <i class=\"fa fa-times\"></i>\n                                          </a>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Table with Switches</h4>\n                        <p class=\"category\">With some subtitle</p>\n                    </div>\n                    <div class=\"content table-full-width\">\n                        <table class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                      <th class=\"text-center\">{{ tableData2.headerRow[0] }}</th>\n                                      <th>{{ tableData2.headerRow[1] }}</th>\n                                      <th>{{ tableData2.headerRow[2] }}</th>\n                                      <th class=\"text-right\">{{ tableData2.headerRow[3] }}</th>\n                                      <th class=\"text-right\">{{ tableData2.headerRow[4] }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData2.dataRows\">\n                                        <td class=\"text-center\">{{row.id}}</td>\n                                        <td>{{row.name}}</td>\n                                        <td>{{row.job_position}}</td>\n                                        <td class=\"text-right\">&euro; {{row.salary}}</td>\n                                        <td class=\"text-right\">\n                                                    <bSwitch\n                                                    [switch-on-color]=\"'primary'\"\n                                                      [switch-off-text]=\"' '\"\n                                                      [switch-on-text]=\"' '\"\n                                                       [(ngModel)]=\"row.active\">\n                                                    </bSwitch>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header text-center\">\n                        <h4 class=\"title\">Table Big Boy</h4>\n                        <p class=\"category\">A table for content management</p>\n                        <br />\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                        <table class=\"table table-bigboy\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"text-center\">{{ tableData3.headerRow[0] }}</th>\n                                        <th>{{ tableData3.headerRow[1] }}</th>\n                                        <th class=\"th-description\">{{ tableData3.headerRow[2] }}</th>\n                                        <th class=\"text-right\">{{ tableData3.headerRow[3] }}</th>\n                                        <th class=\"text-right\">{{ tableData3.headerRow[4] }}</th>\n                                        <th></th>\n                                    </tr>\n                                </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let row of tableData3.dataRows\">\n                                      <td>\n                                          <div class=\"img-container\">\n                                              <img src=\"../../assets/img/{{row[0]}}\" alt=\"...\">\n                                          </div>\n                                      </td>\n                                      <td class=\"td-name\">\n                                          {{row[1]}}\n                                      </td>\n                                      <td>{{row[2]}}</td>\n                                      <td class=\"td-number\">\n                                          {{row[3]}}\n                                      </td>\n                                      <td class=\"td-number\">\n                                          {{row[4]}}\n                                      </td>\n                                      <td class=\"td-actions\">\n                                          <button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"View Post\" class=\"btn btn-info btn-simple btn-icon\">\n                                              <i class=\"fa fa-image\"></i>\n                                          </button>\n                                          <button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"Edit Post\" class=\"btn btn-success btn-simple btn-icon\">\n                                              <i class=\"fa fa-edit\"></i>\n                                          </button>\n                                          <button type=\"button\" rel=\"tooltip\" data-placement=\"left\" title=\"Remove Post\" class=\"btn btn-danger btn-simple btn-icon \">\n                                              <i class=\"fa fa-times\"></i>\n                                          </button>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/regulartable/regulartable.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/regulartable/regulartable.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Striped Table with Hover</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"content table-responsive table-full-width\">\n                          <table class=\"table table-hover table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"card card-plain\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">Table on Plain Background</h4>\n                            <p class=\"category\">Here is a subtitle for this table</p>\n                        </div>\n                        <div class=\"content table-responsive table-full-width\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData2.dataRows\">\n                                        <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">Regular Table with Colors</h4>\n                            <p class=\"category\">Here is a subtitle for this table</p>\n                        </div>\n                        <div class=\"content table-responsive table-full-width\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                      <th *ngFor=\"let cell of tableData3.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                              <tbody>\n                                      <tr class=\"success\">\n                                          <td *ngFor=\"let cell of tableData3.dataRows[0]\">{{cell}}</td>\n                                      </tr>\n                                      <tr>\n                                          <td *ngFor=\"let cell of tableData3.dataRows[1]\">{{cell}}</td>\n                                      </tr>\n                                      <tr class=\"info\">\n                                          <td *ngFor=\"let cell of tableData3.dataRows[2]\">{{cell}}</td>\n                                      </tr>\n                                      <tr>\n                                          <td *ngFor=\"let cell of tableData3.dataRows[3]\">{{cell}}</td>\n                                      </tr>\n                                      <tr class=\"danger\">\n                                          <td *ngFor=\"let cell of tableData3.dataRows[4]\">{{cell}}</td>\n                                      </tr>\n                                      <tr>\n                                          <td *ngFor=\"let cell of tableData3.dataRows[5]\">{{cell}}</td>\n                                      </tr>\n                                      <tr class=\"warning\">\n                                          <td *ngFor=\"let cell of tableData3.dataRows[6]\">{{cell}}</td>\n                                      </tr>\n                              </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/tables/datatable.net/datatable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/datatable.net/datatable.component.ts ***!
  \*************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataTable = {
            headerRow: ['Name', 'Position', 'Office', 'Age', 'Date', 'Actions'],
            footerRow: ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions'],
            dataRows: [
                ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Caesar Vance', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Charde Marshall', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Colleen Hurst', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Dai Rios', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Doris Wilder', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Fiona Green', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Garrett Winters', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gavin Cortez', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Gavin Joyce', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gloria Little', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Haley Kennedy', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Herrod Chandler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Hope Fuentes', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Howard Hatfield', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Jena Gaines', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Jenette Caldwell', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Jennifer Chang', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Martena Mccray', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Michael Silva', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Michelle House', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Paul Byrd', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Prescott Bartlett', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Quinn Flynn', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Rhona Davidson', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Shou Itou', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Sonya Frost', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Suki Burks', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Tatyana Fitzpatrick', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Tiger Nixon', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Timothy Mooney', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Unity Butler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Vivian Harrell', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Yuri Berry', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
            ]
        };
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('#datatables').DataTable();
        // Edit record
        table.on('click', '.edit', function () {
            var $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        table.on('click', '.like', function () {
            alert('You clicked on Like button');
        });
    };
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-table-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./datatable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/datatable.net/datatable.component.html")).default
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/extendedtable/extendedtable.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/extendedtable/extendedtable.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExtendedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedTableComponent", function() { return ExtendedTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ExtendedTableComponent = /** @class */ (function () {
    function ExtendedTableComponent() {
        this.state_plain = true;
    }
    ExtendedTableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', ''],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
        };
        this.tableData2 = {
            headerRow: ['#', 'Name', 'Job Position', 'Salary', 'Active'],
            dataRows: [
                { id: 1, name: 'Andrew Mike', job_position: 'Develop', salary: '99,225', active: false },
                { id: 2, name: 'John Doe', job_position: 'Design', salary: '89,241', active: false },
                { id: 3, name: 'Alex Mike', job_position: 'Design', salary: '92,144', active: true },
                { id: 4, name: 'Mike Monday', job_position: 'Marketing', salary: '49,990', active: true }
            ]
        };
        this.tableData3 = {
            headerRow: ['Thumb', 'Blog Title', 'Description', 'Date', 'Views', ''],
            dataRows: [
                ['blog-1.jpg', '10 Things that all designers do', 'Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.', '30/08/2016', '1,225', ''],
                ['blog-2.jpg', 'Back to School Offer', 'Design is not just what it looks like and feels like. Design is how it works.', '17/07/2016', '49,302', ''],
                ['blog-3.jpg', 'First Dribbble Meetup in Romania', 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.', '23/06/2016', '1,799', ''],
                ['blog-4.jpg', 'How we created our startup with 0$', 'A desk is a generally wooded piece of furniture and a type of useful table often used in a school or office setting for various academic or professional activities ...', '30/08/2016', '23,030', ''],
                ['blog-1.jpg', 'To use or not to use Bootstrap', 'The Office Chair adapts naturally to virtually every body and is a permanent fixture.', '10/05/2016', '13,763', '']
            ]
        };
    };
    ExtendedTableComponent.prototype.ngAfterViewInit = function () {
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();
        $('.switch-plain').bootstrapSwitch({
            onColor: '',
            onText: '',
            offText: ''
        });
    };
    ExtendedTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'extended-table-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./extendedtable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/extendedtable/extendedtable.component.html")).default
        })
    ], ExtendedTableComponent);
    return ExtendedTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/regulartable/regulartable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tables/regulartable/regulartable.component.ts ***!
  \***************************************************************/
/*! exports provided: RegularTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularTableComponent", function() { return RegularTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RegularTableComponent = /** @class */ (function () {
    function RegularTableComponent() {
    }
    RegularTableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
        this.tableData3 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice (Success)', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez (Info)', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene (Danger)', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
                ['7', 'Mike Chaney (Warning)', '$38,735', 'Romania', 'Bucharest']
            ]
        };
    };
    RegularTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'regular-table-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./regulartable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/regulartable/regulartable.component.html")).default
        })
    ], RegularTableComponent);
    return RegularTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables.routing */ "./src/app/tables/tables.routing.ts");
/* harmony import */ var _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendedtable/extendedtable.component */ "./src/app/tables/extendedtable/extendedtable.component.ts");
/* harmony import */ var _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regulartable/regulartable.component */ "./src/app/tables/regulartable/regulartable.component.ts");
/* harmony import */ var _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatable.net/datatable.component */ "./src/app/tables/datatable.net/datatable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_5__["TablesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_6__["ExtendedTableComponent"],
                _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"],
                _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_7__["RegularTableComponent"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/tables/tables.routing.ts":
/*!******************************************!*\
  !*** ./src/app/tables/tables.routing.ts ***!
  \******************************************/
/*! exports provided: TablesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutes", function() { return TablesRoutes; });
/* harmony import */ var _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedtable/extendedtable.component */ "./src/app/tables/extendedtable/extendedtable.component.ts");
/* harmony import */ var _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regulartable/regulartable.component */ "./src/app/tables/regulartable/regulartable.component.ts");
/* harmony import */ var _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatable.net/datatable.component */ "./src/app/tables/datatable.net/datatable.component.ts");



var TablesRoutes = [{
        path: '',
        children: [{
                path: 'regular',
                component: _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_1__["RegularTableComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_0__["ExtendedTableComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'datatables.net',
                component: _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map