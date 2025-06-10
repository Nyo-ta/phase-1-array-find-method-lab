function superbowlWin(record) {
  const winresult = record.find(entry=> entry.result === "W");
  return winresult ? winresult.year : undefined;
}


