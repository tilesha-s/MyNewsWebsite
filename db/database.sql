-- database.sql
-- News table and DML operations
CREATE TABLE news (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  category VARCHAR(100),
  date DATE,
);

-- INSERT sample 
INSERT INTO news (title, content, category, date,) VALUES
('Sri Lanka set to regain economic output lost to crisis', 'President says the economy is recovering after reforms and debt restructuring.', 'Economy', '2025-11-07', 'Reuters', 'https://www.reuters.com/world/asia-pacific/sri-lanka-set-regain-economic-output-lost-crisis-dissanayake-says-budget-speech-2025-11-07/', ),
('Sri Lanka secures staff-level IMF agreement on fourth review', 'Sri Lanka reached a staff-level agreement with the IMF on the fourth review.', 'Finance', '2025-04-25', 'Reuters', 'https://www.reuters.com/markets/asia/sri-lanka-secures-staff-level-imf-agreement-fourth-review-bailout-2025-04-25/', ),
('Sri Lanka clinches deal with Japan to restructure $2.5 billion in debt', 'Officials confirmed a deal with Japan to restructure billions in debt.', 'International', '2025-03-07', 'Reuters', 'https://www.reuters.com/markets/asia/sri-lanka-clinches-deal-with-japan-restructure-25-billion-debt-2025-03-07/',),
('Debt-stricken Sri Lanka marks independence day as new president pledges to rebuild', 'The president pledged reforms as the country marks independence amid recovery efforts.', 'Politics', '2025-02-04', 'AP', 'https://apnews.com/article/c6735ce632e52dc9841f3fe132271752', ),
('Sri Lanka parliament votes to fire country police chief over abuse of power', 'Parliament voted to remove the police chief following investigations into alleged misconduct.', 'Law', '2025-01-15', 'AP', 'https://apnews.com/article/d0cfd69ae1e16d4b0f56188352b6c45f',);

-- SELECT example
SELECT * FROM news;

-- UPDATE example
UPDATE news
SET title = 'Local: Festival celebrations continue'
WHERE id = 1;

-- DELETE example
DELETE FROM news
WHERE id = 5;
