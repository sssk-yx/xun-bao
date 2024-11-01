// 模拟宝藏地图API
class TreasureMap {
    static async getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static async decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    reject("没有线索可以解码!");
                }
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    static async searchTemple(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    reject("糟糕!遇到了神庙守卫!");
                }
                resolve("找到了一个神秘的箱子和一个谜题...");
            }, 2000);
        });
    }

    static async solvePuzzle() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.7) {
                    resolve("谜题解开!前方有陷阱...");
                } else {
                    reject("谜题解不开!无法继续前行...");
                }
            }, 1800);
        });
    }

    static async defeatTrap() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.6) {
                    resolve("成功击败陷阱!继续前进...");
                } else {
                    reject("陷阱太难!无法继续前进...");
                }
            }, 1600);
        });
    }

    static async openTreasureBox() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 1000);
        });
    }
}

async function findTreasureWithAsyncAwait() {
    const steps = document.querySelectorAll('.step');
    const resultDiv = document.querySelector('.result');
    let currentStep = 0;

    function updateProgress() {
        steps.forEach((step, index) => {
            step.classList.remove('active');
            if (index <= currentStep) {
                step.classList.add('active');
            }
        });
    }

    try {
        const clue = await TreasureMap.getInitialClue();
        console.log(clue);
        resultDiv.textContent = clue;
        currentStep++;
        updateProgress();

        const location = await TreasureMap.decodeAncientScript(clue);
        console.log(location);
        resultDiv.textContent = location;
        currentStep++;
        updateProgress();

        const boxAndPuzzle = await TreasureMap.searchTemple(location);
        console.log(boxAndPuzzle);
        resultDiv.textContent = boxAndPuzzle;
        currentStep++;
        updateProgress();

        const puzzleSolution = await TreasureMap.solvePuzzle();
        console.log(puzzleSolution);
        resultDiv.textContent = puzzleSolution;
        currentStep++;
        updateProgress();

        const trapDefeat = await TreasureMap.defeatTrap();
        console.log(trapDefeat);
        resultDiv.textContent = trapDefeat;
        currentStep++;
        updateProgress();

        const treasure = await TreasureMap.openTreasureBox();
        console.log(treasure);
        resultDiv.textContent = treasure;
        resultDiv.style.color = '#5cb85c'; // Change text color to green for success
    } catch (error) {
        console.error("任务失败:", error);
        resultDiv.textContent = `任务失败: ${error}`;
        resultDiv.style.color = '#d9534f'; // Change text color to red for failure
    }
}

document.getElementById('startButton').addEventListener('click', findTreasureWithAsyncAwait);