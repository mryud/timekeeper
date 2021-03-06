import React, { Component } from 'react';

class TimeKeepingManagement extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="content bg-white">
                <div class="container-fluid">
                    <div class="row">
                        <ControlBox/>
                        <ResultTable/>
                    </div>
                </div>
            </div>
         );
    }
}

class ControlBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="filter-table col-12">
                            <div class="row border-bottom border-info pb-3">
                                <div class="col-2">
                                    <label class="text-dark h4 mt-0">Chấm công hằng ngày</label>
                                </div>
                                <div class="col-5">
                                    <div class="form-row">
                                        <div class="col-auto">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>01</option>
                                                <option>02</option>

                                            </select>
                                        </div>
                                        <div class="col-auto">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Tháng 1</option>
                                                <option>Tháng 2</option>
                                                <option>Tháng 3</option>

                                            </select>
                                        </div>
                                        <div class="col-auto">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>

                                            </select>
                                        </div>
                                    </div>


                                </div>


                            </div>
                            <div class="row  my-4">
                                <div class="col-auto">
                                        <label for="">Phòng ban</label>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="inlineRadioOptions"/>
                                    </div>
                                </div>
                                
                                <div class="col align-self-end">
                                    
                                    <button class="btn btn-success float-right mt-0">Xuất file</button>
                                    <button class="btn btn-warning float-right mt-0  mx-2">Nạp file</button>
                                </div>

                            </div>
                            <div class="row justify-content-center">
                                    <div class="col-auto">
                                            <div class="form-check form-check-inline text-info mr-5">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                    value="option1"/>
                                                <label class="form-check-label ml-0 pl-1" for="inlineRadio1">Tất cả</label>
                                            </div>
        
                                            <div class="form-check form-check-inline text-danger">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                    value="option3"/>
                                                <label class="form-check-label ml-0 pl-1" for="inlineRadio3">Chưa hợp lệ</label>
                                            </div>
        
                                        </div>
                            </div>
                        </div>
                        
         );
    }
}

class ResultTable extends Component {
    state = {  }

    renderTableRows(num) {
        const elementList = [];
        for (let i = 0; i < num; i++) {
            elementList.push(<TableRow/>);
        }
        console.log(elementList);
        return elementList;
    }

    render() { 
        return ( 
            <div class="main-table col-12  p-3 mt-3">
                            <div class="">
                                <table class="table table-hover table-bordered">
                                    <thead class="thead-light">
                                        <th scope="col">#</th>
                                        <th>Mã nhân viên</th>
                                        <th>Tên nhân viên</th>
                                        <th>Phòng ban</th>
                                        <th>Vị trí</th>
                                        <th>Ca làm việc</th>

                                        <th colspan="2">Thời gian</th>

                                    </thead>
                                    <tbody>
                                        {this.renderTableRows(15)}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    
         );
    }
}

class TableRow extends Component {
    state = {  }
    render() { 
        return ( 
            <tr>
                                            <td>1</td>
                                            <td>NHV0001</td>
                                            <td>Lê Tùng Dương</td>
                                            <td>D23 Dongjin</td>
                                            <td>Công nhân </td>
                                            <td>
                                                CA1
                                            </td>
                                            <td>
                                                <a class="d-inline text-primary" href="">6:00</a>
                                                <a class="d-inline text-danger" href="">6:00</a>
                                            </td>
                                            <td>
                                                <a class="text-info">
                                                    <i class="fa fa-plus"></i>
                                                </a>
                                            </td>
                                        </tr>
         );
    }
}
 
export default TimeKeepingManagement;