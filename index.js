import express from 'express';
import holidays from "./holidays.js";

const server = express();

server.get("/holidays", (req, res) => {
  res.send(holidays);
});

server.get("/is-today-holiday", (req, res) => {
  const today = new Date();

  const todayIsHoliday = holidays.filter((holiday) => {
    return holiday === today.toLocaleDateString();
  });

  if(todayIsHoliday.length !== 0){
    res.send(`Sim, hoje é ${todayIsHoliday[0].name}`);
  }else{
    res.send(`Não, hoje não é feriado`);
  }
});

server.listen(3000);