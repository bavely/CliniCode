const q1 = `-- queue movement detail
set transaction isolation level read uncommitted
declare @getdate datetime
  , @days_out int

set @getdate = '1800-12-31'
--set @getdate = convert(varchar, getdate(), 111)
set @days_out = 7
--set @days_out = ( select    s.VALUE_
--                  from      SETTINGS s
--                  inner join CPRSET cs on cs.NO = s.CFK_CPRSET
--                                          and cs.DELFLAG = 0
--                  where     s.DELFLAG = 0
--                            and SETTING = 'PTREFDAYSOUT'
--                            and CATEGORY = 'enterprise'
--                )

select distinct
        sites.Company_Id
into    #get_sites
from    Framing.Company sites
where   sites.Frame_Current_Ind = 1
        and sites.Record_Status_Id = 1
        and sites.Company_Id in (517086)

select  no
into    #get_orders
from    rpbi.fn_sprx_include(@days_out, @getdate)
where   sprx_include_yn = 'y'

--select  sum(_today) as _today
--      , sum(_1_day) as _1_day
--      , sum(_2_day) as _2_day
--      , sum(_3_day) as _3_day
--      , sum(_4_day) as _4_day
--      , sum(order_count) as order_count
--      , LISTNAME as LISTNAME
--      , therapy
--      , last_event
--      , team
--      , employee
--      , core_service
--      , stat_order
--from    ( select    *
--                  , ( case when age_entered_queue <= 0 then 1
--                           else 0
--                      end ) as _today
--                  , ( case when age_entered_queue = 1 then 1
--                           else 0
--                      end ) as _1_day
--                  , ( case when age_entered_queue = 2 then 1
--                           else 0
--                      end ) as _2_day
--                  , ( case when age_entered_queue = 3 then 1
--                           else 0
--                      end ) as _3_day
--                  , ( case when age_entered_queue >= 4 then 1
--                           else 0
--                      end ) as _4_day
--          from      ( select    *
--                              , datediff(d, last_event_date, @getdate) as age_last_event
--                              , datediff(d, entered_queue, @getdate) as age_entered_queue
--                      from      (
            select    --1 as test
                                          --, count(ltrim(rtrim(PatientOrder.TherapyType_Name))) as therapy
                                          --, count(PatientOrder.PatientOrder_Id) as order_sys_id
                                          --,  count(ltrim(rtrim(PatientOrder.Team_Name))) as team
                                           nullif(WorkflowState.Name, '####') as LISTNAME
                                          --, nullif(count(WorkflowInstance.LastEvent_Name), '####') as last_event
                                          --, try_convert(datetime, nullif(WorkflowInstance.LastEventDate, '1899-01-01')) as last_event_date
                                         -- ,  coalesce(try_convert(datetime, dateadd(mi, datediff(mi, getutcdate(), getdate()), workflowhistory.TransitionDate)), '1/1/1900') as entered_queue
                                          --,count( user_.Employee_Name) as employee
                                          --, 1 as order_count
                                          --, ( case when svc.core_status = 'Yes' then 'Core Service'
                                                   --else 'Non-Core Service'
                                              --end ) as core_service
                                          --, case when PatientOrder.IsStatOrder = 0 then 'Non-Stat Order'
                                            --     else 'Stat Order'
                                            --end as stat_order
                                          --, count(PatientOrder.Patient_Id) as order_patient_sys_id
                                          , count(PatientOrder.Description) as Queue_Count
                                  from      Framing.PatientOrder
                                  inner join Framing.Patient hr on hr.Patient_Id = PatientOrder.Patient_Id
                                                                   and hr.Frame_Current_Ind = 1
                                  inner join #get_orders orders_get on orders_get.no = PatientOrder.PatientOrder_Id
                                  inner join #get_sites sites on sites.Company_Id = PatientOrder.Company_Id
                                  left join ( select    wfh.Reference_Id as order_id
                                                      , max(wfh.WorkflowHistory_Id) as last_history_id
                                              from      Framing.WorkflowHistory wfh
                                              where     wfh.Record_Status_Id = 1
                                                        and wfh.Frame_Current_Ind = 1
                                                        and wfh.WorkflowDefinition_Id = 5
                                              group by  wfh.Reference_Id
                                            ) as get_last_wf_history on get_last_wf_history.order_id = PatientOrder.PatientOrder_Id
                                  left join Framing.WorkflowHistory on WorkflowHistory.WorkflowHistory_Id = get_last_wf_history.last_history_id
                                                                       and WorkflowHistory.Frame_Current_Ind = 1
                                                                       and WorkflowHistory.Record_Status_Id = 1
                                     and workflowhistory.Reference_Id=get_last_wf_history.order_id
                                  left join Framing.WorkflowState on Framing.WorkflowState.WorkflowState_Id = WorkflowHistory.ToWorkflowState_Id
                                                                     and Framing.WorkflowState.Frame_Current_Ind = 1
                                                                     and Framing.WorkflowState.Record_Status_Id = 1
                                   and framing.workflowstate.WorkflowDefinition_Id=5
                                  left join Framing.WorkflowInstance on Framing.WorkflowInstance.WorkflowInstance_Id = WorkflowHistory.WorkflowInstance_Id -- This join was wrong. i chnged to correct
                                                                        and Framing.WorkflowInstance.Frame_Current_Ind = 1
                                                                        and Framing.WorkflowInstance.Record_Status_Id = 1
                                    and framing.workflowinstance.WorkflowDefinition_Id=5
                                    and framing.workflowinstance.Reference_Id=get_last_wf_history.order_id
                                  ----left join Framing.WorkflowHistory queue_move on queue_move.WorkflowHistory_Id = WorkflowInstance.LastEvent_Id
                                  ----                                                and queue_move.Record_Status_Id = 1
                                  ----                                                and queue_move.Frame_Current_Ind = 1
                                  left join Framing.DHSUser user_ on user_.Employee_ID = WorkflowHistory.TransitionUser_Id
                                                                     and user_.Frame_Current_Ind = 1
                                                                     and user_.Record_Status_Id = 1
                                  left join rpbi.THERAPY_TYPES svc on svc.therapy_type = PatientOrder.TherapyType_Id
                                  where     PatientOrder.PatientOrderType_Id = 1
                                            and PatientOrder.PatientOrderType_Id in ( 1, 2 )
                                            and PatientOrder.IsSpecialtyRx = 1
                                            and PatientOrder.Frame_Current_Ind = 1
                                            and PatientOrder.Record_Status_Id = 1
                      --and Framing.[WorkflowInstance].WorkflowName= 'SPRx Orders'
                      group by WorkflowState.Name
--                                ) as mydata
--                    ) as mydata2
--        ) as mydata3
--group by LISTNAME
--      , therapy
--      , team
--      , employee
--      , core_service
--      , stat_order
--      , mydata3.last_event

drop table #get_sites
drop table #get_orders

`


