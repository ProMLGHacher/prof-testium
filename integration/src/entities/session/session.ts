type Session = {
    id: string,
    date: string,
    duration: string,
    score: number,
    maxScore: number,
    isSuccessful: boolean,
    mark: number,
    descriptionEvaluationReason: string,
    urlRecordingFile: string
}

type Analytics = {
    totalSessions: number,
    successfulSessions: number,
    failedSessions: number,
    averageScore: number,
    minScore: number,
    maxScore: number,
    topSessions: Session[]
}