import React, { useState } from 'react';
import { Calendar, Flame, Zap } from 'lucide-react';

export default function ActivityHeatmap({ completedDays = {}, streak = 1, totalXp = 0 }) {
  const [hoveredCell, setHoveredCell] = useState(null);

  const completedKeys = Object.keys(completedDays).filter(k => k.startsWith('python_day_') && !!completedDays[k]);
  const completedCount = completedKeys.length;

  // Build a true GitHub 7-row (days of week) x 16-column (weeks) matrix = 112 days
  const numWeeks = 16;
  const totalDays = numWeeks * 7;
  const today = new Date();
  
  // Align ending day with today
  const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (totalDays - 1 - (6 - dayOfWeek)));

  // Map dates to activity count
  const dateActivityMap = {};
  completedKeys.forEach((key) => {
    const record = completedDays[key];
    if (record && typeof record === 'object' && record.completedAt) {
      const isoDate = record.completedAt.split('T')[0];
      dateActivityMap[isoDate] = (dateActivityMap[isoDate] || 0) + 2; // day completion counts as 2 activities
    } else {
      // If legacy boolean, map to recent days
      const isoToday = today.toISOString().split('T')[0];
      dateActivityMap[isoToday] = (dateActivityMap[isoToday] || 0) + 1;
    }
  });

  // If user has streak / completed days today, make sure active days are filled
  const todayIso = today.toISOString().split('T')[0];
  if (!dateActivityMap[todayIso] && completedCount > 0) {
    dateActivityMap[todayIso] = 2;
  }

  // Populate weeks array: each week has 7 days (Sun to Sat)
  const weeks = [];
  const monthLabels = [];
  let currentMonth = '';

  for (let w = 0; w < numWeeks; w++) {
    const weekDays = [];
    for (let d = 0; d < 7; d++) {
      const cellDate = new Date(startDate);
      cellDate.setDate(startDate.getDate() + (w * 7 + d));
      const iso = cellDate.toISOString().split('T')[0];
      const dateLabel = cellDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const monthName = cellDate.toLocaleDateString('en-US', { month: 'short' });

      // Track month labels for column header
      if (d === 0 && monthName !== currentMonth) {
        currentMonth = monthName;
        monthLabels.push({ weekIndex: w, month: monthName });
      }

      const isFuture = cellDate > today;
      const count = isFuture ? 0 : (dateActivityMap[iso] || 0);

      let level = 0;
      if (count === 1) level = 1;
      else if (count === 2) level = 2;
      else if (count === 3) level = 3;
      else if (count >= 4) level = 4;

      weekDays.push({
        date: cellDate,
        iso,
        dateLabel,
        count,
        level,
        isFuture
      });
    }
    weeks.push(weekDays);
  }

  const totalContributions = Object.values(dateActivityMap).reduce((a, b) => a + b, 0) || completedCount;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-4 font-sans text-slate-900">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <h3 className="text-base font-black text-slate-900 tracking-tight">
              Activity & Contribution Matrix
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {totalContributions} learning contributions across the 15-Day Python Fast-Track
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-semibold self-start sm:self-auto">
          <span>Less</span>
          <span className="w-3 h-3 rounded-xs bg-[#ebedf0] border border-slate-200" title="0 contributions"></span>
          <span className="w-3 h-3 rounded-xs bg-[#9be9a8] border border-[#85e193]" title="1 contribution"></span>
          <span className="w-3 h-3 rounded-xs bg-[#40c463] border border-[#34b655]" title="2 contributions"></span>
          <span className="w-3 h-3 rounded-xs bg-[#30a14e] border border-[#279443]" title="3 contributions"></span>
          <span className="w-3 h-3 rounded-xs bg-[#216e39] border border-[#1b5e30]" title="4+ contributions"></span>
          <span>More</span>
        </div>
      </div>

      {/* GitHub Calendar Grid Container */}
      <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 sm:p-5 overflow-x-auto relative">
        <div className="inline-block min-w-full">
          
          {/* Month Labels Row */}
          <div className="flex text-[10px] font-bold text-slate-400 mb-1.5 pl-7">
            {weeks.map((_, wIdx) => {
              const labelObj = monthLabels.find(m => m.weekIndex === wIdx);
              return (
                <div key={wIdx} className="w-3.5 sm:w-4 mr-1 text-left">
                  {labelObj ? labelObj.month : ''}
                </div>
              );
            })}
          </div>

          {/* Grid with Weekday Labels */}
          <div className="flex items-start">
            
            {/* Weekday Labels (Mon, Wed, Fri) */}
            <div className="flex flex-col justify-between text-[9px] font-bold text-slate-400 mr-2 h-[106px] sm:h-[120px] py-0.5 select-none">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Matrix of Columns (Weeks) */}
            <div className="flex gap-1 sm:gap-1.5">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1 sm:gap-1.5">
                  {week.map((cell, dIdx) => {
                    let colorClass = 'bg-[#ebedf0] border-slate-200/80 hover:border-slate-400';
                    if (cell.level === 1) colorClass = 'bg-[#9be9a8] border-[#85e193] hover:border-[#40c463]';
                    if (cell.level === 2) colorClass = 'bg-[#40c463] border-[#34b655] hover:border-[#30a14e]';
                    if (cell.level === 3) colorClass = 'bg-[#30a14e] border-[#279443] hover:border-[#216e39]';
                    if (cell.level === 4) colorClass = 'bg-[#216e39] border-[#1b5e30] hover:border-emerald-950';

                    if (cell.isFuture) {
                      colorClass = 'bg-slate-50 border-slate-100 opacity-40 cursor-default';
                    }

                    return (
                      <div
                        key={dIdx}
                        onMouseEnter={() => !cell.isFuture && setHoveredCell(cell)}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-xs border transition-all transform ${
                          cell.isFuture ? '' : 'cursor-pointer hover:scale-125 hover:z-10'
                        } ${colorClass}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Floating Tooltip Box */}
        {hoveredCell && (
          <div className="absolute top-2 right-4 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-800 z-30 animate-in fade-in duration-150">
            <span>
              {hoveredCell.count > 0 
                ? `🔥 ${hoveredCell.count} lesson activities on ${hoveredCell.dateLabel}` 
                : `No activity on ${hoveredCell.dateLabel}`}
            </span>
          </div>
        )}
      </div>

      {/* Footer Stats summary */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
        <span className="font-medium flex items-center space-x-1.5">
          <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
          <span>Current Streak: <strong className="text-slate-900 font-bold">{streak} Days</strong></span>
        </span>
        <span className="font-medium">Fast-Track Progress: <strong className="text-slate-900 font-bold">{completedCount} / 15 Days</strong></span>
        <span className="font-medium">Milestone: <strong className="text-indigo-600 font-bold">AI Engineer Level 1</strong></span>
      </div>

    </div>
  );
}
