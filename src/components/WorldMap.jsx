import React from 'react';
import { 
  Trees, 
  Castle, 
  Building2, 
  Shield, 
  Rocket, 
  Compass, 
  Lock, 
  CheckCircle2, 
  Crown, 
  Sparkles, 
  PlayCircle,
  ChevronRight
} from 'lucide-react';
import { WORLD_REGIONS } from '../data/tracksData';

const REGION_ICON_MAP = {
  Trees,
  Castle,
  Building2,
  Shield,
  Rocket,
  Compass
};

export default function WorldMap({ 
  userState, 
  onSelectRegion, 
  onOpenBossBattle 
}) {
  const isRegionUnlocked = (regionId) => {
    const region = WORLD_REGIONS[regionId];
    if (!region || !region.unlockPrereq) return true;

    const prereqId = region.unlockPrereq;
    const prereqDaysCompleted = Object.keys(userState.completedDays).filter(k => k.startsWith(prereqId)).length;
    return prereqDaysCompleted >= 4 || !!userState.completedDays[`${prereqId}-day-7`];
  };

  const getRegionCompletedCount = (regionId) => {
    return Object.keys(userState.completedDays).filter(k => k.startsWith(regionId)).length;
  };

  const regionList = Object.values(WORLD_REGIONS);

  return (
    <div className="world-map-wrapper">
      <div className="map-hero-header">
        <div className="hero-tag">
          <Sparkles size={16} /> RPG World Quest
        </div>
        <h2 className="world-title">Developer World Map</h2>
        <p className="world-subtitle">Conquer each realm and unlock advanced tech cities!</p>
      </div>

      {/* World Map Regions Grid */}
      <div className="world-regions-container">
        {regionList.map((region, index) => {
          const IconComponent = REGION_ICON_MAP[region.icon] || Trees;
          const unlocked = isRegionUnlocked(region.id);
          const completedCount = getRegionCompletedCount(region.id);
          const isFullyCompleted = completedCount >= region.totalDays;
          const percent = Math.round((completedCount / region.totalDays) * 100);

          return (
            <div key={region.id} className="region-path-segment">
              {index > 0 && (
                <div className={`path-connector-line ${unlocked ? 'line-unlocked' : 'line-locked'}`}>
                  <div className="flow-dot"></div>
                </div>
              )}

              <div 
                className={`world-region-card ${unlocked ? 'unlocked' : 'locked'} ${isFullyCompleted ? 'completed-realm' : ''}`}
                style={{ '--region-color': region.themeColor, '--bg-grad': region.bgGradient }}
              >
                <div className="region-card-top">
                  <div className="region-avatar-box">
                    <IconComponent size={28} />
                  </div>
                  <div className="region-status-badge">
                    {isFullyCompleted ? (
                      <span className="badge-done"><CheckCircle2 size={14} /> Completed</span>
                    ) : unlocked ? (
                      <span className="badge-open"><PlayCircle size={14} /> Unlocked</span>
                    ) : (
                      <span className="badge-lock"><Lock size={14} /> Locked</span>
                    )}
                  </div>
                </div>

                <div className="region-card-body">
                  <h3 className="region-name-ml">{region.name}</h3>
                  <p className="region-desc">{region.description}</p>

                  <div className="region-progress-box">
                    <div className="progress-info-row">
                      <span>Progress: {completedCount} / {region.totalDays} Days</span>
                      <span>{percent}%</span>
                    </div>
                    <div className="region-track">
                      <div className="region-fill" style={{ width: `${percent}%`, backgroundColor: region.themeColor }}></div>
                    </div>
                  </div>
                </div>

                <div className="region-card-actions">
                  {unlocked ? (
                    <>
                      <button onClick={() => onSelectRegion(region.id)} className="btn-enter-region">
                        Enter Realm <ChevronRight size={16} />
                      </button>
                      <button 
                        onClick={() => onOpenBossBattle(region.id)} 
                        className="btn-boss-battle" 
                        title="Boss Challenge"
                      >
                        <Crown size={16} /> Boss Battle
                      </button>
                    </>
                  ) : (
                    <div className="locked-notice">
                      <Lock size={14} /> Complete previous levels to unlock
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
