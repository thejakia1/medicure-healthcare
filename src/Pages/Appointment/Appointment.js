import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="container bg mt-4">
            <div className="row">
                <div class="col-md-12">
                    <div>

                        <div className="service-name fw-bold fs-5 mt-5" >Book Appointment</div>
                        <hr />
                        <p className="text-center">During this pandemic situation of Covid 19 we prefer our patients to get online consultancy. Our walk-ins are available also. But In case of consultancy you can take our help from home. </p>
                        <hr />
                        <div class="form-group1">
                            <label for="Select">Contac Us Via: </label>
                            <select id="Select" class="form-control"><option>Email</option><option>Phone</option></select>
                        </div>
                        <div class="form-group1">
                            <label for="inputfullname"></label>
                            <input type="fullname" class="form-control" id="inputFullname" placeholder="Your Name" />
                        </div>
                        <div class="form-group1">
                            <label for="inputemail"></label>
                            <input type="email" class="form-control" id="inputemail" placeholder="Your Email" />
                        </div>
                        <div class="form-group1">
                            <label for="inputphone"></label>
                            <input type="phone" class="form-control" id="inputphone" placeholder="Your Phone" />
                        </div>
                        <hr />

                        <p>Appointment Date:</p>



                        <div class="form-group">
                            <div class="input-group date" id="datetimepicker8">
                                <input type="text" class="form-control" />
                                <span class="input-group-addon"><span class="fa fa-calendar"></span></span>
                            </div>
                        </div>



                        <div class="form-group">
                            <label for="Select">Desired Service:</label>
                            <select id="Select" class="form-control">
                                <option>Gynecology</option>
                                <option>Cardiology</option>
                                <option>Hematology</option>
                                <option>Orthopedic Surgery</option>
                                <option>ENT Surgery</option>
                                <option>Covid-19</option>

                            </select>
                        </div>


                        <div class="form-group">
                            <textarea class="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7">

                            </textarea>

                        </div>


                        <div class="checkbox">
                            <label><input type="checkbox" /> Accept our Terms and Conditions</label>
                        </div>

                        <Link to="/home"><button type="submit" class="btn btn-warning m-2">Submit</button></Link>
                        <button type="submit" class="btn btn-secondary">Cancel</button>

                    </div>
                </div>
            </div>
            {/* footer part */}
            <Footer></Footer>
        </div>
    );
};

export default Appointment;