const q2 = function(fname, lname, mrn) {
    const q = `SELECT        Patient.Patient.MedicalRecordNo, Patient.Patient.MedicalHistory, Common.Person.FirstName, Common.Person.LastName, Common.Person.PersonType_Id, Common.Person.DateOfBirth,
       Common.Person.Gender_Id, Common.Person.MaritalStatus_Id
    FROM            Patient.Patient INNER JOIN
          Common.Person ON Patient.Patient.Id = Common.Person.Id
    WHERE        (Common.Person.FirstName like '${fname}%') AND (Common.Person.LastName like '${lname}%') AND (Patient.Patient.MedicalRecordNo like '${mrn}%')`

    return q
}

const q4 = function(fname, lname, mrn) {

    const q = `SELECT * FROM [dbo].[Person] where FirstName like '${fname}%' AND  LastName like '${lname}%'`
    return q
}

const q5 = function(fname, lname, mrn) {

    const q = `INSERT INTO NewPatient (FirstName, LastName, MedicalRecordNo)
    VALUES ('${fname}', '${lname}', '${mrn}');`
    return q
}

const q6 = function(fname, lname) {



    const q = `INSERT INTO Common.Person  (Common.Person.FirstName,Common.Person.LastName)
  VALUES ('${fname}', '${lname}');`
    return q
}

const q7 = function(fname, lname, DOB, email, Add, city, state, zip, contry, cellphone, homephone) {



    const q = `INSERT INTO [dbo].[Person]
        ([PersonType_Id]
        ,[FirstName]
        ,[LastName]
        ,[DateOfBirth]
        ,[Email]
        ,[Address]
        ,[City]
        ,[State]
        ,[ZipCode]
        ,[PrimaryPhoneNumber]
        ,[SecondaryPhoneNumber]
        ,[Gender]
        ,[Language])
VALUES ('3','${fname}', '${lname}' ,'${DOB}', '${email}','${Add}', '${city}', '${state}', '${zip}','${cellphone}', '${homephone}','M','ENG');`
    return q
}
module.exports = {

    q1,
    q2,
    q4,
    q5,
    q6,
    q7
}