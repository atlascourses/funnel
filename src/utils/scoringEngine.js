export function calculateResult(answers) {
    const scores = {
        SKILL: 0,
        CONTENT: 0,
        LOCAL: 0,
        SELL_SCALE: 0,
        CREATIVE: 0,
        TECH: 0
    };

    // Answers 0-11 contribute to points
    for (let i = 0; i < 12; i++) {
        const profile = answers[i];
        if (profile && scores[profile] !== undefined) {
            scores[profile]++;
        }
    }

    // Find max score
    let maxScore = -1;
    let candidates = [];

    for (const [profile, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            candidates = [profile];
        } else if (score === maxScore) {
            candidates.push(profile);
        }
    }

    if (candidates.length === 1) {
        return candidates[0];
    }

    // Tie Breaker 1: Question 13 (index 12)
    const q13Choice = answers[12];
    if (candidates.includes(q13Choice)) {
        return q13Choice;
    }

    // Tie Breaker 2: Priority Order
    const priorityOrder = ["SKILL", "CONTENT", "LOCAL", "SELL_SCALE", "CREATIVE", "TECH"];
    for (const profile of priorityOrder) {
        if (candidates.includes(profile)) {
            return profile;
        }
    }

    return candidates[0];
}
