import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Flame, 
  Trophy, 
  CheckCircle2, 
  HelpCircle, 
  Code,
  TrendingUp
} from 'lucide-react';
import AnalyticsDashboard from './AnalyticsDashboard';

export default function AnalyticsView({ userState }) {
  return (
    <AnalyticsDashboard userState={userState} />
  );
}
