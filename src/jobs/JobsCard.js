import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./JobCard.css";

function JobCard({
id,
title,
salary,
equity,
companyName,
companyHandle,
}) {
    console.debug("JobCard");
    const { hasAppliedtoJob, applyToJob, unApplyToJob } = useContext(userContext);
    const [applied, setApplied] = useState(true);

    const apply = async () => {
        if (hasAppliedtoJob(id)) return; //? wat is returned?
        {
            applyToJob(id);
            setApplied(true);
            console.log("job added", id);
        }
    };

    useEffect(() => {
        if (hasAppliedToJob) {
            setApplied(hasAppliedtoJob(id));
        }
    }, [id, hasAppliedToJob]);

    const unapplied = async () => {
        unApplyToJob(id);
        setApplied(false);
        console.log("Job removed", id);
    };

    const unappliedButton = (
        <button
        onClick={unapplied}
        className="JobCard-button btn btn-outline-success font-weight-bold text-uppercase float-right">
        {/* go over the second part of useEffect here */}
            Unapplied{" "}
        </button>
    );

    const applyButton = (
        <button
        onCLick={apply}
        className="JobCard-button btn btn-warning font-weight-bold text-uppercase float-right">
            Apply{" "}
        </button>
    );

    return (
        <section>
            <Card className="JobCard card">
                {" "}
                {applied}
                <CardBody className="job-card-body">
                    <CardTitle className="font-weight-bold text-center">
                        <h6 className="card-title">
                            {title} (job id: {id})
                        </h6>
                    </CardTitle>
                    <CardSubtitle>
                        <CardText className="font-italic">
                            Salary: {salary ? `$ ${salary}` : "N/A"}
                            <br></br>
                            Equity: {+equity ? equity : "None"} 
                        </CardText>
                        {applied ? unappliedButton : applyButton}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </section>
    );
}

export default JabCard;