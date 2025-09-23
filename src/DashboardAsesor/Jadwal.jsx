import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, Users } from "lucide-react";
import { useAssesment } from "../context/AssesmentContext";
import { useDashboardAsesor } from "../context/DashboardAsesorContext";

const JadwalSertifikasi = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7)); // August 2025
  const { assesments } = useAssesment();
  const { currentAsesor } = useDashboardAsesor();

  const assesmentList = assesments.filter(
    (a) => a.assesor_id === currentAsesor?.user?.assesor?.id
  );

  console.log("assesmen", assesmentList);
  console.log("Current Asesor:", currentAsesor);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Sample schedule data
  const scheduleData = assesmentList.reduce((acc, a) => {
    const date = new Date(a.tanggal_mulai);

    // filter hanya bulan & tahun yang sama dengan currentDate
    if (
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      const day = date.getDate();

      acc[day] = {
        title: `${a.schema?.jurusan?.kode_jurusan} - ${a.schema?.judul_skema}`,
        location: a.tuk,
        time: `${new Date(a.tanggal_mulai).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} - ${new Date(a.tanggal_selesai).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`,
        participants: 0, // bisa diganti jumlah peserta
      };
    }

    return acc;
  }, {});

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getPrevMonthDays = (date) => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 0);
    return prevMonth.getDate();
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const prevMonthDays = getPrevMonthDays(currentDate);
    const days = [];

    // Previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${prevMonthDays - i}`}
          style={{
            aspectRatio: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s ease",
            cursor: "pointer",
            color: "#9ca3af",
          }}
        >
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const hasSchedule = scheduleData[day];
      days.push(
        <div
          key={day}
          style={{
            aspectRatio: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: hasSchedule ? "600" : "500",
            transition: "all 0.2s ease",
            cursor: "pointer",
            color: hasSchedule ? "white" : "#374151",
            backgroundColor: hasSchedule ? "#3b82f6" : "transparent",
          }}
          onMouseEnter={(e) => {
            if (hasSchedule) {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "scale(1.05)";
            } else {
              e.target.style.backgroundColor = "#f3f4f6";
            }
          }}
          onMouseLeave={(e) => {
            if (hasSchedule) {
              e.target.style.backgroundColor = "#3b82f6";
              e.target.style.transform = "scale(1)";
            } else {
              e.target.style.backgroundColor = "transparent";
            }
          }}
        >
          {day}
        </div>
      );
    }

    // Next month's leading days
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          style={{
            aspectRatio: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            transition: "all 0.2s ease",
            cursor: "pointer",
            color: "#9ca3af",
          }}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const getScheduledDays = () => {
    return Object.keys(scheduleData).map((day) => parseInt(day));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "16px",
          position: "sticky",
          top: "0",
          zIndex: "10",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "0",
          }}
        >
          Jadwal Sertifikasi Mendatang
        </h1>
      </div>

      <div
        style={{
          padding: "16px",
          maxWidth: "448px",
          margin: "0 auto",
        }}
      >
        {/* Calendar Container */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            padding: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Calendar Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <button
              onClick={() => navigateMonth(-1)}
              style={{
                padding: "8px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "background-color 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              <ChevronLeft size={20} color="#4b5563" />
            </button>

            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0",
              }}
            >
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>

            <button
              onClick={() => navigateMonth(1)}
              style={{
                padding: "8px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "background-color 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              <ChevronRight size={20} color="#4b5563" />
            </button>
          </div>

          {/* Days of Week Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              marginBottom: "8px",
            }}
          >
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  color: "#6b7280",
                  fontWeight: "500",
                  padding: "8px 0",
                  fontSize: "14px",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
            }}
          >
            {renderCalendarDays()}
          </div>
        </div>

        {/* Legend */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            padding: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
              }}
            ></div>
            <span
              style={{
                color: "#374151",
                fontWeight: "500",
              }}
            >
              Jadwal Anda
            </span>
          </div>
        </div>

        {/* Schedule Details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {getScheduledDays().map((day) => {
            const schedule = scheduleData[day];
            return (
              <div
                key={day}
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      borderRadius: "8px",
                      padding: "8px",
                      minWidth: "48px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      {day}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        opacity: "0.9",
                      }}
                    >
                      {months[currentDate.getMonth()].substring(0, 3)}
                    </div>
                  </div>

                  <div style={{ flex: "1" }}>
                    <h3
                      style={{
                        fontWeight: "bold",
                        color: "#111827",
                        marginBottom: "4px",
                        fontSize: "14px",
                        lineHeight: "1.25",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {schedule.title}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#4b5563",
                          fontSize: "12px",
                        }}
                      >
                        <Clock size={14} />
                        <span>{schedule.time}</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#4b5563",
                          fontSize: "12px",
                        }}
                      >
                        <MapPin size={14} />
                        <span>{schedule.location}</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#4b5563",
                          fontSize: "12px",
                        }}
                      >
                        <Users size={14} />
                        <span>{schedule.participants} Peserta</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JadwalSertifikasi;
