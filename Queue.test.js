// 0. import Queue มาใช้ ใน test
const Queue = require("./Queue");
// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)
test("สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)", ()=> {
    const testQueue = new Queue();
    expect(testQueue.empty()).toBe(true);
});
// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20
test("สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20", ()=> {
    const testQueue = new Queue(1);
    const testInput = 20;
    expect(testQueue.enqueue(testInput)).toBe(true);
    expect(testQueue.dequeue()).toBe(testInput);
})
// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)
test("สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)", ()=> {
    const testQueue = new Queue(1);
    const testInput = 20;
    testQueue.enqueue(testInput);
    expect(testQueue.full()).toBe(true);
})
// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)
test("สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)", ()=>{
    const testQueue = new Queue(1);
    const testInput = 5;
    testQueue.enqueue(1);
    expect(testQueue.enqueue(testInput)).toBe(false);
})
// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน
test("สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน", ()=>{
    const testQueue = new Queue(2);
    const testInput1 = 1, testInput2 = 2;
    testQueue.enqueue(testInput1);
    testQueue.enqueue(testInput2);

    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.dequeue()).toBe(2);
})
// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null
test("สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null", ()=>{
    const testQueue = new Queue(1);
    expect(testQueue.dequeue()).toBe(null);
})


// 7. หาบัคเอง

test("สร้าง queue size 3 และ enqueue 1 และ enqueue 2 และ enqueue 3 และ dequeue 2 ครั้ง และ enqueue 4 และ dequeue อีกครั้ง และ enqueue 5 และ dequeue จะต้องได้ค่า 4", ()=>{
    const testQueue = new Queue(3);

    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.enqueue(4);
    testQueue.dequeue();
    testQueue.enqueue(5);
    expect(testQueue.dequeue()).toBe(4)
})