import React, { useState,Component } from 'react';
import MaterialTable from 'material-table';
import XLSX from 'xlsx';
import readExcel from '../services/excelService';
import ImportExcelData from '../services/excelService';
import data from '../services/excelService';
import colDefs from '../services/excelService';
import importExcel from '../services/excelService'
const EXTENSIONS = ['xlsx', 'xls'];
function ReadExcelData(){
    return (
        <div className="App">
          <h1 align="center">React-App</h1>
          <h4 align='center'>Import Data from Excel, CSV in Material Table</h4>
          <input type="file" onChange={importExcel} />
          <MaterialTable title="Olympic Data" data={data} columns={colDefs} />
        </div>
      );
}
export default ReadExcelData;