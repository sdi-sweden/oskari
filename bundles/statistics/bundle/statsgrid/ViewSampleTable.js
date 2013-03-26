Oskari.clazz.category('Oskari.statistics.bundle.statsgrid.View', 'sample-table', {

    createSampleTable : function(elTbl) {
        this.createComplexSlickGrid(elTbl);
        /*this.createWideTallSlickGrid(elTbl);*/

    },
	/**
	 * @method createWideTallSlickGrid
	 */
	createWideTallSlickGrid : function(elTbl) {
		var grid, data = [], columns = [{
			id : "title",
			name : "Title",
			field : "title",
			width : 120
		}, {
			id : "duration",
			name : "Duration",
			field : "duration",
			width : 120
		}, {
			id : "%",
			name : "% Complete",
			field : "percentComplete",
			width : 120
		}, {
			id : "start",
			name : "Start",
			field : "start",
			width : 120
		}, {
			id : "finish",
			name : "Finish",
			field : "finish",
			width : 120
		}, {
			id : "effort-driven",
			name : "Effort Driven",
			field : "effortDriven",
			width : 120
		}, {
			id : "c7",
			name : "C7",
			field : "c7",
			width : 120
		}, {
			id : "c8",
			name : "C8",
			field : "c8",
			width : 120
		}, {
			id : "c9",
			name : "C9",
			field : "c9",
			width : 120
		}, {
			id : "c10",
			name : "C10",
			field : "c10",
			width : 120
		}, {
			id : "c11",
			name : "C11",
			field : "c11",
			width : 120
		}, {
			id : "c12",
			name : "C12",
			field : "c12",
			width : 120
		}, {
			id : "c13",
			name : "C13",
			field : "c13",
			width : 120
		}, {
			id : "c14",
			name : "C14",
			field : "c14",
			width : 120
		}, {
			id : "c15",
			name : "C15",
			field : "c15",
			width : 120
		}, {
			id : "c16",
			name : "C16",
			field : "c16",
			width : 120
		}, {
			id : "c17",
			name : "C17",
			field : "c17",
			width : 120
		}], options = {
			enableCellNavigation : false,
			enableColumnReorder : false
		};

		for(var i = 10000; i-- > 0; ) {
			data[i] = {
				title : "Task " + i,
				duration : "5 days",
				percentComplete : Math.round(Math.random() * 100),
				start : "01/01/2009",
				finish : "01/05/2009",
				effortDriven : (i % 5 == 0),
				c7 : "C7-" + i,
				c8 : "C8-" + i,
				c9 : "C9-" + i,
				c10 : "C10-" + i,
				c11 : "C11-" + i,
				c12 : "C12-" + i,
				c13 : "C13-" + i,
				c14 : "C14-" + i,
				c15 : "C15-" + i,
				c16 : "C16-" + i,
				c17 : "C17-" + i
			};
		}
		grid = new Slick.Grid(elTbl, data, columns, options);
	},
	/**
	 * @method createComplexSlickGrid
	 * Sample Table Grid for PoC
	 */
	createComplexSlickGrid : function(elTbl) {
		var dataView;
		var grid;
		var data = [];
		var columns = [{
			id : "sel",
			name : "#",
			field : "num",
			cssClass : "cell-selection",
			width : 40,
			resizable : false,
			selectable : false,
			focusable : false
		}, {
			id : "title",
			name : "Title",
			field : "title",
			width : 120,
			minWidth : 120,
			cssClass : "cell-title",
			sortable : true,
			editor : Slick.Editors.Text
		}, {
			id : "duration",
			name : "Duration",
			field : "duration",
			sortable : true
		}, {
			id : "%",
			name : "% Complete",
			field : "percentComplete",
			width : 80,
			formatter : Slick.Formatters.PercentCompleteBar,
			sortable : true,
			groupTotalsFormatter : avgTotalsFormatter
		}, {
			id : "start",
			name : "Start",
			field : "start",
			minWidth : 60,
			sortable : true
		}, {
			id : "finish",
			name : "Finish",
			field : "finish",
			minWidth : 60,
			sortable : true
		}, {
			id : "effort-driven",
			name : "Effort Driven",
			width : 80,
			minWidth : 20,
			maxWidth : 80,
			cssClass : "cell-effort-driven",
			field : "effortDriven",
			formatter : Slick.Formatters.Checkmark,
			sortable : true
		}];

		var options = {
			enableCellNavigation : true,
			editable : true
		};

		var sortcol = "title";
		var sortdir = 1;
		var percentCompleteThreshold = 0;
		var prevPercentCompleteThreshold = 0;

		function avgTotalsFormatter(totals, columnDef) {
			return "avg: " + Math.round(totals.avg[columnDef.field]) + "%";
		}

		function myFilter(item, args) {
			return item["percentComplete"] >= args.percentComplete;
		}

		function percentCompleteSort(a, b) {
			return a["percentComplete"] - b["percentComplete"];
		}

		function comparer(a, b) {
			var x = a[sortcol], y = b[sortcol];
			return (x == y ? 0 : (x > y ? 1 : -1));
		}

		function collapseAllGroups() {
			dataView.beginUpdate();
			for(var i = 0; i < dataView.getGroups().length; i++) {
				dataView.collapseGroup(dataView.getGroups()[i].value);
			}
			dataView.endUpdate();
		}

		function expandAllGroups() {
			dataView.beginUpdate();
			for(var i = 0; i < dataView.getGroups().length; i++) {
				dataView.expandGroup(dataView.getGroups()[i].value);
			}
			dataView.endUpdate();
		}

		function clearGrouping() {
			dataView.groupBy(null);
		}

		function groupByDuration() {
			dataView.groupBy("duration", function(g) {
				return "Duration:  " + g.value + "  <span style='color:green'>(" + g.count + " items)</span>";
			}, function(a, b) {
				return a.value - b.value;
			});
			dataView.setAggregators([new Slick.Data.Aggregators.Avg("percentComplete")], false);
		}

		function groupByDurationOrderByCount() {
			dataView.groupBy("duration", function(g) {
				return "Duration:  " + g.value + "  <span style='color:green'>(" + g.count + " items)</span>";
			}, function(a, b) {
				return a.count - b.count;
			});
			dataView.setAggregators([new Slick.Data.Aggregators.Avg("percentComplete")], false);
		}

		function groupByDurationOrderByCountGroupCollapsed() {
			dataView.groupBy("duration", function(g) {
				return "Duration:  " + g.value + "  <span style='color:green'>(" + g.count + " items)</span>";
			}, function(a, b) {
				return a.count - b.count;
			});
			dataView.setAggregators([new Slick.Data.Aggregators.Avg("percentComplete")], true);
		}

		$(function() {
			// prepare the data
			for(var i = 0; i < 50000; i++) {
				var d = (data[i] = {});

				d["id"] = "id_" + i;
				d["num"] = i;
				d["title"] = "Task " + i;
				d["duration"] = Math.round(Math.random() * 14);
				d["percentComplete"] = Math.round(Math.random() * 100);
				d["start"] = "01/01/2009";
				d["finish"] = "01/05/2009";
				d["effortDriven"] = (i % 5 == 0);
			}

			var groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
			dataView = new Slick.Data.DataView({
				groupItemMetadataProvider : groupItemMetadataProvider,
				inlineFilters : true
			});
			grid = new Slick.Grid(elTbl, dataView, columns, options);

			// register the group item metadata provider to add expand/collapse group handlers
			grid.registerPlugin(groupItemMetadataProvider);
			grid.setSelectionModel(new Slick.CellSelectionModel());

			/*var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));*/
			var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);

			grid.onSort.subscribe(function(e, args) {
				sortdir = args.sortAsc ? 1 : -1;
				sortcol = args.sortCol.field;

				if($.browser.msie && $.browser.version <= 8) {
					// using temporary Object.prototype.toString override
					// more limited and does lexicographic sort only by default, but can be much faster

					var percentCompleteValueFn = function() {
						var val = this["percentComplete"];
						if(val < 10) {
							return "00" + val;
						} else if(val < 100) {
							return "0" + val;
						} else {
							return val;
						}
					};
					// use numeric sort of % and lexicographic for everything else
					dataView.fastSort((sortcol == "percentComplete") ? percentCompleteValueFn : sortcol, args.sortAsc);
				} else {
					// using native sort with comparer
					// preferred method but can be very slow in IE with huge datasets
					dataView.sort(comparer, args.sortAsc);
				}
			});
			// wire up model events to drive the grid
			dataView.onRowCountChanged.subscribe(function(e, args) {
				grid.updateRowCount();
				grid.render();
			});

			dataView.onRowsChanged.subscribe(function(e, args) {
				grid.invalidateRows(args.rows);
				grid.render();
			});
			var h_runfilters = null;

			// wire up the slider to apply the filter to the model
			$("#pcSlider,#pcSlider2").slider({
				"range" : "min",
				"slide" : function(event, ui) {
					Slick.GlobalEditorLock.cancelCurrentEdit();

					if(percentCompleteThreshold != ui.value) {
						window.clearTimeout(h_runfilters);
						h_runfilters = window.setTimeout(filterAndUpdate, 10);
						percentCompleteThreshold = ui.value;
					}
				}
			});

			function filterAndUpdate() {
				var isNarrowing = percentCompleteThreshold > prevPercentCompleteThreshold;
				var isExpanding = percentCompleteThreshold < prevPercentCompleteThreshold;
				var renderedRange = grid.getRenderedRange();

				dataView.setFilterArgs({
					percentComplete : percentCompleteThreshold
				});
				dataView.setRefreshHints({
					ignoreDiffsBefore : renderedRange.top,
					ignoreDiffsAfter : renderedRange.bottom + 1,
					isFilterNarrowing : isNarrowing,
					isFilterExpanding : isExpanding
				});
				dataView.refresh();
				prevPercentCompleteThreshold = percentCompleteThreshold;
			}

			// initialize the model after all the events have been hooked up
			dataView.beginUpdate();
			dataView.setItems(data);
			dataView.setFilter(myFilter);
			dataView.setFilterArgs({
				percentComplete : percentCompleteThreshold
			});
			dataView.groupBy("duration", function(g) {
				return "Duration:  " + g.value + "  <span style='color:green'>(" + g.count + " items)</span>";
			}, function(a, b) {
				return a.value - b.value;
			});
			dataView.setAggregators([new Slick.Data.Aggregators.Avg("percentComplete")], false);
			dataView.collapseGroup(0);
			dataView.endUpdate();
		});
	}
});