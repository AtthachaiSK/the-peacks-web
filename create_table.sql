create table CardScan(
  EmployeeID varchar(255),
  Clock DATETIME
);
create table Workschedule(
  EmployeeID varchar(255),
  WorkDate DATE,
  BeginTime DATETIME,
  EndTime DATETIME
);

insert into CardScan (EmployeeID,Clock) 
values 
('001',STR_TO_DATE('01/01/2012 07:00:00','%d/%m/%Y %H:%i:%s')),
('001',STR_TO_DATE('01/01/2012 12:00:00','%d/%m/%Y %H:%i:%s')),
('001',STR_TO_DATE('01/01/2012 17:30:00','%d/%m/%Y %H:%i:%s')),
('002',STR_TO_DATE('01/01/2012 08:40:00','%d/%m/%Y %H:%i:%s')),
('002',STR_TO_DATE('01/01/2012 21:00:00','%d/%m/%Y %H:%i:%s'));


insert into Workschedule (EmployeeID,WorkDate,BeginTime,EndTime) 
values 
('001',STR_TO_DATE('01/01/2012','%d/%m/%Y'), STR_TO_DATE('01/01/2012 08:00:00','%d/%m/%Y %H:%i:%s'),STR_TO_DATE('01/01/2012 17:00:00','%d/%m/%Y %H:%i:%s')),
('001',STR_TO_DATE('02/01/2012','%d/%m/%Y'), STR_TO_DATE('02/01/2012 08:00:00','%d/%m/%Y %H:%i:%s'),STR_TO_DATE('02/01/2012 17:00:00','%d/%m/%Y %H:%i:%s')),
('002',STR_TO_DATE('01/01/2012','%d/%m/%Y'), STR_TO_DATE('01/01/2012 10:00:00','%d/%m/%Y %H:%i:%s'),STR_TO_DATE('01/01/2012 20:00:00','%d/%m/%Y %H:%i:%s')),
('002',STR_TO_DATE('02/01/2012','%d/%m/%Y'), STR_TO_DATE('02/01/2012 10:00:00','%d/%m/%Y %H:%i:%s'),STR_TO_DATE('02/01/2012 20:00:00','%d/%m/%Y %H:%i:%s'));



select EmployeeID, WorkDate,BeginTime,EndTime,ClockIn, ClockOut, BeginTime, hour(TIMEDIFF(BeginTime,ClockIn)) as dif_in, hour(TIMEDIFF(EndTime,ClockOut)) as dif_out from ( select CS1.EmployeeID as Em1, CS1.ClockIn, CS1.ClockOut,CS1.WD, Workschedule.EmployeeID, Workschedule.WorkDate,Workschedule.BeginTime,
Workschedule.EndTime 
from ( select EmployeeID,min(Clock) as ClockIn, max(Clock) as ClockOut, CAST(min(Clock) AS DATE) as WD
   from CardScan group by date(Clock), EmployeeID ) AS CS1 LEFT JOIN Workschedule ON CS1.EmployeeID = Workschedule.EmployeeID and CS1.WD = Workschedule.WorkDate) as CW where BeginTime >= ClockIn and hour(TIMEDIFF(BeginTime,ClockIn)) <6  and EndTime <= ClockOut  and hour(TIMEDIFF(EndTime,ClockOut)) <6;
