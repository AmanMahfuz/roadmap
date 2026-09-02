import React, { useState } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Crown,
  Medal,
  Swords
} from 'lucide-react';
import { generateMockLeaderboard } from '../utils/dataUtils';

export default function LeaderboardPage({ userState }) {
  const [timeFrame, setTimeFrame] = useState('This Week');
  
  // Real data anchor
  const currentUserXp = userState?.xp || 0;
  const totalUsers = 1250;
  
  const leaderboardData = generateMockLeaderboard(currentUserXp);
  const currentUserRank = leaderboardData.find(u => u.isCurrentUser)?.rank || 1;
  const top10Users = leaderboardData.slice(0, 10);

  const friendsList = [
    { name: "Alice", xp: Math.floor(currentUserXp * 1.5), rank: Math.max(1, currentUserRank - 5) },
    { name: "Bob", xp: Math.floor(currentUserXp * 1.2), rank: Math.max(1, currentUserRank - 2) },
    { name: "You", xp: currentUserXp, rank: currentUserRank },
    { name: "Charlie", xp: Math.floor(currentUserXp * 0.8), rank: currentUserRank + 15 },
    { name: "Diana", xp: Math.floor(currentUserXp * 0.4), rank: currentUserRank + 40 }
  ];

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-amber-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-700" />;
    return <span className="font-bold text-slate-500 w-5 text-center">{rank}</span>;
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-emerald-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-rose-500" />;
    return <span className="w-4 h-4 block text-slate-300">-</span>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans text-slate-900 space-y-6 animate-in fade-in slide-in-from-bottom-4">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900">Leaderboard</h1>
            <p className="text-sm text-slate-500 font-medium">Compete with developers worldwide</p>
          </div>
        </div>
        <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
          {['Today', 'This Week', 'All Time'].map(tf => (
            <button
              key={tf}
              onClick={() => setTimeFrame(tf)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                timeFrame === tf ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Leaderboard (Top 10) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Your Rank Card */}
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl shadow-md p-6 text-white flex items-center justify-between">
            <div>
              <p className="text-indigo-200 font-bold mb-1">Your Rank</p>
              <div className="flex items-end space-x-2">
                <span className="text-4xl font-black">#{currentUserRank}</span>
                <span className="text-indigo-200 font-medium mb-1">of {totalUsers}</span>
              </div>
              <p className="text-sm text-indigo-100 mt-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1 text-emerald-300" />
                +5 from last week
              </p>
            </div>
            <div className="text-right">
              <p className="text-indigo-200 font-bold mb-1">Total XP</p>
              <p className="text-3xl font-black">{currentUserXp}</p>
              <p className="text-sm text-indigo-100 mt-2 text-right">
                73 XP to Rank #46
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-800">Global Top 10</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {top10Users.map((user) => (
                <div key={user.rank} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-bold text-slate-900">{user.name}</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="font-bold text-slate-700">{user.xp.toLocaleString()} XP</span>
                    <div className="w-6 flex justify-center">
                      {getTrendIcon(user.trend)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* League System Preview */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 border-2 border-slate-300 mb-4 shadow-inner">
              <span className="text-2xl font-black text-slate-400">B</span>
            </div>
            <h3 className="font-black text-xl text-slate-800">Bronze League</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">Top 20% get promoted to Silver</p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-slate-400 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-xs font-bold text-slate-600">673 XP to promotion</p>
          </div>

          {/* Friends Leaderboard */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center">
                <Users className="w-4 h-4 mr-2 text-indigo-500" />
                Friends
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {friendsList.map((friend, idx) => (
                <div key={idx} className={`flex items-center justify-between px-6 py-3 ${friend.name === 'You' ? 'bg-indigo-50/50' : 'hover:bg-slate-50'}`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-slate-400 w-4">{idx + 1}</span>
                    <span className={`text-sm font-bold ${friend.name === 'You' ? 'text-indigo-700' : 'text-slate-700'}`}>
                      {friend.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-slate-600">{friend.xp.toLocaleString()}</span>
                    {friend.name !== 'You' && (
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Challenge">
                        <Swords className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
              <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Invite Friends</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
